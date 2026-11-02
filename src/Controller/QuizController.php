<?php

namespace App\Controller;

use App\Entity\DafStats;
use App\Entity\QuizResult;
use App\Entity\Users;
use App\Repository\DafStatsRepository;
use App\Repository\QuizResultRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;

#[Route('/api/quiz')]
class QuizController extends AbstractController
{
    #[Route('/result', name: 'api_quiz_result', methods: ['POST'])]
    #[IsGranted('IS_AUTHENTICATED_FULLY')]
    public function saveResult(Request $request, EntityManagerInterface $entityManager, DafStatsRepository $dafStatsRepository): JsonResponse
    {
        $data = json_decode($request->getContent(), true);
        /** @var Users $user */
        $user = $this->getUser();

        if (!$data || !isset($data['massekhet'], $data['perek'], $data['daf'], $data['score'], $data['totalQuestions'])) {
            return $this->json(['error' => 'Invalid data'], 400);
        }

        // 1. Save QuizResult
        $quizResult = new QuizResult();
        $quizResult->setUser($user);
        $quizResult->setMassekhet($data['massekhet']);
        $quizResult->setPerek($data['perek']);
        $quizResult->setDaf($data['daf']);
        $quizResult->setScore($data['score']);
        $quizResult->setTotalQuestions($data['totalQuestions']);
        
        $entityManager->persist($quizResult);

        // 2. Update DafStats
        $dafStats = $dafStatsRepository->findOneBy([
            'user' => $user,
            'massekhet' => $data['massekhet'],
            'perek' => $data['perek'],
            'daf' => $data['daf']
        ]);

        if (!$dafStats) {
            $dafStats = new DafStats();
            $dafStats->setUser($user);
            $dafStats->setMassekhet($data['massekhet']);
            $dafStats->setPerek($data['perek']);
            $dafStats->setDaf($data['daf']);
            $dafStats->setStudied(true);
            $dafStats->setStudiedAt(new \DateTimeImmutable());
            $dafStats->setAttemptsCount(0);
            $dafStats->setBestScore(0);
        }

        $dafStats->setLastAttemptAt(new \DateTimeImmutable());
        $dafStats->setAttemptsCount($dafStats->getAttemptsCount() + 1);
        $dafStats->setLastScore($data['score']);
        
        if ($data['score'] > $dafStats->getBestScore()) {
            $dafStats->setBestScore($data['score']);
        }

        $entityManager->persist($dafStats);
        $entityManager->flush();

        return $this->json(['message' => 'Result saved successfully']);
    }

    #[Route('/stats', name: 'api_quiz_stats', methods: ['GET'])]
    #[IsGranted('IS_AUTHENTICATED_FULLY')]
    public function getStats(DafStatsRepository $dafStatsRepository, QuizResultRepository $quizResultRepository): JsonResponse
    {
        /** @var Users $user */
        $user = $this->getUser();

        // Get all studied dapim stats
        $allStats = $dafStatsRepository->findBy(['user' => $user]);
        
        // Get last 5 results
        $lastResults = $quizResultRepository->findBy(['user' => $user], ['createdAt' => 'DESC'], 5);

        $statsData = array_map(function(DafStats $stat) {
            return [
                'massekhet' => $stat->getMassekhet(),
                'perek' => $stat->getPerek(),
                'daf' => $stat->getDaf(),
                'studied' => $stat->isStudied(),
                'lastScore' => $stat->getLastScore(),
                'bestScore' => $stat->getBestScore(),
                'attemptsCount' => $stat->getAttemptsCount(),
                'lastAttemptAt' => $stat->getLastAttemptAt(),
            ];
        }, $allStats);

        $resultsData = array_map(function(QuizResult $result) {
            return [
                'massekhet' => $result->getMassekhet(),
                'perek' => $result->getPerek(),
                'daf' => $result->getDaf(),
                'score' => $result->getScore(),
                'totalQuestions' => $result->getTotalQuestions(),
                'createdAt' => $result->getCreatedAt(),
            ];
        }, $lastResults);

        return $this->json([
            'dafStats' => $statsData,
            'lastResults' => $resultsData
        ]);
    }
}

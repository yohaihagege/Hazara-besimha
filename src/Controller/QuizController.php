<?php

namespace App\Controller;

use App\Entity\DafQuestion;
use App\Entity\DafStats;
use App\Entity\QuizResult;
use App\Entity\Users;
use App\Repository\DafQuestionRepository;
use App\Repository\DafStatsRepository;
use App\Repository\QuizResultRepository;
use App\Service\DafYomiQuestionService;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpKernel\KernelInterface;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;

#[Route('/api/quiz')]
class QuizController extends AbstractController
{
    #[Route('/questions', name: 'api_quiz_questions', methods: ['GET'])]
    public function getQuestions(
        Request $request,
        DafYomiQuestionService $dafYomiQuestionService,
        DafQuestionRepository $dafQuestionRepository,
        EntityManagerInterface $entityManager,
        KernelInterface $kernel
    ): JsonResponse {
        $massekhet = trim((string) $request->query->get('massekhet', ''));
        $perek = trim((string) $request->query->get('perek', ''));
        $daf = trim((string) $request->query->get('daf', ''));
        $refresh = (bool) $request->query->get('refresh', false);

        if ($massekhet === '' || $perek === '' || $daf === '') {
            return $this->json(['error' => 'Paramètres massekhet, perek et daf requis.'], 400);
        }

        $urls = $dafYomiQuestionService->getDafYomiUrls($massekhet, $daf);
        $cacheKey = sprintf('%s__%s__%s', $massekhet, $perek, $daf);
        $cacheFile = $kernel->getProjectDir() . '/var/daf_questions_cache.json';

        // 1. Vérifier en base de données (si disponible)
        $existingEntity = null;
        $dbAvailable = false;

        try {
            $this->ensureDafQuestionTableExists($entityManager);
            $dbAvailable = true;
            $existingEntity = $dafQuestionRepository->findOneByDaf($massekhet, $perek, $daf);

            if ($existingEntity !== null && !$refresh && !empty($existingEntity->getQuestions())) {
                return $this->json([
                    'massekhet' => $massekhet,
                    'perek' => $perek,
                    'daf' => $daf,
                    'sourceUrl' => $existingEntity->getSourceUrl() ?? $urls['portalUrl'],
                    'portalUrl' => $urls['portalUrl'],
                    'pageUrl' => $urls['pageUrlA'],
                    'cached' => true,
                    'generatedBy' => 'database-cache',
                    'questions' => $existingEntity->getQuestions(),
                ]);
            }
        } catch (\Throwable) {
            $dbAvailable = false;
        }

        // 2. Vérifier le cache fichier local si la BDD n'est pas démarrée
        if (!$dbAvailable && !$refresh && is_file($cacheFile)) {
            $fileData = json_decode((string) file_get_contents($cacheFile), true);
            if (is_array($fileData) && !empty($fileData[$cacheKey]['questions'])) {
                return $this->json([
                    'massekhet' => $massekhet,
                    'perek' => $perek,
                    'daf' => $daf,
                    'sourceUrl' => $fileData[$cacheKey]['sourceUrl'] ?? $urls['portalUrl'],
                    'portalUrl' => $urls['portalUrl'],
                    'pageUrl' => $urls['pageUrlA'],
                    'cached' => true,
                    'generatedBy' => 'file-cache',
                    'questions' => $fileData[$cacheKey]['questions'],
                ]);
            }
        }

        // 3. Générer les questions depuis https://daf-yomi.com/dafYomi.aspx (+ Gemini / analyse du Daf)
        $generated = $dafYomiQuestionService->generateQuestionsForDaf($massekhet, $perek, $daf);

        // 4. Sauvegarder en base de données
        if ($dbAvailable) {
            try {
                $dafQuestion = $existingEntity ?? new DafQuestion();
                $dafQuestion->setMassekhet($massekhet);
                $dafQuestion->setPerek($perek);
                $dafQuestion->setDaf($daf);
                $dafQuestion->setSourceUrl($generated['sourceUrl']);
                $dafQuestion->setDafExcerpt($generated['dafExcerpt']);
                $dafQuestion->setQuestions($generated['questions']);
                $dafQuestion->setUpdatedAt(new \DateTimeImmutable());

                $entityManager->persist($dafQuestion);
                $entityManager->flush();
            } catch (\Throwable) {
                // Ignorer si erreur ponctuelle d'écriture BDD
            }
        }

        // 5. Sauvegarder également dans le cache fichier de secours
        try {
            $fileData = is_file($cacheFile) ? (json_decode((string) file_get_contents($cacheFile), true) ?: []) : [];
            $fileData[$cacheKey] = [
                'massekhet' => $massekhet,
                'perek' => $perek,
                'daf' => $daf,
                'sourceUrl' => $generated['sourceUrl'],
                'updatedAt' => (new \DateTimeImmutable())->format(\DateTimeInterface::ATOM),
                'questions' => $generated['questions'],
            ];
            @file_put_contents($cacheFile, json_encode($fileData, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));
        } catch (\Throwable) {
            // Ignorer si le dossier var n'est pas accessible en écriture
        }

        return $this->json([
            'massekhet' => $massekhet,
            'perek' => $perek,
            'daf' => $daf,
            'sourceUrl' => $generated['sourceUrl'],
            'portalUrl' => $generated['portalUrl'],
            'pageUrl' => $generated['pageUrl'],
            'cached' => false,
            'generatedBy' => $generated['generatedBy'],
            'questions' => $generated['questions'],
        ]);
    }

    private function ensureDafQuestionTableExists(EntityManagerInterface $entityManager): void
    {
        $conn = $entityManager->getConnection();
        $conn->executeStatement(
            'CREATE TABLE IF NOT EXISTS daf_question (
                id INT AUTO_INCREMENT NOT NULL,
                massekhet VARCHAR(255) NOT NULL,
                perek VARCHAR(255) NOT NULL,
                daf VARCHAR(255) NOT NULL,
                source_url VARCHAR(500) DEFAULT NULL,
                daf_excerpt LONGTEXT DEFAULT NULL,
                questions JSON NOT NULL,
                created_at DATETIME NOT NULL,
                updated_at DATETIME NOT NULL,
                UNIQUE INDEX UNIQ_DAF_QUESTION_LOCATION (massekhet, perek, daf),
                PRIMARY KEY(id)
            ) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB'
        );
    }

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

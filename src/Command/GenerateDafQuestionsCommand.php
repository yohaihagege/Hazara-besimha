<?php

namespace App\Command;

use App\Entity\DafQuestion;
use App\Repository\DafQuestionRepository;
use App\Service\DafYomiQuestionService;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;

#[AsCommand(
    name: 'app:generate-daf-questions',
    description: 'Récupère un Daf depuis https://daf-yomi.com/dafYomi.aspx et génère les questions QCM/texte en français et hébreu.',
)]
class GenerateDafQuestionsCommand extends Command
{
    public function __construct(
        private readonly DafYomiQuestionService $dafYomiQuestionService,
        private readonly DafQuestionRepository $dafQuestionRepository,
        private readonly EntityManagerInterface $entityManager
    ) {
        parent::__construct();
    }

    protected function configure(): void
    {
        $this
            ->addArgument('massekhet', InputArgument::OPTIONAL, 'Nom du traité en hébreu (ex: ברכות, שבת, פסחים)', 'ברכות')
            ->addArgument('perek', InputArgument::OPTIONAL, 'Nom du chapitre en hébreu (ex: פרק א)', 'פרק א')
            ->addArgument('daf', InputArgument::OPTIONAL, 'Nom du Daf en hébreu (ex: דף ב)', 'דף ב');
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $io = new SymfonyStyle($input, $output);

        $massekhet = (string) $input->getArgument('massekhet');
        $perek = (string) $input->getArgument('perek');
        $daf = (string) $input->getArgument('daf');

        $io->title(sprintf('Génération des questions depuis daf-yomi.com pour %s - %s - %s', $massekhet, $perek, $daf));

        $generated = $this->dafYomiQuestionService->generateQuestionsForDaf($massekhet, $perek, $daf);

        $io->writeln('URL Source : <info>' . $generated['sourceUrl'] . '</info>');
        $io->writeln('Moteur utilisé : <info>' . $generated['generatedBy'] . '</info>');
        $io->writeln('Nombre de questions générées : <info>' . count($generated['questions']) . '</info>');

        try {
            $existing = $this->dafQuestionRepository->findOneByDaf($massekhet, $perek, $daf) ?? new DafQuestion();
            $existing->setMassekhet($massekhet);
            $existing->setPerek($perek);
            $existing->setDaf($daf);
            $existing->setSourceUrl($generated['sourceUrl']);
            $existing->setDafExcerpt($generated['dafExcerpt']);
            $existing->setQuestions($generated['questions']);
            $existing->setUpdatedAt(new \DateTimeImmutable());

            $this->entityManager->persist($existing);
            $this->entityManager->flush();

            $io->success('Questions enregistrées en base de données (table daf_question) !');
        } catch (\Throwable $e) {
            $io->warning('Base de données non joignable (' . $e->getMessage() . '), voici les questions générées :');
        }

        foreach ($generated['questions'] as $q) {
            $io->section(sprintf('Question #%d (%s)', $q['id'], $q['type']));
            $io->writeln('FR : ' . $q['questionFr']);
            $io->writeln('HE : ' . $q['question']);
        }

        return Command::SUCCESS;
    }
}

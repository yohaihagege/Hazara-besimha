<?php

namespace App\Repository;

use App\Entity\DafQuestion;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<DafQuestion>
 */
class DafQuestionRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, DafQuestion::class);
    }

    public function findOneByDaf(string $massekhet, string $perek, string $daf): ?DafQuestion
    {
        return $this->findOneBy([
            'massekhet' => $massekhet,
            'perek' => $perek,
            'daf' => $daf,
        ]);
    }
}

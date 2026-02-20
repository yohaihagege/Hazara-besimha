<?php

namespace App\Entity;

use App\Repository\QuizResultRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: QuizResultRepository::class)]
class QuizResult
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\ManyToOne(inversedBy: 'quizResults')]
    #[ORM\JoinColumn(nullable: false)]
    private ?Users $user = null;

    #[ORM\Column(length: 255)]
    private ?string $massekhet = null;

    #[ORM\Column(length: 255)]
    private ?string $perek = null;

    #[ORM\Column(length: 255)]
    private ?string $daf = null;

    #[ORM\Column]
    private ?int $score = null;

    #[ORM\Column]
    private ?int $totalQuestions = null;

    #[ORM\Column]
    private ?\DateTimeImmutable $createdAt = null;

    public function __construct()
    {
        $this->createdAt = new \DateTimeImmutable();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getUser(): ?Users
    {
        return $this->user;
    }

    public function setUser(?Users $user): static
    {
        $this->user = $user;

        return $this;
    }

    public function getMassekhet(): ?string
    {
        return $this->massekhet;
    }

    public function setMassekhet(string $massekhet): static
    {
        $this->massekhet = $massekhet;

        return $this;
    }

    public function getPerek(): ?string
    {
        return $this->perek;
    }

    public function setPerek(string $perek): static
    {
        $this->perek = $perek;

        return $this;
    }

    public function getDaf(): ?string
    {
        return $this->daf;
    }

    public function setDaf(string $daf): static
    {
        $this->daf = $daf;

        return $this;
    }

    public function getScore(): ?int
    {
        return $this->score;
    }

    public function setScore(int $score): static
    {
        $this->score = $score;

        return $this;
    }

    public function getTotalQuestions(): ?int
    {
        return $this->totalQuestions;
    }

    public function setTotalQuestions(int $totalQuestions): static
    {
        $this->totalQuestions = $totalQuestions;

        return $this;
    }

    public function getCreatedAt(): ?\DateTimeImmutable
    {
        return $this->createdAt;
    }

    public function setCreatedAt(\DateTimeImmutable $createdAt): static
    {
        $this->createdAt = $createdAt;

        return $this;
    }
}

<?php

namespace App\Entity;

use App\Repository\DafStatsRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: DafStatsRepository::class)]
class DafStats
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\ManyToOne(inversedBy: 'dafStats')]
    #[ORM\JoinColumn(nullable: false)]
    private ?Users $user = null;

    #[ORM\Column(length: 255)]
    private ?string $massekhet = null;

    #[ORM\Column(length: 255)]
    private ?string $perek = null;

    #[ORM\Column(length: 255)]
    private ?string $daf = null;

    #[ORM\Column]
    private ?bool $studied = null;

    #[ORM\Column(nullable: true)]
    private ?\DateTimeImmutable $studiedAt = null;

    #[ORM\Column(nullable: true)]
    private ?\DateTimeImmutable $lastAttemptAt = null;

    #[ORM\Column]
    private ?int $attemptsCount = null;

    #[ORM\Column(nullable: true)]
    private ?int $lastScore = null;

    #[ORM\Column(nullable: true)]
    private ?int $bestScore = null;

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

    public function isStudied(): ?bool
    {
        return $this->studied;
    }

    public function setStudied(bool $studied): static
    {
        $this->studied = $studied;

        return $this;
    }

    public function getStudiedAt(): ?\DateTimeImmutable
    {
        return $this->studiedAt;
    }

    public function setStudiedAt(?\DateTimeImmutable $studiedAt): static
    {
        $this->studiedAt = $studiedAt;

        return $this;
    }

    public function getLastAttemptAt(): ?\DateTimeImmutable
    {
        return $this->lastAttemptAt;
    }

    public function setLastAttemptAt(?\DateTimeImmutable $lastAttemptAt): static
    {
        $this->lastAttemptAt = $lastAttemptAt;

        return $this;
    }

    public function getAttemptsCount(): ?int
    {
        return $this->attemptsCount;
    }

    public function setAttemptsCount(int $attemptsCount): static
    {
        $this->attemptsCount = $attemptsCount;

        return $this;
    }

    public function getLastScore(): ?int
    {
        return $this->lastScore;
    }

    public function setLastScore(?int $lastScore): static
    {
        $this->lastScore = $lastScore;

        return $this;
    }

    public function getBestScore(): ?int
    {
        return $this->bestScore;
    }

    public function setBestScore(?int $bestScore): static
    {
        $this->bestScore = $bestScore;

        return $this;
    }
}

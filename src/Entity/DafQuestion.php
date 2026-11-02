<?php

namespace App\Entity;

use App\Repository\DafQuestionRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: DafQuestionRepository::class)]
#[ORM\Table(name: 'daf_question')]
#[ORM\UniqueConstraint(name: 'UNIQ_DAF_QUESTION_LOCATION', columns: ['massekhet', 'perek', 'daf'])]
class DafQuestion
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $massekhet = null;

    #[ORM\Column(length: 255)]
    private ?string $perek = null;

    #[ORM\Column(length: 255)]
    private ?string $daf = null;

    #[ORM\Column(length: 500, nullable: true)]
    private ?string $sourceUrl = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $dafExcerpt = null;

    #[ORM\Column(type: Types::JSON)]
    private array $questions = [];

    #[ORM\Column]
    private ?\DateTimeImmutable $createdAt = null;

    #[ORM\Column]
    private ?\DateTimeImmutable $updatedAt = null;

    public function __construct()
    {
        $now = new \DateTimeImmutable();
        $this->createdAt = $now;
        $this->updatedAt = $now;
    }

    public function getId(): ?int
    {
        return $this->id;
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

    public function getSourceUrl(): ?string
    {
        return $this->sourceUrl;
    }

    public function setSourceUrl(?string $sourceUrl): static
    {
        $this->sourceUrl = $sourceUrl;

        return $this;
    }

    public function getDafExcerpt(): ?string
    {
        return $this->dafExcerpt;
    }

    public function setDafExcerpt(?string $dafExcerpt): static
    {
        $this->dafExcerpt = $dafExcerpt;

        return $this;
    }

    public function getQuestions(): array
    {
        return $this->questions;
    }

    public function setQuestions(array $questions): static
    {
        $this->questions = $questions;

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

    public function getUpdatedAt(): ?\DateTimeImmutable
    {
        return $this->updatedAt;
    }

    public function setUpdatedAt(\DateTimeImmutable $updatedAt): static
    {
        $this->updatedAt = $updatedAt;

        return $this;
    }
}

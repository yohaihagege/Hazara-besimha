<?php

namespace App\Entity;

use App\Repository\UsersRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Security\Core\User\PasswordAuthenticatedUserInterface;
use Symfony\Component\Security\Core\User\UserInterface;

#[ORM\Entity(repositoryClass: UsersRepository::class)]
class Users implements UserInterface, PasswordAuthenticatedUserInterface
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 180, unique: true)]
    private ?string $email = null;

    #[ORM\Column]
    private array $roles = [];

    /**
     * @var string The hashed password
     */
    #[ORM\Column]
    private ?string $password = null;

    #[ORM\Column(length: 255)]
    private ?string $pseudo = null;

    #[ORM\OneToMany(mappedBy: 'user', targetEntity: QuizResult::class, orphanRemoval: true)]
    private $quizResults;

    #[ORM\OneToMany(mappedBy: 'user', targetEntity: DafStats::class, orphanRemoval: true)]
    private $dafStats;

    public function __construct()
    {
        $this->quizResults = new \Doctrine\Common\Collections\ArrayCollection();
        $this->dafStats = new \Doctrine\Common\Collections\ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getPseudo(): ?string
    {
        return $this->pseudo;
    }

    public function setPseudo(string $pseudo): static
    {
        $this->pseudo = $pseudo;

        return $this;
    }

    /**
     * @return \Doctrine\Common\Collections\Collection<int, QuizResult>
     */
    public function getQuizResults(): \Doctrine\Common\Collections\Collection
    {
        return $this->quizResults;
    }

    public function addQuizResult(QuizResult $quizResult): static
    {
        if (!$this->quizResults->contains($quizResult)) {
            $this->quizResults->add($quizResult);
            $quizResult->setUser($this);
        }

        return $this;
    }

    public function removeQuizResult(QuizResult $quizResult): static
    {
        if ($this->quizResults->removeElement($quizResult)) {
            // set the owning side to null (unless already changed)
            if ($quizResult->getUser() === $this) {
                $quizResult->setUser(null);
            }
        }

        return $this;
    }

    /**
     * @return \Doctrine\Common\Collections\Collection<int, DafStats>
     */
    public function getDafStats(): \Doctrine\Common\Collections\Collection
    {
        return $this->dafStats;
    }

    public function addDafStat(DafStats $dafStat): static
    {
        if (!$this->dafStats->contains($dafStat)) {
            $this->dafStats->add($dafStat);
            $dafStat->setUser($this);
        }

        return $this;
    }

    public function removeDafStat(DafStats $dafStat): static
    {
        if ($this->dafStats->removeElement($dafStat)) {
            // set the owning side to null (unless already changed)
            if ($dafStat->getUser() === $this) {
                $dafStat->setUser(null);
            }
        }

        return $this;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): static
    {
        $this->email = $email;

        return $this;
    }

    /**
     * A visual identifier that represents this user.
     *
     * @see UserInterface
     */
    public function getUserIdentifier(): string
    {
        return (string) $this->email;
    }

    /**
     * @see UserInterface
     */
    public function getRoles(): array
    {
        $roles = $this->roles;
        // guarantee every user at least has ROLE_USER
        $roles[] = 'ROLE_USER';

        return array_unique($roles);
    }

    public function setRoles(array $roles): static
    {
        $this->roles = $roles;

        return $this;
    }

    /**
     * @see PasswordAuthenticatedUserInterface
     */
    public function getPassword(): string
    {
        return $this->password;
    }

    public function setPassword(string $password): static
    {
        $this->password = $password;

        return $this;
    }

    /**
     * @see UserInterface
     */
    public function eraseCredentials(): void
    {
        // If you store any temporary, sensitive data on the user, clear it here
        // $this->plainPassword = null;
    }
}

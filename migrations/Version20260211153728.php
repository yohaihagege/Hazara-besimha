<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20260211153728 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE daf_stats (id INT AUTO_INCREMENT NOT NULL, massekhet VARCHAR(255) NOT NULL, perek VARCHAR(255) NOT NULL, daf VARCHAR(255) NOT NULL, studied TINYINT NOT NULL, studied_at DATETIME DEFAULT NULL, last_attempt_at DATETIME DEFAULT NULL, attempts_count INT NOT NULL, last_score INT DEFAULT NULL, best_score INT DEFAULT NULL, user_id INT NOT NULL, INDEX IDX_7F1C3769A76ED395 (user_id), PRIMARY KEY (id)) DEFAULT CHARACTER SET utf8mb4');
        $this->addSql('CREATE TABLE quiz_result (id INT AUTO_INCREMENT NOT NULL, massekhet VARCHAR(255) NOT NULL, perek VARCHAR(255) NOT NULL, daf VARCHAR(255) NOT NULL, score INT NOT NULL, total_questions INT NOT NULL, created_at DATETIME NOT NULL, user_id INT NOT NULL, INDEX IDX_FE2E314AA76ED395 (user_id), PRIMARY KEY (id)) DEFAULT CHARACTER SET utf8mb4');
        $this->addSql('ALTER TABLE daf_stats ADD CONSTRAINT FK_7F1C3769A76ED395 FOREIGN KEY (user_id) REFERENCES users (id)');
        $this->addSql('ALTER TABLE quiz_result ADD CONSTRAINT FK_FE2E314AA76ED395 FOREIGN KEY (user_id) REFERENCES users (id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE daf_stats DROP FOREIGN KEY FK_7F1C3769A76ED395');
        $this->addSql('ALTER TABLE quiz_result DROP FOREIGN KEY FK_FE2E314AA76ED395');
        $this->addSql('DROP TABLE daf_stats');
        $this->addSql('DROP TABLE quiz_result');
    }
}

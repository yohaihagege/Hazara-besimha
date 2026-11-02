<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

final class Version20261102120000 extends AbstractMigration
{
    public function getDescription(): string
    {
        return 'Create daf_question table to store quiz questions generated from daf-yomi.com';
    }

    public function up(Schema $schema): void
    {
        $this->addSql('CREATE TABLE daf_question (id INT AUTO_INCREMENT NOT NULL, massekhet VARCHAR(255) NOT NULL, perek VARCHAR(255) NOT NULL, daf VARCHAR(255) NOT NULL, source_url VARCHAR(500) DEFAULT NULL, daf_excerpt LONGTEXT DEFAULT NULL, questions JSON NOT NULL, created_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', updated_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', UNIQUE INDEX UNIQ_DAF_QUESTION_LOCATION (massekhet, perek, daf), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
    }

    public function down(Schema $schema): void
    {
        $this->addSql('DROP TABLE daf_question');
    }
}

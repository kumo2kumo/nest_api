-- AlterTable
ALTER TABLE `Report` ADD COLUMN `myScore` INTEGER NOT NULL DEFAULT 0,
    ADD COLUMN `opponentScore` INTEGER NOT NULL DEFAULT 0;

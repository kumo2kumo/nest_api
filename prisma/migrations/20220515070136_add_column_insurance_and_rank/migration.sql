/*
  Warnings:

  - Added the required column `rankName` to the `Club` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rankUnit` to the `Club` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Club` ADD COLUMN `rankName` VARCHAR(191) NOT NULL COMMENT 'ランキング表示名',
    ADD COLUMN `rankUnit` VARCHAR(191) NOT NULL COMMENT 'ランキング単位';

-- AlterTable
ALTER TABLE `User` ADD COLUMN `insurance` INTEGER NOT NULL DEFAULT 0 COMMENT '保険加入ステータス';

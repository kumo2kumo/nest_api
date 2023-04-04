/*
  Warnings:

  - Added the required column `category` to the `Report` table without a default value. This is not possible if the table is not empty.
  - Added the required column `date` to the `Report` table without a default value. This is not possible if the table is not empty.
  - Added the required column `time` to the `Report` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Report` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Report` ADD COLUMN `category` INTEGER NOT NULL,
    ADD COLUMN `date` DATETIME(3) NOT NULL,
    ADD COLUMN `time` VARCHAR(191) NOT NULL,
    ADD COLUMN `title` VARCHAR(191) NOT NULL;

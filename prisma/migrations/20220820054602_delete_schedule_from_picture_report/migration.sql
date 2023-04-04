/*
  Warnings:

  - You are about to drop the column `scheduleId` on the `PictureReport` table. All the data in the column will be lost.
  - Added the required column `date` to the `PictureReport` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `PictureReport` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `PictureReport` DROP FOREIGN KEY `PictureReport_scheduleId_fkey`;

-- AlterTable
ALTER TABLE `PictureReport` DROP COLUMN `scheduleId`,
    ADD COLUMN `date` DATETIME(3) NOT NULL,
    ADD COLUMN `name` VARCHAR(191) NOT NULL;

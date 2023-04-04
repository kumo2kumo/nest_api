/*
  Warnings:

  - You are about to drop the column `scheduleId` on the `Report` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `Report` DROP FOREIGN KEY `Report_scheduleId_fkey`;

-- AlterTable
ALTER TABLE `Report` DROP COLUMN `scheduleId`;

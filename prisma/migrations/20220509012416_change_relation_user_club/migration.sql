/*
  Warnings:

  - You are about to drop the `Absence` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `AssistMember` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ClubUser` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ContactLate` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `CountPicture` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `CountReport` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `CountTool` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `GoalMember` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Lateness` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ScoreMember` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[userId]` on the table `Member` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `clubId` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Absence` DROP FOREIGN KEY `Absence_clubId_fkey`;

-- DropForeignKey
ALTER TABLE `Absence` DROP FOREIGN KEY `Absence_userId_fkey`;

-- DropForeignKey
ALTER TABLE `AssistMember` DROP FOREIGN KEY `AssistMember_clubId_fkey`;

-- DropForeignKey
ALTER TABLE `AssistMember` DROP FOREIGN KEY `AssistMember_userId_fkey`;

-- DropForeignKey
ALTER TABLE `ClubUser` DROP FOREIGN KEY `ClubUser_clubId_fkey`;

-- DropForeignKey
ALTER TABLE `ClubUser` DROP FOREIGN KEY `ClubUser_userId_fkey`;

-- DropForeignKey
ALTER TABLE `ContactLate` DROP FOREIGN KEY `ContactLate_clubId_fkey`;

-- DropForeignKey
ALTER TABLE `ContactLate` DROP FOREIGN KEY `ContactLate_userId_fkey`;

-- DropForeignKey
ALTER TABLE `CountPicture` DROP FOREIGN KEY `CountPicture_clubId_fkey`;

-- DropForeignKey
ALTER TABLE `CountPicture` DROP FOREIGN KEY `CountPicture_userId_fkey`;

-- DropForeignKey
ALTER TABLE `CountReport` DROP FOREIGN KEY `CountReport_clubId_fkey`;

-- DropForeignKey
ALTER TABLE `CountReport` DROP FOREIGN KEY `CountReport_userId_fkey`;

-- DropForeignKey
ALTER TABLE `CountTool` DROP FOREIGN KEY `CountTool_clubId_fkey`;

-- DropForeignKey
ALTER TABLE `CountTool` DROP FOREIGN KEY `CountTool_userId_fkey`;

-- DropForeignKey
ALTER TABLE `GoalMember` DROP FOREIGN KEY `GoalMember_clubId_fkey`;

-- DropForeignKey
ALTER TABLE `GoalMember` DROP FOREIGN KEY `GoalMember_userId_fkey`;

-- DropForeignKey
ALTER TABLE `Lateness` DROP FOREIGN KEY `Lateness_clubId_fkey`;

-- DropForeignKey
ALTER TABLE `Lateness` DROP FOREIGN KEY `Lateness_userId_fkey`;

-- DropForeignKey
ALTER TABLE `ScoreMember` DROP FOREIGN KEY `ScoreMember_clubId_fkey`;

-- DropForeignKey
ALTER TABLE `ScoreMember` DROP FOREIGN KEY `ScoreMember_userId_fkey`;

-- AlterTable
ALTER TABLE `User` ADD COLUMN `absence` INTEGER NOT NULL DEFAULT 0 COMMENT '欠席回数',
    ADD COLUMN `assist` INTEGER NOT NULL DEFAULT 0 COMMENT 'アシスト回数' ,
    ADD COLUMN `clubId` INTEGER NOT NULL,
    ADD COLUMN `commentLate` INTEGER NOT NULL DEFAULT 0 COMMENT 'コメント遅れ',
    ADD COLUMN `contactLate` INTEGER NOT NULL DEFAULT 0 COMMENT '連絡網遅れ',
    ADD COLUMN `countPicture` INTEGER NOT NULL DEFAULT 0 COMMENT '写真アップ回数',
    ADD COLUMN `countReport` INTEGER NOT NULL DEFAULT 0 COMMENT '活動記録作成回数',
    ADD COLUMN `countTool` INTEGER NOT NULL DEFAULT 0 COMMENT '道具カウント',
    ADD COLUMN `lateness` INTEGER NOT NULL DEFAULT 0 COMMENT '遅刻回数',
    ADD COLUMN `score` INTEGER NOT NULL DEFAULT 0 COMMENT '得点回数';

-- DropTable
DROP TABLE `Absence`;

-- DropTable
DROP TABLE `AssistMember`;

-- DropTable
DROP TABLE `ClubUser`;

-- DropTable
DROP TABLE `ContactLate`;

-- DropTable
DROP TABLE `CountPicture`;

-- DropTable
DROP TABLE `CountReport`;

-- DropTable
DROP TABLE `CountTool`;

-- DropTable
DROP TABLE `GoalMember`;

-- DropTable
DROP TABLE `Lateness`;

-- DropTable
DROP TABLE `ScoreMember`;

-- CreateIndex
CREATE UNIQUE INDEX `Member_userId_key` ON `Member`(`userId`);

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_clubId_fkey` FOREIGN KEY (`clubId`) REFERENCES `Club`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

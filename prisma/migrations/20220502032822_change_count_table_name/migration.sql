/*
  Warnings:

  - You are about to drop the `PictureCount` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ReportCount` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ToolCount` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `PictureCount` DROP FOREIGN KEY `PictureCount_clubId_fkey`;

-- DropForeignKey
ALTER TABLE `PictureCount` DROP FOREIGN KEY `PictureCount_userId_fkey`;

-- DropForeignKey
ALTER TABLE `ReportCount` DROP FOREIGN KEY `ReportCount_clubId_fkey`;

-- DropForeignKey
ALTER TABLE `ReportCount` DROP FOREIGN KEY `ReportCount_userId_fkey`;

-- DropForeignKey
ALTER TABLE `ToolCount` DROP FOREIGN KEY `ToolCount_clubId_fkey`;

-- DropForeignKey
ALTER TABLE `ToolCount` DROP FOREIGN KEY `ToolCount_userId_fkey`;

-- DropTable
DROP TABLE `PictureCount`;

-- DropTable
DROP TABLE `ReportCount`;

-- DropTable
DROP TABLE `ToolCount`;

-- CreateTable
CREATE TABLE `CountTool` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `count` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NULL,
    `userId` INTEGER NOT NULL,
    `clubId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CountReport` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `count` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NULL,
    `userId` INTEGER NOT NULL,
    `clubId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CountPicture` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `count` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NULL,
    `userId` INTEGER NOT NULL,
    `clubId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `CountTool` ADD CONSTRAINT `CountTool_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CountTool` ADD CONSTRAINT `CountTool_clubId_fkey` FOREIGN KEY (`clubId`) REFERENCES `Club`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CountReport` ADD CONSTRAINT `CountReport_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CountReport` ADD CONSTRAINT `CountReport_clubId_fkey` FOREIGN KEY (`clubId`) REFERENCES `Club`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CountPicture` ADD CONSTRAINT `CountPicture_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CountPicture` ADD CONSTRAINT `CountPicture_clubId_fkey` FOREIGN KEY (`clubId`) REFERENCES `Club`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

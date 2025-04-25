/*
  Warnings:

  - You are about to drop the column `category` on the `Feedback` table. All the data in the column will be lost.
  - You are about to drop the column `text` on the `Feedback` table. All the data in the column will be lost.
  - Added the required column `message` to the `Feedback` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Feedback" DROP COLUMN "category",
DROP COLUMN "text",
ADD COLUMN     "message" TEXT NOT NULL;

-- DropEnum
DROP TYPE "FeedbackCategory";

-- CreateEnum
CREATE TYPE "FeedbackCategory" AS ENUM ('GENERAL', 'BUG_REPORT', 'FEATURE_REQUEST', 'SUGGESTION');

-- CreateTable
CREATE TABLE "Feedback" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "category" "FeedbackCategory" NOT NULL DEFAULT 'GENERAL',
    "message" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Feedback_pkey" PRIMARY KEY ("id")
);

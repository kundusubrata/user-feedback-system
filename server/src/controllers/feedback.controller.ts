import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { FeedbackInput } from "../types/feedback";

const prisma = new PrismaClient();

// Post a new feedback
export const postFeedback = async (req: Request, res: Response) => {
  try {
    const { name, email, message }: FeedbackInput = req.body;
    const feedback = await prisma.feedback.create({
      data: { name, email, message },
    });
    res.status(201).json(feedback);
  } catch (error) {
    res.status(500).json({ error: "Failed to submit feedback" });
  }
};

// Get all feedback
export const getFeedback = async (req: Request, res: Response) => {
  const { sortBy = "createdAt", order = "desc" } = req.query;

  try {
    const feedbackList = await prisma.feedback.findMany({
      orderBy: {
        [sortBy as string]: order === "asc" ? "asc" : "desc",
      },
    });

    res.json(feedbackList);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch feedback" });
  }
};

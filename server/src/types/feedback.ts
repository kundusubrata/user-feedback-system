import { FeedbackCategory } from "@prisma/client";

export interface FeedbackInput {
  name: string;
  email: string;
  message: string;
  category: FeedbackCategory
}

export interface Feedback extends FeedbackInput {
  id: number;
  createdAt: string;
}

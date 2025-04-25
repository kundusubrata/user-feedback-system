export enum FeedbackCategory {
  GENERAL = "GENERAL",
  BUG_REPORT = "BUG_REPORT",
  FEATURE_REQUEST = "FEATURE_REQUEST",
  SUGGESTION = "SUGGESTION",
}

export interface FeedbackInput {
  name: string;
  email: string;
  message: string;
  category: FeedbackCategory;
}

export interface Feedback extends FeedbackInput {
  id: number;
  createdAt: string;
}

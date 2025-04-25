export interface FeedbackInput {
  name: string;
  email: string;
  message: string;
}

export interface Feedback extends FeedbackInput {
  id: number;
  createdAt: string;
}

import express from "express";
import { getFeedback, postFeedback } from "../controllers/feedback.controller";

const router = express.Router();


router.route("/feedback").get(getFeedback);
router.route("/feedback").post(postFeedback);

export default router;
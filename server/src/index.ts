import "dotenv/config";
import express from "express";
import feedbackRoutes from "./routes/feedback.routes";
import cors from "cors";
import path from "path";

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(cors());

// Routes
app.use("/api/v1", feedbackRoutes);


app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);

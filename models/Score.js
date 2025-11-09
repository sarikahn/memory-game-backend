// backend/models/Score.js
import mongoose from "mongoose";

const ScoreSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    moves: { type: Number, required: true },
    time: { type: Number, required: true },
    difficulty: { type: String, required: true },
    category: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.models.Score || mongoose.model("Score", ScoreSchema);



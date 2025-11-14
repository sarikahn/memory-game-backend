import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// ---------------- MongoDB ----------------
const MONGO_URI = process.env.MONGO_URI;

mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.error("MongoDB Error:", err));

// ---------------- Schema ----------------
const scoreSchema = new mongoose.Schema({
  name: String,
  moves: Number,
  time: Number,
  difficulty: String,
  category: String
});

const Score = mongoose.model("Score", scoreSchema);

// ---------------- Routes ----------------

// POST → Save score
app.post("/scores", async (req, res) => {
  try {
    const score = new Score(req.body);
    await score.save();
    res.json({ message: "Score saved!", score });
  } catch (err) {
    res.status(500).json({ error: "Error saving score" });
  }
});

// GET → Fetch scores
app.get("/scores", async (req, res) => {
  try {
    const scores = await Score.find().sort({ moves: 1, time: 1 });
    res.json(scores);
  } catch (err) {
    res.status(500).json({ error: "Error fetching scores" });
  }
});

// ---------------- Port ----------------
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});

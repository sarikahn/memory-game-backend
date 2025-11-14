import express from "express";
import Score from "../models/Score.js"; // your Mongoose model

const router = express.Router();

// POST score
router.post("/scores", async (req, res) => {
  try {
    const { name, moves, time, difficulty, category } = req.body;

    const newScore = new Score({
      name,
      moves,
      time,
      difficulty,
      category,
    });

    await newScore.save();

    res.json({ message: "Score saved!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to save score" });
  }
});

// GET scores
router.get("/scores", async (req, res) => {
  try {
    const scores = await Score.find();
    res.json(scores);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch scores" });
  }
});

export default router;

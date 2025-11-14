import express from "express";
import Score from "../models/Score.js";  // Make sure this path matches your models folder

const router = express.Router();

// GET top 10 scores sorted by moves (ascending) and time (ascending)
router.get("/", async (req, res) => {
  try {
    const scores = await Score.find().sort({ moves: 1, time: 1 }).limit(10);
    res.json(scores);
  } catch (err) {
    console.error("Failed to fetch scores:", err);
    res.status(500).json({ error: "Failed to fetch scores" });
  }
});

// POST a new score
router.post("/", async (req, res) => {
  try {
    const { name, moves, time } = req.body;

    // Basic validation
    if (!name || moves == null || time == null) {
      return res.status(400).json({ error: "Name, moves, and time are required" });
    }

    const score = new Score({ name, moves, time });
    await score.save();

    res.status(201).json(score);
  } catch (err) {
    console.error("Failed to save score:", err);
    res.status(500).json({ error: "Failed to save score" });
  }
});

export default router;


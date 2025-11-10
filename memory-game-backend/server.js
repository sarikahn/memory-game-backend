// server.js

import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Dummy game scores (you can replace this with MongoDB or file storage later)
const scores = [
  { id: 1, name: "Alice", moves: 12 },
  { id: 2, name: "Bob", moves: 15 },
  { id: 3, name: "Charlie", moves: 10 },
];

// ✅ Root route — Render will check this for health
app.get("/", (req, res) => {
  res.send("🎯 Memory Game Backend is running successfully!");
});

// ✅ Get all scores
app.get("/scores", (req, res) => {
  res.json(scores);
});

// ✅ Post a new score
app.post("/scores", (req, res) => {
  const { name, moves } = req.body;

  if (!name || !moves) {
    return res.status(400).json({ message: "Name and moves are required" });
  }

  const newScore = {
    id: scores.length + 1,
    name,
    moves,
  };

  scores.push(newScore);
  res.status(201).json(newScore);
});

// ✅ Start server
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});


// server.js

import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 10000;

// Middleware
app.use(cors());
app.use(express.json());

// Root route for Render check
app.get("/", (req, res) => {
  res.send("🎯 Memory Game Backend is running on Render!");
});

// Dummy scores data
const scores = [
  { id: 1, name: "Alice", moves: 12 },
  { id: 2, name: "Bob", moves: 15 },
  { id: 3, name: "Charlie", moves: 10 },
];

// GET route to fetch scores
app.get("/scores", (req, res) => {
  res.json(scores);
});

// POST route to add new score
app.post("/scores", (req, res) => {
  const { name, moves } = req.body;

  if (!name || !moves) {
    return res.status(400).json({ error: "Name and moves are required" });
  }

  const newScore = { id: scores.length + 1, name, moves };
  scores.push(newScore);

  res.status(201).json(newScore);
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});



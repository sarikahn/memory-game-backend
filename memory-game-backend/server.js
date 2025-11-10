import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 5000; // Use Render's dynamic port

// Middleware
app.use(cors());
app.use(express.json());

// In-memory scores array
let scores = [
  { id: 1, name: "Alice", moves: 12 },
  { id: 2, name: "Bob", moves: 15 },
  { id: 3, name: "Charlie", moves: 10 }
];

// Default route
app.get("/", (req, res) => {
  res.send("✅ Memory Game Backend is running successfully!");
});

// GET all scores
app.get("/scores", (req, res) => {
  res.json(scores);
});

// POST a new score
app.post("/scores", (req, res) => {
  const { name, moves, time, difficulty } = req.body;
  if (!name || moves === undefined) {
    return res.status(400).json({ message: "Name and moves are required" });
  }
  const newScore = { name, moves, time, difficulty, date: new Date() };
  scores.push(newScore);
  res.json({ message: "Score added successfully", data: scores });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});


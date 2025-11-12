import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// In-memory store (you can later replace with MongoDB)
let scores = [];

// ✅ POST: Save score
app.post("/scores", (req, res) => {
  const { name, moves } = req.body;

  if (!name || moves === undefined) {
    return res.status(400).json({ message: "Name and moves are required" });
  }

  const newScore = {
    id: scores.length + 1,
    name,
    moves,
    date: new Date()
  };

  scores.push(newScore);
  res.status(201).json({ message: "Score saved successfully", newScore });
});

// ✅ GET: Retrieve scores (sorted by moves)
app.get("/scores", (req, res) => {
  const sortedScores = scores.sort((a, b) => a.moves - b.moves);
  res.json(sortedScores);
});

// ✅ Root route
app.get("/", (req, res) => {
  res.send("Memory Game Backend is running 🚀");
});

// Start server
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));


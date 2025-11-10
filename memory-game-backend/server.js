import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors({ origin: "*" }));

// ✅ Root route for Render health check
app.get("/", (req, res) => {
  res.send("🎯 Memory Game Backend is running successfully!");
});

// ✅ Dummy leaderboard data
let scores = [
  { id: 1, name: "Alice", moves: 12 },
  { id: 2, name: "Bob", moves: 15 },
  { id: 3, name: "Charlie", moves: 10 },
];

// ✅ POST new score
app.post("/scores", (req, res) => {
  const { name, moves } = req.body;
  if (!name || moves === undefined) {
    return res.status(400).json({ message: "Missing name or moves" });
  }
  const newScore = { id: scores.length + 1, name, moves };
  scores.push(newScore);
  res.json({ message: "Score saved!", data: newScore });
});

// ✅ GET all scores
app.get("/scores", (req, res) => {
  const sortedScores = scores.sort((a, b) => a.moves - b.moves);
  res.json(sortedScores);
});

// ✅ Start server on Render
const PORT = process.env.PORT || 10000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


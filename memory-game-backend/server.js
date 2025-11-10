import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors({ origin: "http://localhost:3000" }));

// ✅ Dummy in-memory storage (Replace with MongoDB when ready)
let scores = [
  { name: "Player1", moves: 10 },
  { name: "Player2", moves: 15 }
];

// ✅ Save a score (POST)
app.post("/scores", (req, res) => {
  const { name, moves } = req.body;

  if (!name || moves === undefined) {
    return res.status(400).json({ message: "Missing fields" });
  }

  scores.push({ name, moves });
  res.json({ message: "Score saved!" });
});

// ✅ Retrieve leaderboard (GET)
app.get("/scores", (req, res) => {
  const sortedScores = scores.sort((a, b) => a.moves - b.moves);
  res.json(sortedScores);
});

// ✅ Root route for testing
app.get("/", (req, res) => {
  res.send("✅ Memory Game Backend is running successfully!");
});

// ✅ Start server
app.listen(5000, () => console.log("🚀 Backend running on http://localhost:5000"));


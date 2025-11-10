import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 10000;

// ✅ Root route to confirm deployment
app.get("/", (req, res) => {
  res.send("✅ Memory Game Backend is running successfully!");
});

// ✅ Temporary in-memory leaderboard (for demo)
let scores = [
  { name: "Player1", moves: 10 },
  { name: "Player2", moves: 15 },
];

// ✅ GET route
app.get("/scores", (req, res) => {
  res.json(scores);
});

// ✅ POST route
app.post("/scores", (req, res) => {
  const { name, moves } = req.body;
  if (!name || !moves) {
    return res.status(400).json({ error: "Name and moves are required" });
  }
  scores.push({ name, moves });
  res.json({ message: "Score saved!", scores });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

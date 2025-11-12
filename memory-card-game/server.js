import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

let scores = [
  { id: 1, name: "Alice", moves: 12 },
  { id: 2, name: "Bob", moves: 15 },
  { id: 3, name: "Charlie", moves: 10 },
];

// ✅ GET all scores
app.get("/scores", (req, res) => {
  res.json(scores);
});

// ✅ POST a new score
app.post("/scores", (req, res) => {
  const { name, moves } = req.body;
  if (!name || !moves) {
    return res.status(400).json({ message: "Name and moves are required" });
  }
  const newScore = { id: scores.length + 1, name, moves };
  scores.push(newScore);
  res.status(201).json(newScore);
});

// Test route
app.get("/", (req, res) => {
  res.send("Backend is working!");
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));


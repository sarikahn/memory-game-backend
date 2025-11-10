import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 5000; // Use Render's port

app.use(cors());
app.use(express.json());

// In-memory scores
let scores = [
  { id: 1, name: "Alice", moves: 12 },
  { id: 2, name: "Bob", moves: 15 },
  { id: 3, name: "Charlie", moves: 10 },
];

// POST a new score
app.post("/scores", (req, res) => {
  const { name, moves, time, difficulty } = req.body;
  if (!name || moves === undefined || !time || !difficulty) {
    return res.status(400).json({ message: "Invalid data" });
  }
  scores.push({ name, moves, time, difficulty, date: new Date() });
  res.json({ message: "Score added successfully", data: scores });
});

// GET all scores
app.get("/scores", (req, res) => {
  res.json(scores);
});

// Default route
app.get("/", (req, res) => {
  res.send("✅ Memory Game Backend is running successfully!");
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

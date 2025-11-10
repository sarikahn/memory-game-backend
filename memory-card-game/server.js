import express from "express";
import cors from "cors";

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// In-memory scores array
let scores = [];

// POST a new score
app.post("/scores", (req, res) => {
  const { name, moves, time, difficulty, category } = req.body;
  if (!name || moves === undefined || time === undefined) {
    return res.status(400).json({ message: "Invalid data" });
  }
  scores.push({ name, moves, time, difficulty, category });
  res.json({ message: "Score saved!" });
});

// GET all scores
app.get("/scores", (req, res) => {
  res.json(scores);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

// Default route for testing
app.get("/", (req, res) => {
  res.send("✅ Backend is running successfully!");
});

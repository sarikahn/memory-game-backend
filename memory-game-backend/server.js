import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

let scores = [];

// ✅ POST route to save a player's score
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

// ✅ GET route to get all scores
app.get("/scores", (req, res) => {
  res.json(scores.sort((a, b) => a.moves - b.moves));
});

// ✅ Root route
app.get("/", (req, res) => {
  res.send("🎮 Memory Game Backend is running!");
});

app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));






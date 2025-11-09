import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

let scores = []; // Temporary storage for testing

// GET all scores
app.get("/scores", (req, res) => {
  res.json(scores);
});

// POST a new score
app.post("/scores", (req, res) => {
  const { name, moves, time, difficulty, category } = req.body;

  if (!name || moves === undefined || time === undefined) {
    return res.status(400).json({ message: "Invalid data" });
  }

  const newScore = { name, moves, time, difficulty, category };
  scores.push(newScore);

  res.json({ message: "Score saved!", score: newScore });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});













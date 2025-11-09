import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected"))
.catch((err) => console.error("MongoDB connection error:", err));

// Score schema
const scoreSchema = new mongoose.Schema({
  name: { type: String, required: true },
  moves: { type: Number, required: true },
  time: { type: Number, default: 0 },
  difficulty: { type: String, default: "Medium" },
  category: { type: String, default: "General" },
  date: { type: Date, default: Date.now }
});

const Score = mongoose.model("Score", scoreSchema);

// Routes

// GET all scores
app.get("/scores", async (req, res) => {
  try {
    const scores = await Score.find().sort({ moves: 1, time: 1 });
    res.json(scores);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST new score
app.post("/scores", async (req, res) => {
  try {
    const { name, moves, time, difficulty, category } = req.body;
    const newScore = new Score({ name, moves, time, difficulty, category });
    await newScore.save();
    res.json({ message: "Score saved!" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Health check
app.get("/", (req, res) => {
  res.send("Memory Game Backend Running!");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

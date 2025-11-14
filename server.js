import express from "express";
import cors from "cors";
import mongoose from "mongoose";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// ---------------------
// 1. MONGODB CONNECTION
// ---------------------
const MONGO_URI = process.env.MONGO_URI;

mongoose
  .connect(MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB error:", err));

// ---------------------
// 2. SCORE MODEL
// ---------------------
const scoreSchema = new mongoose.Schema({
  name: String,
  moves: Number,
  time: Number,
  difficulty: String,
  category: String,
  createdAt: { type: Date, default: Date.now }
});

const Score = mongoose.model("Score", scoreSchema);

// ---------------------
// 3. GET SCORES API
// ---------------------
app.get("/scores", async (req, res) => {
  const scores = await Score.find().sort({ moves: 1 }); // Best score first
  res.json(scores);
});

// ---------------------
// 4. POST SCORE API
// ---------------------
app.post("/scores", async (req, res) => {
  try {
    const score = new Score(req.body);
    await score.save();

    res.json({ success: true, message: "Score saved to MongoDB!" });
  } catch (err) {
    console.error("Save error:", err);
    res.status(500).json({ success: false, message: "Error saving score" });
  }
});

// ---------------------
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});



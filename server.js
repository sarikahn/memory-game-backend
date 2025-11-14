import express from "express";
import cors from "cors";
<<<<<<< HEAD
import mongoose from "mongoose";
=======
import dotenv from "dotenv";

dotenv.config();
>>>>>>> c59fd1ebac946c37ca1f40747c9d77764b3a14a2

const app = express();
const PORT = process.env.PORT || 5000;

<<<<<<< HEAD
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


=======
// Enable CORS so frontend can call this backend
app.use(cors({
  origin: "http://localhost:3000" || "*"  // allow frontend URL
}));

// Example memory API
app.get("/api/memory", (req, res) => {
  const memoryData = [
    { id: 1, name: "Card 1", matched: false },
    { id: 2, name: "Card 2", matched: false },
    { id: 3, name: "Card 3", matched: false },
    { id: 4, name: "Card 4", matched: false },
  ];
  res.json(memoryData);
});

// ✅ Add /scores route
app.get("/scores", (req, res) => {
  const scores = [
    { id: 1, name: "Alice", moves: 12 },
    { id: 2, name: "Bob", moves: 15 },
    { id: 3, name: "Charlie", moves: 10 },
  ];
  res.json(scores);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

>>>>>>> c59fd1ebac946c37ca1f40747c9d77764b3a14a2

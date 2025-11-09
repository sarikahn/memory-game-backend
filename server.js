import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

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


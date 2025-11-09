import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
const MONGO_URI = process.env.MONGO_URI || "your_local_mongo_uri_here";
mongoose
  .connect(MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Memory API route
app.get("/api/memory", (req, res) => {
  const memoryData = [
    { id: 1, name: "Card 1", matched: false },
    { id: 2, name: "Card 2", matched: false },
    { id: 3, name: "Card 3", matched: false },
    { id: 4, name: "Card 4", matched: false }
  ];
  res.json(memoryData);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});







import express from "express";
import cors from "cors";
import fs from "fs-extra";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// __dirname setup
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// File paths
const dataDir = path.join(__dirname, "data");
const dataFile = path.join(dataDir, "scores.json");

// Ensure data folder & file exist
await fs.ensureDir(dataDir);
await fs.ensureFile(dataFile);

// Initialize empty array if file is empty
const fileContent = await fs.readFile(dataFile, "utf-8");
if (!fileContent.trim()) {
  await fs.writeJson(dataFile, [], { spaces: 2 });
}

// Root route
app.get("/", (req, res) => {
  res.send("✅ Memory Game Backend is running successfully!");
});

// Get all scores
app.get("/scores", async (req, res) => {
  try {
    const data = await fs.readJson(dataFile);
    res.json(data);
  } catch (error) {
    console.error("❌ Error reading scores file:", error);
    res.status(500).json({ message: "Error reading scores file" });
  }
});

// Add new score
app.post("/scores", async (req, res) => {
  try {
    const { name, score } = req.body;
    if (!name || score === undefined) {
      return res.status(400).json({ message: "Name and score are required" });
    }

    const data = await fs.readJson(dataFile).catch(() => []);
    data.push({ name, score, date: new Date().toISOString() });
    await fs.writeJson(dataFile, data, { spaces: 2 });

    res.status(201).json({ message: "Score added successfully", data });
  } catch (error) {
    console.error("❌ Error saving score:", error);
    res.status(500).json({ message: "Error saving score" });
  }
});

// Start server binding to 0.0.0.0 (all interfaces)
app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});







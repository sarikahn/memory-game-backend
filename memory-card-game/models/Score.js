import mongoose from "mongoose";

const scoreSchema = new mongoose.Schema({
  name: { type: String, required: true },
  moves: { type: Number, required: true },
  time: { type: Number, required: true },
  date: { type: Date, default: Date.now }
});

export default mongoose.model("Score", scoreSchema);


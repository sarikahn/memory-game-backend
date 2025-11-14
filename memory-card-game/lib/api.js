import axios from "axios";

// Update this later when backend is deployed
const API_BASE = "http://localhost:5000";

export const submitScore = async (name, moves, time) => {
  return await axios.post(`${API_BASE}/scores`, {
    name,
    moves,
    time,
  });
};

export const getLeaderboard = async () => {
  const res = await axios.get(`${API_BASE}/scores/top`);
  return res.data;
};

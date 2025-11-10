import axios from "axios";

const BASE_URL = "http://localhost:5000";

async function addScore() {
  try {
    const response = await axios.post(`${BASE_URL}/scores`, {
      name: "Sarika",
      score: 18
    });
    console.log("✅ Response:", response.data);
  } catch (error) {
    if (error.response) {
      console.error("❌ Backend responded with error:", error.response.data);
    } else if (error.request) {
      console.error("❌ No response received. Check if server is running:", `${BASE_URL}/scores`);
    } else {
      console.error("❌ Error sending request:", error.message);
    }
  }
}

addScore();







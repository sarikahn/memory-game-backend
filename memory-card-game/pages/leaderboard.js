import { useEffect, useState } from "react";

export default function Leaderboard() {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    fetch ("http://localhost:5000/scores")
      .then((res) => res.json())
      .then((data) => {
        // Sort by best score (fewest moves)
        const sorted = data.sort((a, b) => a.moves - b.moves);
        setScores(sorted);
      })
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  const medals = ["🥇", "🥈", "🥉"];

  return (
    <div className="p-8 min-h-screen bg-slate-100">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">
        Leaderboard
      </h1>

      <table className="min-w-full border border-gray-300 bg-white rounded-lg shadow-md">
        <thead className="bg-blue-100">
          <tr>
            <th className="border px-4 py-2">Rank</th>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Moves</th>
          </tr>
        </thead>
        <tbody>
          {scores.map((score, index) => (
            <tr
              key={score._id}
              className="text-center hover:bg-gray-100 transition"
            >
              <td className="border px-4 py-2 font-bold">
                {medals[index] || index + 1}
              </td>
              <td className="border px-4 py-2">{score.name}</td>
              <td className="border px-4 py-2">{score.moves}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-center mt-8">
        <button
          onClick={() => (window.location.href = "/")}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
          Back to Game
        </button>
      </div>
    </div>
  );
}







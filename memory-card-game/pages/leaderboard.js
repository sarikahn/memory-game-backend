import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function Leaderboard() {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    fetch("https://memory-game-backend-2gpf.onrender.com/scores")
      .then((res) => res.json())
      .then((data) => {
        const sorted = data.sort((a, b) => a.moves - b.moves);
        setScores(sorted);
      })
      .catch((err) => console.error("Error fetching scores:", err));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 to-orange-200 flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl md:text-5xl font-extrabold text-orange-700 mb-6 text-center drop-shadow">
        🏆 Leaderboard
      </h1>

      <div className="overflow-x-auto w-full max-w-lg">
        <table className="bg-white shadow-xl rounded-2xl overflow-hidden w-full">
          <thead className="bg-orange-500 text-white">
            <tr>
              <th className="px-4 py-2">#</th>
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2">Moves</th>
            </tr>
          </thead>
          <tbody>
            {scores.map((s, i) => (
              <tr
                key={s.id || i}
                className="even:bg-orange-50 hover:bg-orange-100 transition"
              >
                <td className="px-4 py-2 text-center font-semibold">
                  {i + 1}
                </td>
                <td className="px-4 py-2 text-left">{s.name}</td>
                <td className="px-4 py-2 text-center">{s.moves}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Link
        href="/"
        className="mt-6 bg-orange-600 text-white px-6 py-3 rounded-2xl shadow-lg hover:bg-orange-700 transition-all"
      >
        Back to Game
      </Link>
    </div>
  );
}

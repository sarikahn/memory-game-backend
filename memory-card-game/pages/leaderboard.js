import { useEffect, useState } from "react";
import Link from "next/link";

export default function Leaderboard() {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/scores")
      .then((res) => res.json())
      .then((data) => {
        const sorted = data.sort((a, b) => a.moves - b.moves);
        setScores(sorted);
      })
      .catch((err) => console.error("Error fetching scores:", err));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200 flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold text-indigo-700 mb-6">🏆 Leaderboard</h1>

      <table className="table-auto border-collapse border border-gray-400 w-full max-w-md bg-white shadow-lg">
        <thead>
          <tr className="bg-indigo-600 text-white">
            <th className="border border-gray-400 px-4 py-2">#</th>
            <th className="border border-gray-400 px-4 py-2">Name</th>
            <th className="border border-gray-400 px-4 py-2">Moves</th>
          </tr>
        </thead>
        <tbody>
          {scores.map((s, i) => (
            <tr key={s._id} className="text-center">
              <td className="border border-gray-400 px-4 py-2">{i + 1}</td>
              <td className="border border-gray-400 px-4 py-2">{s.name}</td>
              <td className="border border-gray-400 px-4 py-2">{s.moves}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <Link
        href="/"
        className="mt-6 inline-block bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
      >
        🔙 Back to Game
      </Link>
    </div>
  );
}

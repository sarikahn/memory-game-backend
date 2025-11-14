import dynamic from "next/dynamic";
import Link from "next/link";

// 👇 Import GameBoard dynamically — no SSR to prevent hydration mismatch
const GameBoard = dynamic(() => import("../components/GameBoard"), {
  ssr: false,
});

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200 flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl md:text-5xl font-extrabold text-indigo-700 mb-6">
        🧩 Memory Game
      </h1>

      <GameBoard />

      <Link
        href="/leaderboard"
        className="mt-8 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
      >
        🏆 View Leaderboard
      </Link>
    </div>
  );
}

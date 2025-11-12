// pages/index.js
import React, { useState, useEffect } from "react";
import Link from "next/link";

// 🐾 Emoji Categories
const EMOJIS = {
  Animals: ["🐶", "🐱", "🐭", "🐹", "🦊", "🐻", "🐼", "🐨"],
  Sports: ["⚽", "🏀", "🏈", "⚾", "🎾", "🏐", "🏉", "🏓"],
  Flags: ["🇺🇸", "🇬🇧", "🇨🇦", "🇫🇷", "🇯🇵", "🇮🇳", "🇧🇷", "🇩🇪"],
};

// 🎯 Difficulty Levels
const DIFFICULTY = {
  Easy: 4, // 4 pairs (8 cards)
  Medium: 6, // 6 pairs (12 cards)
  Hard: 8, // 8 pairs (16 cards)
};

export default function Home() {
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState([]);
  const [moves, setMoves] = useState(0);
  const [time, setTime] = useState(0);
  const [timerActive, setTimerActive] = useState(false);
  const [difficulty, setDifficulty] = useState("Easy");
  const [category, setCategory] = useState("Animals");

  // 🃏 Shuffle cards
  const shuffleCards = () => {
    const size = DIFFICULTY[difficulty];
    const selectedEmojis = EMOJIS[category].slice(0, size);
    const doubled = [...selectedEmojis, ...selectedEmojis]
      .sort(() => Math.random() - 0.5)
      .map((val, index) => ({ id: index, value: val }));

    setCards(doubled);
    setFlipped([]);
    setMatched([]);
    setMoves(0);
    setTime(0);
    setTimerActive(false);
  };

  // ⏳ Timer
  useEffect(() => {
    let interval;
    if (timerActive) {
      interval = setInterval(() => setTime((t) => t + 1), 1000);
    }
    return () => clearInterval(interval);
  }, [timerActive]);

  // 🧩 Handle card click
  const handleClick = (id) => {
    if (flipped.includes(id) || matched.includes(id)) return;

    const newFlipped = [...flipped, id];
    setFlipped(newFlipped);

    if (newFlipped.length === 2) {
      setMoves((m) => m + 1);
      const [first, second] = newFlipped;
      if (cards[first].value === cards[second].value) {
        setMatched([...matched, cards[first].value]);
        setFlipped([]);
      } else {
        setTimeout(() => setFlipped([]), 800);
      }
    }

    if (!timerActive) setTimerActive(true);
  };

  // 🏆 Check for win
  useEffect(() => {
    if (matched.length === DIFFICULTY[difficulty]) {
      saveScore();
      setTimerActive(false);
      alert(`🎉 You won in ${moves} moves and ${time}s!`);
    }
  }, [matched]);

  // 💾 Save score to backend
  const saveScore = async () => {
    try {
      await fetch("https://memory-game-backend-2gpf.onrender.com/scores", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: "Player",
          moves,
          time,
          date: new Date(),
        }),
      });
    } catch (err) {
      console.error("Error saving score:", err);
    }
  };

  // 🧠 Auto shuffle on load
  useEffect(() => {
    shuffleCards();
  }, [difficulty, category]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200 flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl md:text-5xl font-extrabold text-indigo-700 mb-6 text-center drop-shadow">
        🧠 Memory Card Game
      </h1>

      {/* Controls */}
      <div className="flex flex-wrap gap-4 mb-6 justify-center">
        <select
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
          className="px-3 py-2 rounded-lg border border-indigo-400 bg-white shadow-sm focus:ring focus:ring-indigo-300"
        >
          {Object.keys(DIFFICULTY).map((lvl) => (
            <option key={lvl}>{lvl}</option>
          ))}
        </select>

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="px-3 py-2 rounded-lg border border-indigo-400 bg-white shadow-sm focus:ring focus:ring-indigo-300"
        >
          {Object.keys(EMOJIS).map((cat) => (
            <option key={cat}>{cat}</option>
          ))}
        </select>

        <button
          onClick={shuffleCards}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg shadow-md transition-all"
        >
          🔄 Restart
        </button>
      </div>

      {/* Status */}
      <div className="mb-4 text-lg font-medium text-indigo-700">
        ⏱ Time: {time}s | 🎯 Moves: {moves}
      </div>

      {/* Game Grid */}
      <div
        className={`grid gap-4 ${
          DIFFICULTY[difficulty] === 4
            ? "grid-cols-4"
            : DIFFICULTY[difficulty] === 6
            ? "grid-cols-6"
            : "grid-cols-8"
        }`}
      >
        {cards.map((card, index) => {
          const isFlipped =
            flipped.includes(index) || matched.includes(card.value);
          return (
            <div
              key={index}
              onClick={() => handleClick(index)}
              className={`flex items-center justify-center h-20 w-20 sm:h-24 sm:w-24 rounded-xl shadow-lg cursor-pointer text-3xl font-bold transition-all ${
                isFlipped
                  ? "bg-indigo-500 text-white"
                  : "bg-white hover:bg-indigo-100"
              }`}
            >
              {isFlipped ? card.value : "❓"}
            </div>
          );
        })}
      </div>

      {/* Leaderboard Link */}
      <Link
        href="/leaderboard"
        className="mt-8 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg shadow-md text-lg transition-all"
      >
        🏆 View Leaderboard
      </Link>
    </div>
  );
}


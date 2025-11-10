import { useState, useEffect } from "react";

// Emoji sets for categories
const EMOJIS = {
  Animals: ["🐶","🐱","🐭","🐹","🐰","🦊","🐻","🐼"],
  Sports: ["⚽","🏀","🏈","⚾","🎾","🏐","🏉","🥏"],
  Flags: ["🇺🇸","🇬🇧","🇨🇦","🇫🇷","🇩🇪","🇯🇵","🇮🇳","🇧🇷"]
};

// Difficulty levels map to grid size
const DIFFICULTY = {
  Easy: 4,    // 4x2 grid
  Medium: 4,  // 4x4 grid
  Hard: 6     // 6x6 grid
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

  // Shuffle cards
  const shuffleCards = () => {
    const size = DIFFICULTY[difficulty];
    const selectedEmojis = EMOJIS[category].slice(0, (size * size) / 2);
    const doubled = [...selectedEmojis, ...selectedEmojis]
      .sort(() => Math.random() - 0.5)
      .map((val, index) => ({ id: index, val }));
    setCards(doubled);
    setFlipped([]);
    setMatched([]);
    setMoves(0);
    setTime(0);
    setTimerActive(false);
  };

  useEffect(() => {
    shuffleCards();
  }, [difficulty, category]);

  // Timer
  useEffect(() => {
    let interval;
    if (timerActive) {
      interval = setInterval(() => setTime(prev => prev + 1), 1000);
    }
    return () => clearInterval(interval);
  }, [timerActive]);

  // Handle card click
  const handleClick = (id) => {
    if (flipped.includes(id) || matched.includes(id)) return;

    const newFlipped = [...flipped, id];
    setFlipped(newFlipped);

    if (newFlipped.length === 2) {
      setMoves(moves + 1);
      const [first, second] = newFlipped.map(i => cards[i].val);
      if (first === second) {
        setMatched([...matched, ...newFlipped]);
        setFlipped([]);
      } else {
        setTimeout(() => setFlipped([]), 1000);
      }
    }

    if (!timerActive) setTimerActive(true);
  };

  // Check win
  useEffect(() => {
    if (matched.length === cards.length && cards.length > 0) {
      saveScore();
      alert("🎉 You won! Score saved.");
    }
  }, [matched]);

  // Save score to backend
  const saveScore = async () => {
    try {
      await fetch("http://localhost:5000/scores", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: "Player", moves, time, difficulty, category })
      });
    } catch (err) {
      console.error("Error saving score:", err);
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white p-4">
      <h1 className="text-4xl font-bold mb-4 text-center">Memory Card Game</h1>

      <div className="flex justify-center gap-4 mb-4">
        <select value={difficulty} onChange={(e) => setDifficulty(e.target.value)} className="px-2 py-1 rounded text-black">
          {Object.keys(DIFFICULTY).map(level => <option key={level} value={level}>{level}</option>)}
        </select>

        <select value={category} onChange={(e) => setCategory(e.target.value)} className="px-2 py-1 rounded text-black">
          {Object.keys(EMOJIS).map(cat => <option key={cat} value={cat}>{cat}</option>)}
        </select>

        <button onClick={shuffleCards} className="px-4 py-2 bg-blue-500 rounded hover:bg-blue-600">Restart 🔁</button>
      </div>

      <div className="mb-4 text-xl text-center">
        ⏱ Time: {time}s | 🎯 Moves: {moves}
      </div>

      <div className={`grid gap-4 justify-center mx-auto ${difficulty === "Hard" ? "grid-cols-6" : "grid-cols-4"}`}>
        {cards.map((card, index) => (
          <div
            key={card.id}
            onClick={() => handleClick(index)}
            className={`h-24 w-24 flex items-center justify-center text-3xl cursor-pointer rounded shadow-md ${
              flipped.includes(index) || matched.includes(index) ? "bg-green-500" : "bg-gray-700"
            }`}
          >
            {flipped.includes(index) || matched.includes(index) ? card.val : "❓"}
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-6">
        <button
          onClick={() => (window.location.href = "/leaderboard")}
          className="px-4 py-2 bg-yellow-500 rounded hover:bg-yellow-600"
        >
          View Leaderboard
        </button>
      </div>
    </div>
  );
}



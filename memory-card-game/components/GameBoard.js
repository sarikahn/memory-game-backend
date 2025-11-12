import React, { useEffect, useState } from "react";

const GameBoard = () => {
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState([]);
  const [moves, setMoves] = useState(0);
  const [time, setTime] = useState(0);
  const [timerActive, setTimerActive] = useState(false);

  // Fetch cards from backend
  useEffect(() => {
    fetch("https://memory-game-backend-2gpf.onrender.com/api/memory")
      .then((res) => res.json())
      .then((data) => setCards(data))
      .catch((err) => console.error("Error fetching cards:", err));
  }, []);

  // Timer
  useEffect(() => {
    let interval;
    if (timerActive) {
      interval = setInterval(() => setTime((t) => t + 1), 1000);
    }
    return () => clearInterval(interval);
  }, [timerActive]);

  // Handle card click
  const handleClick = (id) => {
    if (flipped.includes(id) || matched.includes(id)) return;

    const newFlipped = [...flipped, id];
    setFlipped(newFlipped);

    if (newFlipped.length === 2) {
      setMoves((m) => m + 1);
      const [first, second] = newFlipped.map(
        (i) => cards.find((c) => c.id === i)
      );

      if (first.name === second.name) {
        setMatched((prev) => [...prev, first.id, second.id]);
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
      setTimerActive(false);
      saveScore();
      alert("🎉 You won! Your score has been saved!");
    }
  }, [matched]);

  // Save score to backend
  const saveScore = async () => {
    const playerName = prompt("Enter your name:") || "Guest";

    try {
      const res = await fetch(
        "https://memory-game-backend-2gpf.onrender.com/scores",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name: playerName, moves, time }),
        }
      );

      const data = await res.json();
      console.log("✅ Score saved:", data);
    } catch (err) {
      console.error("❌ Error saving score:", err);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="text-xl mb-4 font-semibold">
        ⏱ {time}s | 🎯 Moves: {moves}
      </div>

      <div className="grid grid-cols-4 gap-4">
        {cards.map((card) => (
          <div
            key={card.id}
            onClick={() => handleClick(card.id)}
            className={`h-24 w-24 flex items-center justify-center text-2xl font-bold rounded-xl shadow-lg cursor-pointer transition-all ${
              flipped.includes(card.id) || matched.includes(card.id)
                ? "bg-green-400 text-white"
                : "bg-gray-200"
            }`}
          >
            {flipped.includes(card.id) || matched.includes(card.id)
              ? card.name
              : "❓"}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameBoard;

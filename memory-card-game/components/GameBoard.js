import React, { useEffect, useState } from "react";

const GameBoard = () => {
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState([]);
  const [moves, setMoves] = useState(0);
  const [playerName, setPlayerName] = useState("");
  const [gameOver, setGameOver] = useState(false);

  // ✅ Fetch cards from backend (deployed API)
  useEffect(() => {
    fetch("https://memory-game-backend-2gpf.onrender.com/api/memory")
      .then((res) => res.json())
      .then((data) => {
        // Shuffle cards twice for more randomness
        const shuffled = [...data, ...data]
          .sort(() => Math.random() - 0.5)
          .map((card, index) => ({ ...card, uniqueId: index + 1 }));
        setCards(shuffled);
      })
      .catch((err) => console.error("Error fetching cards:", err));
  }, []);

  // ✅ Handle card click
  const handleCardClick = (id) => {
    if (flipped.includes(id) || matched.includes(id) || gameOver) return;

    const newFlipped = [...flipped, id];
    setFlipped(newFlipped);

    if (newFlipped.length === 2) {
      setMoves((prev) => prev + 1);
      const [first, second] = newFlipped.map((i) =>
        cards.find((c) => c.uniqueId === i)
      );

      if (first.name === second.name) {
        setMatched((prev) => [...prev, first.uniqueId, second.uniqueId]);
        setFlipped([]);
      } else {
        setTimeout(() => setFlipped([]), 800);
      }
    }
  };

  // ✅ Check if all cards matched → save score
  useEffect(() => {
    if (cards.length > 0 && matched.length === cards.length && !gameOver) {
      setGameOver(true);
      setTimeout(() => {
        alert(`🎉 Congrats ${playerName || "Player"}! You won in ${moves} moves!`);
        saveScore();
      }, 500);
    }
  }, [matched]);

  // ✅ Save score to backend
  const saveScore = async () => {
    try {
      const response = await fetch(
        "https://memory-game-backend-2gpf.onrender.com/scores",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name: playerName || "Player", moves }),
        }
      );

      if (!response.ok) throw new Error("Failed to save score");
      const data = await response.json();
      console.log("✅ Score saved:", data);
    } catch (err) {
      console.error("❌ Error saving score:", err);
      alert("Could not save score. Try again later.");
    }
  };

  // ✅ Restart Game
  const restartGame = () => {
    setFlipped([]);
    setMatched([]);
    setMoves(0);
    setGameOver(false);
    fetch("https://memory-game-backend-2gpf.onrender.com/api/memory")
      .then((res) => res.json())
      .then((data) => {
        const shuffled = [...data, ...data]
          .sort(() => Math.random() - 0.5)
          .map((card, index) => ({ ...card, uniqueId: index + 1 }));
        setCards(shuffled);
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200 flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl md:text-4xl font-bold text-indigo-700 mb-4 text-center">
        🧠 Memory Game
      </h1>

      {/* Player Name Input */}
      {!gameOver && (
        <input
          type="text"
          placeholder="Enter your name"
          value={playerName}
          onChange={(e) => setPlayerName(e.target.value)}
          className="mb-4 p-2 rounded-lg border border-indigo-400 text-center focus:outline-none shadow-sm w-60"
        />
      )}

      {/* Game Board */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 mb-6">
        {cards.map((card) => (
          <div
            key={card.uniqueId}
            onClick={() => handleCardClick(card.uniqueId)}
            className={`w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center text-lg font-bold rounded-xl shadow-lg cursor-pointer transition-all duration-300 ${
              flipped.includes(card.uniqueId) || matched.includes(card.uniqueId)
                ? "bg-indigo-500 text-white"
                : "bg-gray-200 hover:bg-indigo-200"
            }`}
          >
            {flipped.includes(card.uniqueId) || matched.includes(card.uniqueId)
              ? card.name
              : "?"}
          </div>
        ))}
      </div>

      {/* Moves Counter */}
      <p className="text-lg font-semibold text-gray-700 mb-3">
        🎯 Moves: {moves}
      </p>

      {/* Restart Button */}
      {gameOver && (
        <button
          onClick={restartGame}
          className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all"
        >
          🔄 Play Again
        </button>
      )}
    </div>
  );
};

export default GameBoard;

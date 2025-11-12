// memory-card-game/components/MemoryCard.js
import React from "react";

export default function MemoryCard({ card, onClick, flipped, matched }) {
  return (
    <div
      className={`w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center text-lg sm:text-xl font-bold rounded-xl shadow-lg cursor-pointer transition-all duration-300
        ${matched ? "bg-green-400 text-white" : "bg-white hover:bg-indigo-100"}
        ${flipped ? "border-2 border-indigo-500 scale-105" : ""}
      `}
      onClick={onClick}
    >
      {flipped || matched ? card.name : "?"}
    </div>
  );
}

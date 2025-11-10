export default function Card({ card, onClick }) {
  return (
    <div
      className={`w-24 h-24 m-2 cursor-pointer rounded-lg flex items-center justify-center text-3xl font-bold
        ${card.flipped || card.matched ? "bg-white text-black" : "bg-slate-700"}`}
      onClick={() => !card.flipped && !card.matched && onClick(card)}
    >
      {card.flipped || card.matched ? card.icon : "?"}
    </div>
  );
}













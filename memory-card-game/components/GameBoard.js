import Card from "./Card";

export default function GameBoard({ cards, onCardClick }) {
  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      {cards.map((card) => (
        <Card key={card.id} card={card} onClick={onCardClick} />
      ))}
    </div>
  );
}






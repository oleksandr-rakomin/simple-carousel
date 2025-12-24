export function CarouselCard({ card }) {
  return (
    <li className="w-48 h-75 flex-none flex items-center justify-center bg-purple-400">
      Card {card.id}
    </li>
  );
}

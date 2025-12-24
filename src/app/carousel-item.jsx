export function CarouselItem({ item }) {
  return (
    <li className="w-48 h-75 flex-none flex items-center justify-center snap-start bg-purple-400">
      Item {item.id}
    </li>
  );
}

import Image from "next/image";

export function CarouselItem({ item }) {
  return (
    <li className="w-48 h-75 flex-none relative overflow-hidden snap-start bg-purple-400">
      <Image
        src={item.src}
        alt={item.alt}
        fill
        sizes="200px"
        draggable={false}
        className="object-contain"
      />
    </li>
  );
}

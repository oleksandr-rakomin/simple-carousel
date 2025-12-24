"use client";

import { useEffect, useRef, useState } from "react";

import { CarouselCard } from "@/app/carousel-card";

const carouselCardsList = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 },
  { id: 7 },
  { id: 8 },
  { id: 9 },
  { id: 10 },
  { id: 11 },
  { id: 12 },
];

export function Carousel() {
  const containerRef = useRef(null);
  const [isLeftEnd, setIsLeftEnd] = useState(true);
  const [isRightEnd, setIsRightEnd] = useState(false);

  const getScrollAmount = () => {
    const container = containerRef.current;
    if (!container) return 0;

    const card = container.querySelector("li");
    if (!card) return 0;

    const containerStyles = window.getComputedStyle(container);
    const gap =
      parseFloat(containerStyles.gap) ||
      parseFloat(containerStyles.columnGap) ||
      0;

    return card.offsetWidth + gap;
  };

  const prevCard = () => {
    const scrollAmount = getScrollAmount();
    if (!scrollAmount) return;

    containerRef.current.scrollBy({
      left: -scrollAmount,
      behavior: "smooth",
    });
  };

  const nextCard = () => {
    const scrollAmount = getScrollAmount();
    if (!scrollAmount) return;

    containerRef.current.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

  const checkScrollPosition = () => {
    const container = containerRef.current;
    if (!container) return;

    const EPS = 2;
    const isAtStart = container.scrollLeft <= EPS;
    const isAtEnd =
      container.scrollLeft + container.clientWidth >=
      container.scrollWidth - EPS;

    setIsLeftEnd(isAtStart);
    setIsRightEnd(isAtEnd);
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    checkScrollPosition();
    window.addEventListener("resize", checkScrollPosition);
    container.addEventListener("scroll", checkScrollPosition);

    return () => {
      window.removeEventListener("resize", checkScrollPosition);
      container.removeEventListener("scroll", checkScrollPosition);
    };
  }, []);

  return (
    <div className="flex items-center justify-center gap-x-10 py-10">
      <button
        onClick={prevCard}
        disabled={isLeftEnd}
        className="bg-red-400 hidden lap:block cursor-pointer p-3 disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {"<"}
      </button>

      <ul
        ref={containerRef}
        className="flex gap-x-5 overflow-x-scroll scrollbar-hide"
      >
        {carouselCardsList.map((card) => {
          return <CarouselCard key={card.id} card={card} />;
        })}
      </ul>

      <button
        onClick={nextCard}
        disabled={isRightEnd}
        className="bg-red-400 hidden lap:block cursor-pointer p-3 disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {">"}
      </button>
    </div>
  );
}

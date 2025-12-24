"use client";

import { useEffect, useRef, useState } from "react";

export function Carousel({ children, itemsGapClassName = "gap-x-5" }) {
  const containerRef = useRef(null);
  const [isLeftEnd, setIsLeftEnd] = useState(true);
  const [isRightEnd, setIsRightEnd] = useState(false);

  const getScrollAmount = () => {
    const container = containerRef.current;
    if (!container) return 0;

    const item = container.firstElementChild;
    if (!item) return 0;

    const itemWidth = item.getBoundingClientRect().width;
    const containerStyles = window.getComputedStyle(container);
    const gap =
      parseFloat(containerStyles.gap) ||
      parseFloat(containerStyles.columnGap) ||
      0;

    return itemWidth + gap;
  };

  const prevItem = () => {
    const scrollAmount = getScrollAmount();
    if (!scrollAmount) return;

    containerRef.current.scrollBy({
      left: -scrollAmount,
      behavior: "smooth",
    });
  };

  const nextItem = () => {
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
        onClick={prevItem}
        disabled={isLeftEnd}
        className="bg-red-400 hidden lap:block cursor-pointer p-3 disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {"<"}
      </button>

      <ul
        ref={containerRef}
        className={`flex overflow-x-auto scrollbar-hide snap-x snap-mandatory ${itemsGapClassName}`}
      >
        {children}
      </ul>

      <button
        onClick={nextItem}
        disabled={isRightEnd}
        className="bg-red-400 hidden lap:block cursor-pointer p-3 disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {">"}
      </button>
    </div>
  );
}

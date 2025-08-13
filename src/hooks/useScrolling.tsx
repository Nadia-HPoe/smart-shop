import { useState, useRef, useEffect, RefObject } from 'react';

type ScrollHookReturn = {
  canScrollLeft: boolean;
  canScrollRight: boolean;
  scrollLeft: () => void;
  scrollRight: () => void;
  scrollContainerRef: RefObject<HTMLDivElement | null>;
  scrollByAmount: number;
};

export function useScrolling(
  initialScrollByAmount = 300
): ScrollHookReturn & { refresh: () => void } {
  // useRef<HTMLDivElement | null>
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const scrollByAmount = initialScrollByAmount;

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollPosition = () => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const scrollLeft = container.scrollLeft;
    const maxScrollLeft = container.scrollWidth - container.clientWidth;

    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < maxScrollLeft - 1);
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let scrollTimeout: number | null = null;
    const onScroll = () => {
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
      scrollTimeout = window.setTimeout(checkScrollPosition, 200);
    };

    const initialDelay = window.setTimeout(() => {
      checkScrollPosition();

      container.addEventListener('scroll', onScroll);
      window.addEventListener('resize', checkScrollPosition);
    }, 4000);

    return () => {
      clearTimeout(initialDelay);
      if (container) {
        container.removeEventListener('scroll', onScroll);
      }
      window.removeEventListener('resize', checkScrollPosition);
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
    };
  }, []);

  const scrollLeft = () => {
    const container = scrollContainerRef.current;
    if (container) {
      container.scrollBy({ left: -scrollByAmount, behavior: 'smooth' });
      setTimeout(checkScrollPosition, 400);
    }
  };

  const scrollRight = () => {
    const container = scrollContainerRef.current;
    if (container) {
      container.scrollBy({ left: scrollByAmount, behavior: 'smooth' });
      setTimeout(checkScrollPosition, 400);
    }
  };
  const refresh = () => {
    checkScrollPosition();
  };

  return {
    canScrollLeft,
    canScrollRight,
    scrollLeft,
    scrollRight,
    scrollContainerRef,
    scrollByAmount,
    refresh,
  };
}

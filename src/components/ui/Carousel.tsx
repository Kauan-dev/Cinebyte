import { useState, useRef, useEffect, type ReactNode } from "react";

interface CarouselProps {
  children: ReactNode;
  title: string;
}

export function Carousel({ children, title }: CarouselProps) {
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftStart, setScrollLeftStart] = useState(0);
  const hasMoved = useRef(false);
  const lastX = useRef(0);
  const lastTime = useRef(0);
  const velocity = useRef(0);
  const animationFrameId = useRef<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const hideLeftTimeoutRef = useRef<number | null>(null);
  const hideRightTimeoutRef = useRef<number | null>(null);

  const checkForScrollPosition = () => {
    if (containerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
      const canLeft = scrollLeft > 5;
      const canRight = scrollLeft < scrollWidth - clientWidth - 5;

      setCanScrollLeft(canLeft);
      setCanScrollRight(canRight);

      if (canLeft) {
        setShowLeftArrow(true);
        if (hideLeftTimeoutRef.current) {
          clearTimeout(hideLeftTimeoutRef.current);
        }
      } else {
        if (hideLeftTimeoutRef.current) {
          clearTimeout(hideLeftTimeoutRef.current);
        }
        hideLeftTimeoutRef.current = window.setTimeout(() => {
          setShowLeftArrow(false);
        }, 600);
      }

      if (canRight) {
        setShowRightArrow(true);
        if (hideRightTimeoutRef.current) {
          clearTimeout(hideRightTimeoutRef.current);
        }
      } else {
        if (hideRightTimeoutRef.current) {
          clearTimeout(hideRightTimeoutRef.current);
        }
        hideRightTimeoutRef.current = window.setTimeout(() => {
          setShowRightArrow(false);
        }, 600);
      }
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      checkForScrollPosition();
      container.addEventListener("scroll", checkForScrollPosition);
      window.addEventListener("resize", checkForScrollPosition);

      return () => {
        container.removeEventListener("scroll", checkForScrollPosition);
        window.removeEventListener("resize", checkForScrollPosition);
        if (hideLeftTimeoutRef.current) {
          clearTimeout(hideLeftTimeoutRef.current);
        }
        if (hideRightTimeoutRef.current) {
          clearTimeout(hideRightTimeoutRef.current);
        }
        if (animationFrameId.current) {
          cancelAnimationFrame(animationFrameId.current);
        }
      };
    }
  }, []);

  const scrollLeftButton = () => {
    if (containerRef.current) {
      const scrollAmount = containerRef.current.clientWidth * 0.8;
      containerRef.current.scrollBy({
        left: -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const scrollRightButton = () => {
    if (containerRef.current) {
      const scrollAmount = containerRef.current.clientWidth * 0.8;
      containerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const applyMomentum = (initialVelocity: number) => {
    if (!containerRef.current) return;

    let currentVelocity = initialVelocity;
    const friction = 0.92;
    const minVelocity = 0.5;

    const animate = () => {
      if (!containerRef.current) return;

      containerRef.current.scrollLeft += currentVelocity;

      currentVelocity *= friction;

      if (Math.abs(currentVelocity) > minVelocity) {
        animationFrameId.current = requestAnimationFrame(animate);
      } else {
        animationFrameId.current = null;
      }
    };

    if (animationFrameId.current) {
      cancelAnimationFrame(animationFrameId.current);
    }

    animationFrameId.current = requestAnimationFrame(animate);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    e.preventDefault();

    if (animationFrameId.current) {
      cancelAnimationFrame(animationFrameId.current);
      animationFrameId.current = null;
    }

    setIsDragging(true);
    setStartX(e.clientX);
    setScrollLeftStart(containerRef.current.scrollLeft);
    hasMoved.current = false;
    lastX.current = e.clientX;
    lastTime.current = Date.now();
    velocity.current = 0;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return;
    e.preventDefault();

    const x = e.clientX;
    const currentTime = Date.now();
    const timeDiff = currentTime - lastTime.current;
    const distanceDiff = lastX.current - x;

    if (timeDiff > 0) {
      velocity.current = distanceDiff / timeDiff;
    }

    lastX.current = x;
    lastTime.current = currentTime;

    const walk = startX - x;

    if (Math.abs(walk) > 5) {
      hasMoved.current = true;
    }

    containerRef.current.scrollLeft = scrollLeftStart + walk;
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(false);

    if (hasMoved.current && Math.abs(velocity.current) > 0.1) {
      const momentumVelocity = velocity.current * 20;
      applyMomentum(momentumVelocity);
    }

    if (hasMoved.current) {
      e.stopPropagation();
      const target = e.target as HTMLElement;
      target.onclick = (event) => {
        event.preventDefault();
        event.stopPropagation();
        target.onclick = null;
      };
    }
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleDragStart = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleClick = (e: React.MouseEvent) => {
    if (hasMoved.current) {
      e.preventDefault();
      e.stopPropagation();
      hasMoved.current = false;
    }
  };

  return (
    <section className="-mx-4 md:-mx-6 lg:-mx-8">
      <h3 className="mb-3 px-4 text-[26px] font-semibold tracking-wide md:px-6 lg:px-8">
        {title}
      </h3>

      <div
        className="group relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {showLeftArrow && (
          <button
            onClick={scrollLeftButton}
            disabled={!canScrollLeft}
            className={`absolute top-0 bottom-0 left-4 z-30 hidden w-[4%] items-center justify-center bg-black/78 to-transparent transition-opacity duration-500 lg:flex ${isHovered && canScrollLeft ? "opacity-100" : "opacity-0"} ${canScrollLeft ? "cursor-pointer" : "cursor-default"} disabled:cursor-default`}
            aria-label="Voltar"
          >
            <svg
              className={`h-[50%] w-[50%] text-white drop-shadow-2xl transition-opacity duration-300 ${
                canScrollLeft ? "opacity-100" : "opacity-50"
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
        )}

        <div
          ref={containerRef}
          className={`scrollbar-hide overflow-x-auto overflow-y-hidden select-none ${
            isDragging ? "cursor-grabbing" : "lg:cursor-grab"
          }`}
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          onDragStart={handleDragStart}
          onClick={handleClick}
        >
          <div className="flex gap-3 px-4 pb-2 md:gap-4 md:px-6 lg:px-8">
            {children}

            <div className="w-1 shrink-0 md:w-2 lg:w-4" aria-hidden="true" />
          </div>
        </div>

        {showRightArrow && (
          <button
            onClick={scrollRightButton}
            disabled={!canScrollRight}
            className={`absolute top-0 right-4 bottom-0 z-30 hidden w-[4%] items-center justify-center bg-black/78 to-transparent transition-opacity duration-500 lg:flex ${isHovered && canScrollRight ? "opacity-100" : "opacity-0"} ${canScrollRight ? "cursor-pointer" : "cursor-default"} disabled:cursor-default`}
            aria-label="Avançar"
          >
            <svg
              className={`h-[50%] w-[50%] text-white drop-shadow-2xl transition-opacity duration-300 ${
                canScrollRight ? "opacity-100" : "opacity-50"
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        )}
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}

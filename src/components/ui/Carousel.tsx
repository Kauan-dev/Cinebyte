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

      // Mostrar setas imediatamente quando pode scrollar
      if (canLeft) {
        setShowLeftArrow(true);
        // Limpar timeout anterior se existir
        if (hideLeftTimeoutRef.current) {
          clearTimeout(hideLeftTimeoutRef.current);
        }
      } else {
        // Esconder com delay quando não pode mais scrollar
        if (hideLeftTimeoutRef.current) {
          clearTimeout(hideLeftTimeoutRef.current);
        }
        hideLeftTimeoutRef.current = window.setTimeout(() => {
          setShowLeftArrow(false);
        }, 600); // 600ms de delay
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
        }, 600); // 600ms de delay
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
        // Limpar timeouts ao desmontar
        if (hideLeftTimeoutRef.current) {
          clearTimeout(hideLeftTimeoutRef.current);
        }
        if (hideRightTimeoutRef.current) {
          clearTimeout(hideRightTimeoutRef.current);
        }
      };
    }
  }, []);

  const scrollLeft = () => {
    if (containerRef.current) {
      const scrollAmount = containerRef.current.clientWidth * 0.8;
      containerRef.current.scrollBy({
        left: -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      const scrollAmount = containerRef.current.clientWidth * 0.8;
      containerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section>
      <h3 className="mb-3 text-[26px] font-semibold tracking-wider">{title}</h3>

      <div
        className="group relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Seta Esquerda */}
        {showLeftArrow && (
          <button
            onClick={scrollLeft}
            disabled={!canScrollLeft}
            className={`absolute top-0 bottom-0 left-0 z-30 flex w-12 items-center justify-center bg-black/78 to-transparent transition-opacity duration-500 ${isHovered && canScrollLeft ? "opacity-100" : "opacity-0"} ${canScrollLeft ? "cursor-pointer" : "cursor-default"} disabled:cursor-default`}
            aria-label="Voltar"
          >
            <svg
              className={`h-8 w-8 text-white drop-shadow-2xl transition-opacity duration-300 md:h-10 md:w-10 ${
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

        {/* Container do Carrossel */}
        <div
          ref={containerRef}
          className="scrollbar-hide overflow-x-auto overflow-y-hidden"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          <div className="flex gap-3 pb-2 md:gap-4">{children}</div>
        </div>

        {/* Seta Direita */}
        {showRightArrow && (
          <button
            onClick={scrollRight}
            disabled={!canScrollRight}
            className={`absolute top-0 right-0 bottom-0 z-30 flex w-12 items-center justify-center bg-black/78 to-transparent transition-opacity duration-500 ${isHovered && canScrollRight ? "opacity-100" : "opacity-0"} ${canScrollRight ? "cursor-pointer" : "cursor-default"} disabled:cursor-default`}
            aria-label="Avançar"
          >
            <svg
              className={`h-8 w-8 text-white drop-shadow-2xl transition-opacity duration-300 md:h-10 md:w-10 ${
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

        {/* Gradiente sutil à direita para indicar mais conteúdo */}
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}

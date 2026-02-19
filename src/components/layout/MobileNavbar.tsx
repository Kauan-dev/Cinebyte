import { Link } from "react-router-dom";

export function MobileNavbar() {
  return (
    <div className="fixed bottom-0 z-99 flex h-17 w-full items-center justify-center gap-14 bg-black md:hidden [@media(max-width:360px)]:gap-10">
      <Link
        className="font-google flex flex-col items-center gap-1 text-[10px] font-semibold"
        to="/"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-house-icon lucide-house"
        >
          <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
          <path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        </svg>
        <span>INICIO</span>
      </Link>
      <Link
        className="font-google flex flex-col items-center gap-1 text-[10px] font-semibold"
        to="/movies"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-clapperboard-icon lucide-clapperboard"
        >
          <path d="M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z" />
          <path d="m6.2 5.3 3.1 3.9" />
          <path d="m12.4 3.4 3.1 4" />
          <path d="M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z" />
        </svg>
        <span>FILMES</span>
      </Link>
      <Link
        className="font-google flex flex-col items-center gap-1 text-[10px] font-semibold"
        to="/"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-tv-icon lucide-tv"
        >
          <path d="m17 2-5 5-5-5" />
          <rect width="20" height="15" x="2" y="7" rx="2" />
        </svg>
        <span>SÉRIES</span>
      </Link>
      <Link
        className="font-google flex flex-col items-center gap-1 text-[10px] font-semibold"
        to="/watch-later"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-bookmark-icon lucide-bookmark"
        >
          <path d="M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z" />
        </svg>
        <span>FAVORITOS</span>
      </Link>
    </div>
  );
}

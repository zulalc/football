"use client";
import React, { useState } from "react";

type SidebarProps = {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
};

const Sidebar = ({ isSidebarOpen, toggleSidebar }: SidebarProps) => {
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!touchStartX) return;
    const touchEndX = e.touches[0].clientX;

    if (!isSidebarOpen && touchEndX > touchStartX + 50) {
      //slide out when swiping right -->
      toggleSidebar();
    } else if (isSidebarOpen && touchStartX - touchEndX > 50) {
      //slide in when swiping left <--
      toggleSidebar();
    }
  };

  const handleTouchEnd = () => {
    setTouchStartX(null);
  };
  return (
    <div
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className={`fixed top-0 left-0 h-full bg-darkgreen text-white transition-all duration-300 md:hidden
        ${isSidebarOpen ? "w-10/12" : "w-0"} `}
      >
        <ul className="space-y-6 mt-20 text-center">
          <li className="px-4">
            <a href="/" className="text-3xl">
              Home
            </a>
          </li>
          <li className="px-4">
            <a href="/teams" className="text-3xl">
              Teams
            </a>
          </li>
          <li className="px-4">
            <a href="/players" className="text-3xl">
              Players
            </a>
          </li>
          <li className="px-4">
            <a href="/search" className="text-3xl">
              Search
            </a>
          </li>
          <li className="px-4">
            <a href="/about" className="text-3xl">
              About
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

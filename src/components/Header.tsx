// Header.tsx
"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Dancing_Script } from "next/font/google";

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-dancing-script",
});

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Only toggle visibility if scroll difference is significant
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY || currentScrollY < 100) {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    // Add debounce to scroll event
    const debouncedScroll = setTimeout(() => {
      window.addEventListener('scroll', handleScroll, { passive: true });
    }, 100);

    return () => {
      clearTimeout(debouncedScroll);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div className="relative">
      <header 
  className="fixed top-4 left-1/2 z-50 shadow bg-white/30 backdrop-blur-sm border-b border-white/20 transition-transform duration-300 max-w-4xl w-full rounded-b-lg h-12"
  style={{ transform: `translate(-50%, ${isVisible ? '0' : '-64px'})` }}
>
  <div className="px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
    {/* Logo */}
    <Link
      href="/"
      className={`text-2xl md:text-3xl font-bold text-blue-800 hover:text-blue-600 transition-colors duration-300 ${dancingScript.variable}`}
      style={{ fontFamily: "var(--font-dancing-script), cursive" }}
      aria-label="Sākums"
    >
      Krists Zarāns
    </Link>

    {/* Burger Icon */}
    <button
      onClick={toggleMenu}
      className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1 group"
      aria-label={isOpen ? "Close menu" : "Open menu"}
    >
      <span className={`w-6 h-0.5 bg-blue-900 transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
      <span className={`w-6 h-0.5 bg-blue-900 transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
      <span className={`w-6 h-0.5 bg-blue-900 transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
    </button>

    {/* Desktop Menu */}
    <nav className="hidden md:flex space-x-6 text-base font-medium text-blue-900">
      <Link href="/" className="hover:text-blue-600 transition" aria-label="Sākums">Sākums</Link>
      <Link href="/pakalpojumi" className="hover:text-blue-600 transition" aria-label="Pakalpojumi">Pakalpojumi</Link>
      <Link href="/par-mani" className="hover:text-blue-600 transition" aria-label="Par mani">Par mani</Link>
      <Link href="/kontakti" className="hover:text-blue-600 transition" aria-label="Kontakti">Kontakti</Link>
    </nav>
  </div>
</header>


      {/* Hero section background that starts under header */}
    

      {/* Mobile Fullscreen Menu */}
      {isOpen && (
        <div className={`fixed inset-0 bg-opacity-95 backdrop-blur-sm flex flex-col items-center justify-center space-y-8 z-40 text-white`}>
          <button
            onClick={toggleMenu}
            className="absolute top-6 right-6 text-5xl text-gray-700 hover:text-red-500 transition"
            aria-label="Close menu"
          >
            &times;
          </button>

          <Link href="/" onClick={toggleMenu} className="hover:text-blue-600" aria-label="Sākums">Sākums</Link>
          <Link href="/pakalpojumi" onClick={toggleMenu} className="hover:text-blue-600" aria-label="Pakalpojumi">Pakalpojumi</Link>
          <Link href="/par-mani" onClick={toggleMenu} className="hover:text-blue-600" aria-label="Par mani">Par mani</Link>
          <Link href="/kontakti" onClick={toggleMenu} className="hover:text-blue-600" aria-label="Kontakti">Kontakti</Link>
        </div>
      )}
    </div>
  );
}
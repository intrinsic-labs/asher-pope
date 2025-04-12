'use client';

import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Prevent scrolling when menu is open
    document.body.style.overflow = !isMenuOpen ? 'hidden' : 'auto';
  };

  return (
    <header className="fixed top-0 left-0 w-full z-10 bg-white text-foreground-rgb border-b border-black">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-tight">
          <a href="/" className="small-title hover:text-accent-color transition-colors">ASHER POPE</a>
        </h1>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex gap-6">
            <li>
              <a href="#work" className="hover:text-[var(--accent-color)] transition-colors font-bold">WORK</a>
            </li>
            <li>
              <a href="#about" className="hover:text-[var(--accent-color)] transition-colors font-bold">ABOUT</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-[var(--accent-color)] transition-colors font-bold">CONTACT</a>
            </li>
          </ul>
        </nav>
        
        {/* Hamburger Button */}
        <button 
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 z-50"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          <span className={`block w-6 h-0.5 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2 bg-background-rgb' : 'bg-black'}`}></span>
          <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
          <span className={`block w-6 h-0.5 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2 bg-background-rgb' : 'bg-black'}`}></span>
        </button>
        
        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-foreground-rgb z-40 flex flex-col items-center justify-center">
            <nav className="w-full px-12">
              <ul className="flex flex-col gap-8 items-center">
                <li className="w-full text-center py-4">
                  <a 
                    href="#work" 
                    className="text-6xl font-bold text-background-rgb hover:text-accent-color transition-colors"
                    onClick={toggleMenu}
                  >
                    WORK
                  </a>
                </li>
                <li className="w-full text-center py-4">
                  <a 
                    href="#about" 
                    className="text-6xl font-bold text-background-rgb hover:text-accent-color transition-colors"
                    onClick={toggleMenu}
                  >
                    ABOUT
                  </a>
                </li>
                <li className="w-full text-center py-4">
                  <a 
                    href="#contact" 
                    className="text-6xl font-bold text-background-rgb hover:text-accent-color transition-colors"
                    onClick={toggleMenu}
                  >
                    CONTACT
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
} 
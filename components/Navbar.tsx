'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-20 ${isScrolled
        ? 'bg-white/80 backdrop-blur-sm border-b border-neutral-200 shadow-sm'
        : 'bg-white/40 border-b border-white/20'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between h-full">
        {/* Logo */}
        <Link
          href="/"
          className={`font-bold tracking-tight transition-all duration-300 text-neutral-900 ${isScrolled
            ? 'text-3xl'
            : 'text-2xl'
            }`}
        >
          SayyedEngWorks
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className={`text-neutral-900 hover:text-neutral-700 transition-all duration-200 font-medium ${isScrolled
              ? 'text-lg'
              : 'text-md'
              }`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`text-neutral-900 hover:text-neutral-700 transition-all duration-200 font-medium ${isScrolled
              ? 'text-lg'
              : 'text-md'
              }`}
          >
            About Us
          </Link>
          <Link
            href="/products"
            className={`text-neutral-900 hover:text-neutral-700 transition-all duration-200 font-medium ${isScrolled
              ? 'text-lg'
              : 'text-md'
              }`}
          >
            Products
          </Link>

          {/* CTA Button */}
          <Link href="/contact">

            <button className={`group inline-flex items-center gap-2 px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${isScrolled
              ? 'bg-neutral-900 text-white hover:bg-neutral-800 shadow-sm'
              : 'bg-neutral-900 text-white hover:bg-neutral-800 shadow-md'
              }`}>
              Get in Touch
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-neutral-900 hover:text-neutral-700 transition-all duration-200"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden   backdrop-blur-sm border-b border-neutral-200 shadow-md  bg-white/95 h-screen w-full">
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-10 justify-center h-1/2 items-center w-1/2">
            <Link
              href="/"
              className="text-neutral-900 hover:text-neutral-700 transition-colors font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-neutral-900 hover:text-neutral-700 transition-colors font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/products"
              className="text-neutral-900 hover:text-neutral-700 transition-colors font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </Link>
            <Link href="/contact" className="w-full  bg-neutral-900 text-white hover:bg-neutral-800 font-semibold py-2 rounded-lg transition-colors flex items-center justify-center gap-2" onClick={() => setIsMenuOpen(false)}>
              Get in Touch
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
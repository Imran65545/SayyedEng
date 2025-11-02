'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-md border-b border-neutral-200 shadow-sm' 
          : 'bg-white border-b border-neutral-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-neutral-900 tracking-tight">
            Sayyed Eng Works
          </Link>

          <div className="flex items-center gap-8">
            <Link
              href="/"
              className="text-neutral-700 hover:text-neutral-900 transition-colors duration-200 font-medium"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-neutral-700 hover:text-neutral-900 transition-colors duration-200 font-medium"
            >
              About
            </Link>
            <Link
              href="/products"
              className="text-neutral-700 hover:text-neutral-900 transition-colors duration-200 font-medium"
            >
              Products
            </Link>
            <Link
              href="/contact"
              className="text-neutral-700 hover:text-neutral-900 transition-colors duration-200 font-medium"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

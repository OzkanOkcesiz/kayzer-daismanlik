"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logos/kayzer.png"
              alt="Kayzer Danışmanlık Logo"
              width={300}
              height={80}
              className="h-20 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link
              href="/"
              className="text-brown-800 hover:text-brown-600 px-3 py-2 text-sm font-medium"
            >
              Ana Sayfa
            </Link>
            <Link
              href="/hakkimizda"
              className="text-brown-800 hover:text-brown-600 px-3 py-2 text-sm font-medium"
            >
              Hakkımızda
            </Link>
            <Link
              href="/referanslarimiz"
              className="text-brown-800 hover:text-brown-600 px-3 py-2 text-sm font-medium"
            >
              Referanslarımız
            </Link>
            <Link
              href="/iletisim"
              className="text-brown-800 hover:text-brown-600 px-3 py-2 text-sm font-medium"
            >
              İletişim
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-brown-800 hover:text-brown-600"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className="sr-only">Menüyü aç</span>
              {isMobileMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            <Link
              href="/"
              className="text-brown-800 hover:text-brown-600 block px-3 py-2 text-base font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Ana Sayfa
            </Link>
            <Link
              href="/hakkimizda"
              className="text-brown-800 hover:text-brown-600 block px-3 py-2 text-base font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Hakkımızda
            </Link>
            <Link
              href="/referanslarimiz"
              className="text-brown-800 hover:text-brown-600 block px-3 py-2 text-base font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Referanslarımız
            </Link>
            <Link
              href="/iletisim"
              className="text-brown-800 hover:text-brown-600 block px-3 py-2 text-base font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              İletişim
            </Link>
          </div>
        </div>
      )}
    </header>
  );
} 
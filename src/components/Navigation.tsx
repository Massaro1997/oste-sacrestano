"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/peppe", label: "Peppe" },
  { href: "/menu", label: "Menu" },
  { href: "/licata", label: "Licata" },
  { href: "/prenota", label: "Prenota" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const navBg = isScrolled || isOpen
    ? "bg-black/95 backdrop-blur-md shadow-sm"
    : "bg-transparent";

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${navBg}`}
        style={{ height: "72px" }}
      >
        <div className="h-full max-w-7xl mx-auto px-6 md:px-10 lg:px-14 flex items-center justify-between">
          {/* LOGO */}
          <Link href="/" className="flex items-center" onClick={() => setIsOpen(false)}>
            <Image
              src="/images/LOGO ULTIMO NUOVO.png"
              alt="L'Oste e il Sacrestano"
              width={180}
              height={60}
              className="h-12 md:h-14 w-auto"
              priority
              quality={100}
            />
          </Link>

          {/* DESKTOP LINKS */}
          <div className="hidden md:flex items-center gap-8 lg:gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="nav-link text-sm tracking-wider uppercase text-white transition-colors hover:text-[#c9a55c]"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* HAMBURGER */}
          <button
            type="button"
            onClick={() => setIsOpen((v) => !v)}
            aria-label={isOpen ? "Chiudi menu" : "Apri menu"}
            aria-expanded={isOpen}
            className="md:hidden flex items-center justify-center w-11 h-11 text-white"
          >
            <span className="relative block w-6 h-[18px]">
              <span
                className={`absolute left-0 w-full h-0.5 bg-current transition-all duration-300 ${
                  isOpen ? "top-[8px] rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 top-[8px] w-full h-0.5 bg-current transition-opacity duration-200 ${
                  isOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 w-full h-0.5 bg-current transition-all duration-300 ${
                  isOpen ? "top-[8px] -rotate-45" : "top-[16px]"
                }`}
              />
            </span>
          </button>
        </div>
      </nav>

      {/* MOBILE OVERLAY */}
      <div
        className={`md:hidden fixed inset-0 z-40 bg-[#0a0a0a] transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
        style={{ paddingTop: "72px" }}
      >
        <nav className="h-full flex flex-col items-center justify-center gap-8 px-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-3xl text-white hover:text-[#c9a55c] transition-colors"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}

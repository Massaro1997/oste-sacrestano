"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/peppe", label: "Peppe" },
    { href: "/menu", label: "Menu" },
    { href: "/licata", label: "Licata" },
    { href: "/prenota", label: "Prenota" },
  ];

  const navClass = isScrolled
    ? "fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-black/95 backdrop-blur-md shadow-sm py-4"
    : "fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-transparent py-6";

  const logoClass = isScrolled
    ? "transition-all duration-300 h-10 sm:h-12 md:h-14 w-auto"
    : "transition-all duration-300 h-12 sm:h-14 md:h-16 w-auto";

  const linkBaseClass = "nav-link text-sm tracking-wider uppercase transition-colors hover:text-[#c9a55c]";
  const linkColorClass = "text-white";

  const buttonClass = "md:hidden relative z-[70] p-2 text-white";

  const spanBaseClass = "w-full h-0.5 bg-current transform transition-all duration-300";

  const mobileMenuClass = isMobileMenuOpen
    ? "md:hidden fixed inset-0 bg-[#0a0a0a] z-[60] transition-opacity duration-300 opacity-100 visible"
    : "md:hidden fixed inset-0 bg-[#0a0a0a] z-[60] transition-opacity duration-300 opacity-0 invisible pointer-events-none";

  return (
    <nav className={navClass}>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex items-center justify-between gap-3">
          <Link href="/" className="relative z-[70] flex-shrink min-w-0">
            <Image
              src="/images/LOGO ULTIMO NUOVO.png"
              alt="L Oste e il Sacrestano"
              width={180}
              height={60}
              className={logoClass}
              priority
             quality={100} />
          </Link>

          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={linkBaseClass + " " + linkColorClass}
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={buttonClass + " flex-shrink-0 -mr-2"}
            aria-label="Menu"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span className={spanBaseClass + (isMobileMenuOpen ? " rotate-45 translate-y-2" : "")} />
              <span className={spanBaseClass + (isMobileMenuOpen ? " opacity-0" : "")} />
              <span className={spanBaseClass + (isMobileMenuOpen ? " -rotate-45 -translate-y-2" : "")} />
            </div>
          </button>
        </div>
      </div>

      <div className={mobileMenuClass}>
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-3xl text-white hover:text-[#c9a55c] transition-colors"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

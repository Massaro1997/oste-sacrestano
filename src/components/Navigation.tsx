"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
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
  const pathname = usePathname();
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

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  };

  const navBg = isScrolled || isOpen
    ? "bg-black/95 backdrop-blur-md shadow-lg"
    : "bg-gradient-to-b from-black/50 via-black/20 to-transparent";

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${navBg}`}
        style={{ height: "104px" }}
      >
        <div className="h-full w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 flex items-center justify-between gap-6">
          {/* LOGO */}
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="flex items-center flex-shrink-0"
            aria-label="L'Oste e il Sacrestano — Home"
          >
            <Image
              src="/images/LOGO ULTIMO NUOVO.png"
              alt="L'Oste e il Sacrestano"
              width={2146}
              height={733}
              className="h-14 md:h-20 lg:h-24 w-auto"
              priority
              quality={100}
              unoptimized
            />
          </Link>

          {/* DESKTOP NAV LINKS — right aligned */}
          <nav
            className="hidden md:flex items-center gap-6 lg:gap-8"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative text-[13px] lg:text-sm tracking-[0.22em] uppercase transition-colors duration-300 ${
                    active ? "text-[#c9a55c]" : "text-white hover:text-[#c9a55c]"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute left-1/2 -translate-x-1/2 -bottom-1.5 h-px bg-[#c9a55c] transition-all duration-300 ${
                      active ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* HAMBURGER (mobile) */}
          <button
            type="button"
            onClick={() => setIsOpen((v) => !v)}
            aria-label={isOpen ? "Chiudi menu" : "Apri menu"}
            {...(isOpen ? { "aria-expanded": true } : { "aria-expanded": false })}
            className="md:hidden flex items-center justify-center w-11 h-11 text-white flex-shrink-0"
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
      </header>

      {/* MOBILE OVERLAY */}
      <div
        className={`md:hidden fixed inset-0 z-40 bg-[#0a0a0a] transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
        style={{ paddingTop: "104px" }}
      >
        <nav className="h-full flex flex-col items-center justify-center gap-7 px-8">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`text-3xl transition-colors ${
                  active ? "text-[#c9a55c]" : "text-white hover:text-[#c9a55c]"
                }`}
                style={{ fontFamily: "Cormorant Garamond, serif" }}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </>
  );
}

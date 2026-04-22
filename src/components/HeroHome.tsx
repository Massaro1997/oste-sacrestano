"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const slides = [
  { desktop: "/images/hero.jpg", mobile: "/images/hero-mobile.jpg" },
  { desktop: "/images/galleria-3.jpg", mobile: "/images/galleria-3.jpg" },
  { desktop: "/images/galleria-4.jpg", mobile: "/images/galleria-4.jpg" },
  { desktop: "/images/galleria-6-new.jpg", mobile: "/images/galleria-6-new.jpg" },
  { desktop: "/images/home-galleria-peppe-chiara.jpg", mobile: "/images/home-galleria-peppe-chiara.jpg" },
];

const SLIDE_INTERVAL = 6000;

export default function HeroHome() {
  const [active, setActive] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const t = setInterval(() => {
      setActive((i) => (i + 1) % slides.length);
    }, SLIDE_INTERVAL);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Logo morph math: scale from 1 (hero big) to ~0.22 (nav size),
  // translate up toward nav. Driven by scrollY within viewport.
  const vh = typeof window !== "undefined" ? window.innerHeight : 900;
  const progress = Math.min(1, Math.max(0, scrollY / (vh * 0.6)));
  const logoScale = 1 - progress * 0.78; // 1 -> 0.22
  const logoTranslateY = -progress * (vh * 0.45 - 52); // toward nav center (~52px from top)
  const textOpacity = 1 - Math.min(1, progress * 1.6);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden"
      style={{ height: "100vh" }}
    >
      {/* Carousel background */}
      <div className="absolute inset-0">
        {slides.map((s, i) => (
          <picture key={i}>
            <source media="(max-width: 768px)" srcSet={s.mobile} />
            <img
              src={s.desktop}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-[1600ms] ease-in-out"
              style={{
                opacity: active === i ? 1 : 0,
                transform: active === i ? "scale(1.05)" : "scale(1)",
                transition: "opacity 1.6s ease-in-out, transform 8s ease-out",
              }}
              loading={i === 0 ? "eager" : "lazy"}
              {...(i === 0 ? { fetchPriority: "high" } : {})}
            />
          </picture>
        ))}
        {/* Dark overlay for legibility */}
        <div className="absolute inset-0 bg-black/45" />
      </div>

      {/* Content */}
      <div
        className="relative z-10 flex flex-col items-center justify-center text-center px-6 h-full"
        style={{ opacity: textOpacity, pointerEvents: textOpacity < 0.1 ? "none" : "auto" }}
      >
        <p
          className="text-white text-xs md:text-sm tracking-[0.35em] uppercase mb-8 md:mb-10"
          style={{ fontFamily: "Montserrat, sans-serif" }}
        >
          Osteria Contemporanea
        </p>

        {/* Logo — morphs into navbar on scroll */}
        <div
          className="will-change-transform"
          style={{
            transform: `translateY(${logoTranslateY}px) scale(${logoScale})`,
            transformOrigin: "center top",
            transition: "none",
          }}
        >
          <img
            src="/images/LOGO ULTIMO NUOVO.png"
            alt="L'Oste e il Sacrestano"
            className="h-24 md:h-40 lg:h-56 w-auto"
            style={{ filter: "drop-shadow(0 4px 24px rgba(0,0,0,0.5))" }}
          />
        </div>

        <div className="mt-10 md:mt-12" />

        <Link
          href="/prenota"
          className="btn-primary"
          style={{ fontFamily: "Montserrat, sans-serif" }}
        >
          Prenota un Tavolo
        </Link>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-2.5">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setActive(i)}
            aria-label={`Slide ${i + 1}`}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              active === i ? "w-8 bg-[#c9a55c]" : "w-1.5 bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

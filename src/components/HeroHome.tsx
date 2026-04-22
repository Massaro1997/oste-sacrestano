"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const slides = [
  { desktop: "/images/hero.jpg", mobile: "/images/hero-mobile.jpg" },
  { desktop: "/images/galleria-3.jpg", mobile: "/images/galleria-3.jpg" },
  { desktop: "/images/galleria-4.jpg", mobile: "/images/galleria-4.jpg" },
  { desktop: "/images/mostra-tmp863gusaj.jpg", mobile: "/images/mostra-tmp863gusaj.jpg" },
  { desktop: "/images/mostra-tmposllomzy.jpg", mobile: "/images/mostra-tmposllomzy.jpg" },
  { desktop: "/images/023.jpg", mobile: "/images/023.jpg" },
];

const SLIDE_INTERVAL = 6000;

// Hero logo height (px) matches tailwind class h-24/h-40/h-56.
// Nav logo height (px) matches nav class h-12/h-14/h-16.
// Ratios used to compute the scale target per breakpoint.
function useViewport() {
  const [vw, setVw] = useState(1200);
  const [vh, setVh] = useState(900);
  useEffect(() => {
    const update = () => {
      setVw(window.innerWidth);
      // Use the largest viewport height ever seen in this session so the
      // mobile URL-bar show/hide does not jitter the morph math.
      setVh((prev) => Math.max(prev, window.innerHeight));
    };
    update();
    window.addEventListener("resize", update);
    window.addEventListener("orientationchange", update);
    return () => {
      window.removeEventListener("resize", update);
      window.removeEventListener("orientationchange", update);
    };
  }, []);
  return { vw, vh };
}

export default function HeroHome() {
  const [active, setActive] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const { vw, vh } = useViewport();

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

  // Breakpoint-aware logo sizes (must match the Tailwind classes below
  // and Navigation.tsx).
  const heroLogoPx = vw >= 1024 ? 224 : vw >= 768 ? 160 : 176; // h-56 / h-40 / h-44 mobile
  const navLogoPx = vw >= 1024 ? 64 : vw >= 768 ? 56 : 56;    // h-16 / h-14 / h-14
  const navCenterY = vw >= 768 ? 40 : 32; // nav is 80px (md+) / 64px (mobile)
  const scrollRange = vh * 0.6;
  const progress = Math.min(1, Math.max(0, scrollY / scrollRange));

  // Scale hero logo down to match nav logo size at end of scroll range.
  const scaleTarget = navLogoPx / heroLogoPx;
  const logoScale = 1 - (1 - scaleTarget) * progress;

  // Distance logo needs to travel upward: from hero center to nav center.
  // Hero center Y ≈ vh/2, nav center Y = navCenterY (40).
  const travel = vh / 2 - navCenterY;
  const logoTranslateY = -progress * travel;

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
              className="absolute inset-0 w-full h-full transition-opacity duration-[1600ms] ease-in-out"
              style={{
                objectFit: "cover",
                objectPosition: "center",
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

      {/* Static content (eyebrow + CTA) — fades out on scroll */}
      <div
        className="relative z-10 flex flex-col items-center justify-center text-center px-6 h-full pointer-events-none"
        style={{ opacity: textOpacity }}
      >
        <p
          className="text-white text-xs md:text-sm tracking-[0.35em] uppercase mb-8 md:mb-10"
          style={{ fontFamily: "Montserrat, sans-serif" }}
        >
          Osteria Contemporanea
        </p>

        {/* Placeholder keeps vertical layout identical to logo position;
            the morphing logo is absolutely positioned below. */}
        <div
          style={{
            height: `${heroLogoPx}px`,
            width: "1px",
          }}
        />

        <div className="mt-20 md:mt-28 lg:mt-32" />

        <Link
          href="/prenota"
          className="btn-primary pointer-events-auto"
          style={{ fontFamily: "Montserrat, sans-serif", opacity: textOpacity > 0.1 ? 1 : 0 }}
        >
          Prenota un Tavolo
        </Link>
      </div>

      {/* MORPHING LOGO — absolute, centered. Anchored to section center
          so math is stable; translates upward on scroll toward the nav. */}
      <div
        className="pointer-events-none absolute left-1/2 z-20 will-change-transform"
        style={{
          top: "50%",
          transform: `translate(-50%, calc(-50% + ${logoTranslateY}px)) scale(${logoScale})`,
          transformOrigin: "center center",
          transition: "none",
        }}
      >
        <img
          src="/images/LOGO ULTIMO NUOVO.png"
          alt="L'Oste e il Sacrestano"
          className="h-44 md:h-40 lg:h-56 w-auto"
          style={{ filter: "drop-shadow(0 4px 24px rgba(0,0,0,0.5))" }}
        />
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

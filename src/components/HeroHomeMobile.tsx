"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const slides = [
  "/images/hero-mobile.jpg",
  "/images/galleria-3.jpg",
  "/images/galleria-4.jpg",
  "/images/mostra-tmp863gusaj.jpg",
  "/images/mostra-tmposllomzy.jpg",
  "/images/023.jpg",
];

const SLIDE_INTERVAL = 6000;

export default function HeroHomeMobile() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setActive((i) => (i + 1) % slides.length);
    }, SLIDE_INTERVAL);
    return () => clearInterval(t);
  }, []);

  return (
    <section
      className="relative w-full overflow-hidden md:hidden"
      style={{ height: "100svh", minHeight: "560px" }}
    >
      {/* Background carousel */}
      <div className="absolute inset-0">
        {slides.map((src, i) => (
          <img
            key={i}
            src={src}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full"
            style={{
              objectFit: "cover",
              objectPosition: "center",
              opacity: active === i ? 1 : 0,
              transition: "opacity 1.4s ease-in-out",
            }}
            loading={i === 0 ? "eager" : "lazy"}
            {...(i === 0 ? { fetchPriority: "high" } : {})}
          />
        ))}
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <p
          className="text-white text-[11px] tracking-[0.35em] uppercase mb-6"
          style={{ fontFamily: "Montserrat, sans-serif" }}
        >
          Osteria Contemporanea
        </p>

        <img
          src="/images/LOGO ULTIMO NUOVO.png"
          alt="L'Oste e il Sacrestano"
          className="h-40 w-auto mb-10"
          style={{ filter: "drop-shadow(0 4px 24px rgba(0,0,0,0.5))" }}
        />

        <Link
          href="/prenota"
          className="btn-primary"
          style={{ fontFamily: "Montserrat, sans-serif" }}
        >
          Prenota un Tavolo
        </Link>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setActive(i)}
            aria-label={`Slide ${i + 1}`}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              active === i ? "w-7 bg-[#c9a55c]" : "w-1.5 bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  src: string;
  height?: number;
  /** 0 = no parallax, 0.5 = strong. Default 0.25. */
  speed?: number;
  alt?: string;
};

export default function ParallaxSection({ src, height = 500, speed = 0.25, alt = "" }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const vh = window.innerHeight;
      // Only update while the section is within viewport + small margin.
      if (rect.bottom < -200 || rect.top > vh + 200) return;
      // Distance from section top to viewport top, used to drive parallax.
      // When section top aligns with viewport top -> offset = 0.
      // As section scrolls up (top becomes negative), image translates down
      // slower than the section so the background "lags" behind.
      const delta = rect.top;
      setOffset(-delta * speed);
    };

    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        update();
      });
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", update);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [speed]);

  // Buffer height so img never exposes empty edges regardless of scroll position.
  // Max offset during viewport traversal ≈ (vh + height) * speed. Use a
  // generous extra 40% of the section height as a safety pad.
  const bufferPx = Math.ceil((typeof window !== "undefined" ? window.innerHeight : 1000) * speed + height * 0.4);

  return (
    <div
      ref={ref}
      className="relative w-full overflow-hidden bg-black"
      style={{ height: `${height}px` }}
      {...(alt === "" ? { "aria-hidden": true } : {})}
    >
      <div
        className="absolute left-0 right-0 will-change-transform"
        style={{
          top: `-${bufferPx}px`,
          bottom: `-${bufferPx}px`,
          transform: `translate3d(0, ${offset}px, 0)`,
        }}
      >
        <img
          src={src}
          alt={alt}
          className="w-full h-full"
          style={{
            objectFit: "cover",
            objectPosition: "center",
            display: "block",
          }}
          loading="lazy"
        />
      </div>
    </div>
  );
}

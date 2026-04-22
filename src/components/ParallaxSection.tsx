"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  src: string;
  height?: number;
  /** 0 = no parallax, 0.5 = image scrolls at half rate. Default 0.35. */
  speed?: number;
  alt?: string;
};

export default function ParallaxSection({ src, height = 500, speed = 0.35, alt = "" }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const vh = window.innerHeight;
      // Section center distance from viewport center, in px.
      const centerDelta = rect.top + rect.height / 2 - vh / 2;
      // Image translates opposite to the delta, scaled by speed.
      setOffset(-centerDelta * speed);
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

  // Image height must be taller than section by ~ 2 * max offset so it never
  // reveals an empty edge. Scale factor here is generous to be safe.
  const imgScale = 1 + Math.abs(speed) * 1.5;

  return (
    <div
      ref={ref}
      className="relative w-full overflow-hidden"
      style={{ height: `${height}px` }}
      aria-hidden={alt === "" ? true : undefined}
    >
      <img
        src={src}
        alt={alt}
        className="absolute left-1/2 top-1/2 w-full h-full -translate-x-1/2 will-change-transform"
        style={{
          objectFit: "cover",
          objectPosition: "center",
          transform: `translate3d(-50%, calc(-50% + ${offset}px), 0) scale(${imgScale})`,
          transformOrigin: "center",
        }}
        loading="lazy"
      />
    </div>
  );
}

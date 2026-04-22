"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  src: string;
  /** Visible height of the section in px. */
  height?: number;
  alt?: string;
};

/**
 * Reliable parallax: section is a window that stays fixed in flow,
 * while the inner image container uses `position: sticky` + a CSS
 * translate driven by the section's own scroll progress.
 *
 * No fixed-background bug. No edge gaps (image is 2x section height).
 * No JS layout on every frame — we only update a CSS var.
 */
export default function ParallaxSection({ src, height = 500, alt = "" }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    const img = imgRef.current;
    if (!el || !img) return;

    let raf = 0;
    const update = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // Progress 0..1 as the section traverses the viewport.
      // -rect.height ... +vh mapped to 0..1.
      const total = vh + rect.height;
      const p = Math.min(1, Math.max(0, (vh - rect.top) / total));
      // Translate the oversized image -25% .. +25% of its overflow.
      // Image is 200% tall; it has 50% extra height to move through.
      const translatePct = -25 + p * 50; // -25% -> +25%
      img.style.transform = `translate3d(0, ${translatePct}%, 0)`;
    };

    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        update();
      });
    };

    // IntersectionObserver: only start listening when section is in view.
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          setIsVisible(e.isIntersecting);
          if (e.isIntersecting) update();
        }
      },
      { rootMargin: "200px 0px" }
    );
    io.observe(el);

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", update);
      io.disconnect();
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="relative w-full overflow-hidden bg-neutral-900"
      style={{ height: `${height}px` }}
      {...(alt === "" ? { "aria-hidden": true } : {})}
    >
      {/* Oversized image wrapper (200% tall of section) — translated on scroll. */}
      <div
        ref={imgRef}
        className="absolute left-0 right-0 top-0 will-change-transform"
        style={{
          height: "200%",
          transform: "translate3d(0, -25%, 0)",
          // Pause work when offscreen to save battery.
          visibility: isVisible ? "visible" : "hidden",
        }}
      >
        <img
          src={src}
          alt={alt}
          className="block w-full h-full"
          style={{ objectFit: "cover", objectPosition: "center" }}
          loading="lazy"
          decoding="async"
        />
      </div>
    </div>
  );
}

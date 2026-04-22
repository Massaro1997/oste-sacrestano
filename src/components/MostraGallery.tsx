"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Dish = { src: string; alt: string };

export default function MostraGallery({ items }: { items: Dish[] }) {
  const [lightbox, setLightbox] = useState<number | null>(null);

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") setLightbox((i) => (i === null ? 0 : (i + 1) % items.length));
      if (e.key === "ArrowLeft") setLightbox((i) => (i === null ? 0 : (i - 1 + items.length) % items.length));
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [lightbox, items.length]);

  return (
    <>
      {/* GRID UNIFORME */}
      <div
        className="mostra-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
          gap: "16px",
        }}
      >
        {items.map((dish, i) => (
          <div
            key={i}
            onClick={() => setLightbox(i)}
            style={{
              position: "relative",
              aspectRatio: "1 / 1",
              backgroundColor: "white",
              padding: "8px",
              boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
              cursor: "zoom-in",
              transition: "transform 0.3s",
              overflow: "hidden",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <Image
              src={dish.src}
              alt={dish.alt}
              fill
              style={{ objectFit: "cover", padding: "8px" }}
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 220px"
            />
          </div>
        ))}
      </div>

      {/* LIGHTBOX */}
      {lightbox !== null && (
        <div
          onClick={() => setLightbox(null)}
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.95)",
            zIndex: 100,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "24px",
            cursor: "zoom-out",
          }}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((i) => (i === null ? 0 : (i - 1 + items.length) % items.length));
            }}
            aria-label="Precedente"
            style={{
              position: "absolute",
              left: "24px",
              top: "50%",
              transform: "translateY(-50%)",
              background: "rgba(255,255,255,0.1)",
              border: "none",
              color: "white",
              width: "48px",
              height: "48px",
              borderRadius: "50%",
              cursor: "pointer",
              fontSize: "24px",
            }}
          >
            ‹
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((i) => (i === null ? 0 : (i + 1) % items.length));
            }}
            aria-label="Successiva"
            style={{
              position: "absolute",
              right: "24px",
              top: "50%",
              transform: "translateY(-50%)",
              background: "rgba(255,255,255,0.1)",
              border: "none",
              color: "white",
              width: "48px",
              height: "48px",
              borderRadius: "50%",
              cursor: "pointer",
              fontSize: "24px",
            }}
          >
            ›
          </button>
          <button
            onClick={() => setLightbox(null)}
            aria-label="Chiudi"
            style={{
              position: "absolute",
              top: "24px",
              right: "24px",
              background: "rgba(255,255,255,0.1)",
              border: "none",
              color: "white",
              width: "44px",
              height: "44px",
              borderRadius: "50%",
              cursor: "pointer",
              fontSize: "22px",
            }}
          >
            ✕
          </button>
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: "relative",
              maxWidth: "90vw",
              maxHeight: "90vh",
            }}
          >
            <Image
              src={items[lightbox].src}
              alt={items[lightbox].alt}
              width={1600}
              height={1600}
              style={{
                maxWidth: "90vw",
                maxHeight: "90vh",
                width: "auto",
                height: "auto",
                objectFit: "contain",
              }}
              sizes="90vw"
            />
          </div>
        </div>
      )}

      <style jsx>{`
        @media (max-width: 900px) {
          .mostra-grid {
            grid-template-columns: repeat(auto-fill, minmax(160px, 1fr)) !important;
            gap: 12px !important;
          }
        }
        @media (max-width: 480px) {
          .mostra-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 8px !important;
          }
        }
      `}</style>
    </>
  );
}

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

  const first = items[0];
  const last = items[items.length - 1];
  const middle = items.slice(1, -1);

  const tableauStyle: React.CSSProperties = {
    width: "100%",
    cursor: "zoom-in",
    backgroundColor: "white",
    padding: "16px",
    boxShadow: "0 12px 40px rgba(0,0,0,0.12)",
    marginBottom: "48px",
    transition: "transform 0.3s",
  };

  return (
    <>
      {/* TABLEAU APERTURA */}
      {first && (
        <div
          onClick={() => setLightbox(0)}
          style={tableauStyle}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.01)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          <Image
            src={first.src}
            alt={first.alt}
            width={1600}
            height={1000}
            style={{ width: "100%", height: "auto", display: "block" }}
            sizes="100vw"
            priority
          />
        </div>
      )}

      {/* MASONRY MEZZO */}
      <div style={{ columnCount: 3, columnGap: "24px" }} className="mostra-masonry">
        {middle.map((dish, i) => (
          <div
            key={i}
            onClick={() => setLightbox(i + 1)}
            style={{
              breakInside: "avoid",
              marginBottom: "24px",
              backgroundColor: "white",
              padding: "12px",
              boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
              cursor: "zoom-in",
              transition: "transform 0.3s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <Image
              src={dish.src}
              alt={dish.alt}
              width={600}
              height={600}
              style={{ width: "100%", height: "auto", display: "block" }}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
            />
          </div>
        ))}
      </div>

      {/* TABLEAU CHIUSURA */}
      {last && last !== first && (
        <div
          onClick={() => setLightbox(items.length - 1)}
          style={{ ...tableauStyle, marginTop: "48px", marginBottom: 0 }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.01)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          <Image
            src={last.src}
            alt={last.alt}
            width={1600}
            height={1000}
            style={{ width: "100%", height: "auto", display: "block" }}
            sizes="100vw"
          />
        </div>
      )}

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
        @media (max-width: 1024px) {
          .mostra-masonry {
            column-count: 2 !important;
          }
        }
        @media (max-width: 640px) {
          .mostra-masonry {
            column-count: 1 !important;
          }
        }
      `}</style>
    </>
  );
}

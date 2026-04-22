import Image from "next/image";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#1a1a1a", color: "white" }}>
      <div className="mobile-footer-wrap" style={{ maxWidth: "1200px", margin: "0 auto", padding: "80px 24px" }}>
        <div className="mobile-footer-grid" style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr",
          gap: "60px"
        }}>
          {/* Logo e descrizione */}
          <div>
            <Image
              src="/images/LOGO ULTIMO NUOVO.png"
              alt="L'Oste e il Sacrestano"
              width={200}
              height={70}
              style={{ marginBottom: "24px" }}
             quality={95} />
            <p style={{
              fontFamily: "Montserrat, sans-serif",
              fontSize: "14px",
              lineHeight: 1.8,
              color: "#999",
              maxWidth: "400px"
            }}>
              Osteria contemporanea a denominazione di origine siciliana.
              Dal 2004 nel cuore di Licata, proponiamo una cucina di mercato
              principalmente a base di pesce e verdure del territorio.
            </p>
          </div>

          {/* Contatti */}
          <div>
            <h4 style={{
              fontFamily: "Cormorant Garamond, serif",
              fontSize: "20px",
              fontWeight: 400,
              color: "#c9a55c",
              marginBottom: "24px"
            }}>
              Contatti
            </h4>
            <div style={{
              fontFamily: "Montserrat, sans-serif",
              fontSize: "14px",
              lineHeight: 2,
              color: "#888"
            }}>
              <p>Via Sant&apos;Andrea, 19</p>
              <p>92027 Licata (AG)</p>
              <p style={{ marginTop: "16px" }}>Tel: 0922 774736</p>
              <p>osteriabonsignore@gmail.com</p>
            </div>
          </div>

          {/* Orari */}
          <div>
            <h4 style={{
              fontFamily: "Cormorant Garamond, serif",
              fontSize: "20px",
              fontWeight: 400,
              color: "#c9a55c",
              marginBottom: "24px"
            }}>
              Orari
            </h4>
            <div style={{
              fontFamily: "Montserrat, sans-serif",
              fontSize: "14px",
              lineHeight: 2,
              color: "#888"
            }}>
              <p>Mar - Sab: 12:00 - 15:00</p>
              <p>Mar - Sab: 20:00 - 21:30</p>
              <p>Dom: 12:00 - 15:00</p>
              <p style={{ color: "#666" }}>Lunedi chiuso</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{
          borderTop: "1px solid #333",
          marginTop: "60px",
          paddingTop: "32px"
        }}>
          <div className="mobile-footer-bottom" style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "16px"
          }}>
            <p style={{
              fontFamily: "Montserrat, sans-serif",
              fontSize: "13px",
              color: "#666"
            }}>
              © 2024 L&apos;Oste e il Sacrestano. Tutti i diritti riservati. P.IVA 02363070844
            </p>
            <div style={{ display: "flex", gap: "24px" }}>
              <a
                href="https://www.instagram.com/losteeilsacrestano/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#888", transition: "color 0.3s" }}
              >
                <svg style={{ width: "20px", height: "20px" }} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/losteeilsacrestano"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#888", transition: "color 0.3s" }}
              >
                <svg style={{ width: "20px", height: "20px" }} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

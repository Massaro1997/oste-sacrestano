import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chef Peppe Bonsignore | L'Oste e il Sacrestano",
  description: "Scopri la storia e la filosofia culinaria dello Chef Peppe Bonsignore.",
};

export default function PeppePage() {
  return (
    <main>
      {/* HERO */}
      <section style={{ position: "relative", height: "80vh", width: "100%" }}>
        <Image
          src="/images/chef-peppe.png"
          alt="Chef Peppe Bonsignore"
          fill
          style={{ objectFit: "cover", objectPosition: "top" }}
          priority
        />
        <div style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.2), transparent)"
        }} />
        <div style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          padding: "60px",
          color: "white"
        }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <p style={{
              fontFamily: "Montserrat, sans-serif",
              color: "#c9a55c",
              fontSize: "14px",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              marginBottom: "16px"
            }}>
              Lo Chef
            </p>
            <h1 style={{
              fontFamily: "Cormorant Garamond, serif",
              fontSize: "clamp(40px, 7vw, 80px)",
              fontWeight: 300
            }}>
              Peppe Bonsignore
            </h1>
          </div>
        </div>
      </section>

      {/* LA STORIA */}
      <section style={{ padding: "120px 24px", backgroundColor: "#fafafa" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
          <p style={{
            fontFamily: "Montserrat, sans-serif",
            color: "#c9a55c",
            fontSize: "14px",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            marginBottom: "24px"
          }}>
            La Storia
          </p>
          <h2 style={{
            fontFamily: "Cormorant Garamond, serif",
            fontSize: "clamp(32px, 5vw, 48px)",
            fontWeight: 400,
            color: "#1a1a1a",
            marginBottom: "24px"
          }}>
            Una Passione Nata in Sicilia
          </h2>
          <div style={{ width: "60px", height: "1px", backgroundColor: "#c9a55c", margin: "0 auto 40px" }} />
          <p style={{
            fontFamily: "Montserrat, sans-serif",
            fontSize: "16px",
            lineHeight: 1.8,
            color: "#666",
            marginBottom: "24px"
          }}>
            Giuseppe Bonsignore, per tutti semplicemente Peppe, nasce a Licata con la passione per la cucina nel sangue. Cresciuto tra i profumi del mercato del pesce e gli orti della campagna siciliana, ha sviluppato fin da giovane un legame profondo con i prodotti del territorio.
          </p>
          <p style={{
            fontFamily: "Montserrat, sans-serif",
            fontSize: "16px",
            lineHeight: 1.8,
            color: "#666",
            marginBottom: "24px"
          }}>
            Nel 2004, insieme alla moglie Chiara, realizza il sogno di aprire L&apos;Oste e il Sacrestano, un&apos;osteria contemporanea nel cuore del centro storico di Licata.
          </p>
          <p style={{
            fontFamily: "Montserrat, sans-serif",
            fontSize: "16px",
            lineHeight: 1.8,
            color: "#666"
          }}>
            La sua filosofia culinaria si basa su tre pilastri fondamentali: il rispetto assoluto per la materia prima, la stagionalita degli ingredienti, e la reinterpretazione contemporanea delle ricette della tradizione siciliana.
          </p>
        </div>
      </section>

      {/* GALLERIA PEPPE & CHIARA */}
      <section style={{ padding: "120px 24px", backgroundColor: "white" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <p style={{
              fontFamily: "Montserrat, sans-serif",
              color: "#c9a55c",
              fontSize: "14px",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              marginBottom: "16px"
            }}>
              Peppe e Chiara
            </p>
            <h2 style={{
              fontFamily: "Cormorant Garamond, serif",
              fontSize: "clamp(32px, 5vw, 48px)",
              fontWeight: 400,
              color: "#1a1a1a"
            }}>
              Una Storia di Passione
            </h2>
            <div style={{ width: "60px", height: "1px", backgroundColor: "#c9a55c", margin: "24px auto 0" }} />
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "16px"
          }}>
            {["001", "002", "005", "007", "008", "011"].map((num) => (
              <div key={num} style={{ position: "relative", aspectRatio: "4/5", overflow: "hidden" }}>
                <Image
                  src={`/images/${num}.jpg`}
                  alt={`Peppe e Chiara ${num}`}
                  fill
                  style={{ objectFit: "cover", transition: "transform 0.5s" }}
                  className="hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FILOSOFIA */}
      <section style={{ backgroundColor: "white" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          minHeight: "700px",
          maxWidth: "1400px",
          margin: "0 auto"
        }}>
          <div style={{ display: "flex", alignItems: "center", padding: "60px" }}>
            <div style={{ maxWidth: "500px" }}>
              <p style={{
                fontFamily: "Montserrat, sans-serif",
                color: "#c9a55c",
                fontSize: "14px",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                marginBottom: "16px"
              }}>
                La Filosofia
              </p>
              <h2 style={{
                fontFamily: "Cormorant Garamond, serif",
                fontSize: "clamp(32px, 4vw, 48px)",
                fontWeight: 400,
                color: "#1a1a1a",
                marginBottom: "24px"
              }}>
                Dal Mercato alla Tavola
              </h2>
              <div style={{ width: "60px", height: "1px", backgroundColor: "#c9a55c", marginBottom: "32px" }} />
              <p style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "16px",
                lineHeight: 1.8,
                color: "#666",
                marginBottom: "20px"
              }}>
                Ogni mattina, Peppe si reca al mercato del pesce di Licata per selezionare personalmente il pescato migliore. Questa routine quotidiana non e solo un&apos;abitudine, ma un vero e proprio rituale.
              </p>
              <p style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "16px",
                lineHeight: 1.8,
                color: "#666",
                marginBottom: "20px"
              }}>
                La cucina di Peppe e una cucina di mercato, che cambia con le stagioni e segue il ritmo della natura.
              </p>
              <p style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "16px",
                lineHeight: 1.8,
                color: "#666"
              }}>
                Il pesce e le verdure sono i protagonisti assoluti, trattati con rispetto e trasformati in piatti che esaltano la loro essenza.
              </p>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", padding: "60px", alignContent: "center" }}>
            <div style={{ position: "relative", aspectRatio: "3/4" }}>
              <Image src="/images/007.jpg" alt="Piatto dello chef" fill style={{ objectFit: "cover" }} />
            </div>
            <div style={{ position: "relative", aspectRatio: "3/4", marginTop: "40px" }}>
              <Image src="/images/008.jpg" alt="Piatto dello chef" fill style={{ objectFit: "cover" }} />
            </div>
          </div>
        </div>
      </section>

      {/* RICONOSCIMENTI */}
      <section style={{ padding: "120px 24px", backgroundColor: "#1a1a1a", textAlign: "center" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <p style={{
            fontFamily: "Montserrat, sans-serif",
            color: "#c9a55c",
            fontSize: "14px",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            marginBottom: "24px"
          }}>
            Riconoscimenti
          </p>
          <h2 style={{
            fontFamily: "Cormorant Garamond, serif",
            fontSize: "clamp(32px, 5vw, 48px)",
            fontWeight: 400,
            color: "white",
            marginBottom: "24px"
          }}>
            Selezionato dalla Guida Michelin
          </h2>
          <div style={{ width: "60px", height: "1px", backgroundColor: "#c9a55c", margin: "0 auto 40px" }} />
          <p style={{
            fontFamily: "Montserrat, sans-serif",
            fontSize: "16px",
            lineHeight: 1.8,
            color: "#999",
            marginBottom: "48px"
          }}>
            La cucina di Peppe Bonsignore e stata riconosciuta dalla prestigiosa Guida Michelin, un traguardo che premia anni di dedizione, passione e ricerca della perfezione.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "80px" }}>
            <div style={{ textAlign: "center" }}>
              <p style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "56px", fontWeight: 300, color: "#c9a55c", marginBottom: "8px" }}>2004</p>
              <p style={{ fontFamily: "Montserrat, sans-serif", fontSize: "14px", color: "#666" }}>Anno di apertura</p>
            </div>
            <div style={{ textAlign: "center" }}>
              <p style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "56px", fontWeight: 300, color: "#c9a55c", marginBottom: "8px" }}>20+</p>
              <p style={{ fontFamily: "Montserrat, sans-serif", fontSize: "14px", color: "#666" }}>Anni di esperienza</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "120px 24px", backgroundColor: "#fafafa", textAlign: "center" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <h2 style={{
            fontFamily: "Cormorant Garamond, serif",
            fontSize: "clamp(32px, 5vw, 48px)",
            fontWeight: 400,
            color: "#1a1a1a",
            marginBottom: "24px"
          }}>
            Assaggia la Cucina di Peppe
          </h2>
          <p style={{
            fontFamily: "Montserrat, sans-serif",
            fontSize: "16px",
            lineHeight: 1.8,
            color: "#666",
            marginBottom: "40px"
          }}>
            Vieni a scoprire i sapori autentici della Sicilia attraverso i piatti dello Chef Peppe. Prenota il tuo tavolo e lasciati sorprendere.
          </p>
          <Link href="/prenota" className="btn-primary" style={{ fontFamily: "Montserrat, sans-serif" }}>
            Prenota un Tavolo
          </Link>
        </div>
      </section>
    </main>
  );
}

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
      <section className="mobile-hero-80" style={{ position: "relative", height: "80vh", width: "100%" }}>
        <picture>
          <source media="(max-width: 768px)" srcSet="/images/chef-peppe-mobile.jpg" />
          <img
            src="/images/chef-peppe.jpg"
            alt="Chef Peppe Bonsignore"
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }}
            fetchPriority="high"
          />
        </picture>
        <div style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.2), transparent)"
        }} />
        <div className="peppe-hero-caption" style={{
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
      <section className="mobile-section" style={{ padding: "120px 24px", backgroundColor: "#fafafa" }}>
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
      <section className="mobile-section" style={{ padding: "120px 24px", backgroundColor: "white" }}>
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

          <div className="mobile-gallery-3" style={{
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
                 quality={95}  sizes="100vw" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FILOSOFIA */}
      <section style={{ backgroundColor: "white" }}>
        <div className="mobile-split" style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          minHeight: "700px",
          maxWidth: "1400px",
          margin: "0 auto"
        }}>
          <div className="mobile-split-text" style={{ display: "flex", alignItems: "center", padding: "60px" }}>
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
          <div className="mobile-peppe-images mobile-split-image" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", padding: "60px", alignContent: "center" }}>
            <div style={{ position: "relative", aspectRatio: "3/4" }}>
              <Image src="/images/007.jpg" alt="Piatto dello chef" fill style={{ objectFit: "cover" }}  quality={95}  sizes="100vw" />
            </div>
            <div style={{ position: "relative", aspectRatio: "3/4", marginTop: "40px" }}>
              <Image src="/images/008.jpg" alt="Piatto dello chef" fill style={{ objectFit: "cover" }}  quality={95}  sizes="100vw" />
            </div>
          </div>
        </div>
      </section>

      {/* RICONOSCIMENTI */}
      <section className="mobile-section-dark" style={{ padding: "120px 24px", backgroundColor: "#1a1a1a", textAlign: "center" }}>
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
          <div className="mobile-stats-row" style={{ display: "flex", justifyContent: "center", gap: "80px" }}>
            <div style={{ textAlign: "center" }}>
              <p style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "56px", fontWeight: 300, color: "#c9a55c", marginBottom: "8px" }}>2004</p>
              <p style={{ fontFamily: "Montserrat, sans-serif", fontSize: "14px", color: "#666" }}>Anno di apertura</p>
            </div>
            <div style={{ textAlign: "center" }}>
              <p style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "56px", fontWeight: 300, color: "#c9a55c", marginBottom: "8px" }}>20+</p>
              <p style={{ fontFamily: "Montserrat, sans-serif", fontSize: "14px", color: "#666" }}>Anni di esperienza</p>
            </div>
          </div>
          <div style={{ marginTop: "56px" }}>
            <a
              href="https://guide.michelin.com/de/de/sicilia/licata/restaurant/l-oste-e-il-sacrestano"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "12px",
                padding: "14px 32px",
                border: "1px solid #c9a55c",
                color: "#c9a55c",
                textDecoration: "none",
                fontFamily: "Montserrat, sans-serif",
                fontSize: "12px",
                letterSpacing: "0.25em",
                textTransform: "uppercase"
              }}
            >
              Scheda Michelin →
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mobile-section" style={{ padding: "120px 24px", backgroundColor: "#fafafa", textAlign: "center" }}>
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

      {/* PARLANO DI LUI */}
      <section style={{ padding: "100px 0", backgroundColor: "#fafafa", overflow: "hidden" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 24px", textAlign: "center" }}>
          <p style={{
            fontFamily: "Montserrat, sans-serif",
            color: "#c9a55c",
            fontSize: "14px",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            marginBottom: "16px"
          }}>
            Rassegna Stampa
          </p>
          <h2 style={{
            fontFamily: "Cormorant Garamond, serif",
            fontSize: "clamp(28px, 4vw, 40px)",
            fontWeight: 400,
            color: "#1a1a1a",
            marginBottom: "24px"
          }}>
            Parlano di Lui
          </h2>
          <div style={{ width: "60px", height: "1px", backgroundColor: "#c9a55c", margin: "0 auto 16px" }} />
          <p style={{
            fontFamily: "Montserrat, sans-serif",
            fontSize: "13px",
            color: "#999",
            marginBottom: "48px",
            letterSpacing: "0.05em"
          }}>
            Scorri per leggere →
          </p>

        </div>

        <div
          className="press-scroll"
          style={{
            display: "flex",
            gap: "24px",
            overflowX: "auto",
            scrollSnapType: "x mandatory",
            padding: "8px 48px 32px",
            scrollbarWidth: "none",
          }}
        >
          {[
            { nome: "Identita Golose", categoria: "Guida", titolo: "Tra i ristoranti d'autore", estratto: "La guida di riferimento per l'alta cucina italiana inserisce Peppe Bonsignore tra i protagonisti della scena siciliana.", url: "https://www.identitagolose.it/sito/it/62/36190/ristoranti/loste-e-il-sacrestano.html" },
            { nome: "Passione Gourmet", categoria: "Recensione", titolo: "La cucina di Peppe Bonsignore", estratto: "Roberto Bentivegna racconta un'esperienza sensoriale tra le ricette di tradizione reinterpretate dallo chef.", url: "https://passionegourmet.it/2012/10/22/loste-e-il-sacrestano-chef-peppe-bonsignore-licata-ag-di-roberto-bentivegna/" },
            { nome: "Volevo Fare il Giornalista", categoria: "Storia", titolo: "Il maestro elementare che volle farsi oste", estratto: "Il racconto del percorso umano e professionale che ha portato Peppe dall'insegnamento alla cucina.", url: "https://www.volevofareilgiornalista.it/peppe-bonsignore-il-maestro-elementare-che-volle-farsi-oste/" },
            { nome: "Altissimo Ceto", categoria: "Recensione", titolo: "Hostaria Enoteca a Licata", estratto: "Una visita approfondita all'osteria dello chef Giuseppe Bonsignore nel centro storico di Licata.", url: "https://www.altissimoceto.com/2014/01/20/hostaria-enoteca-loste-e-il-sacrestano-licata-ag-chef-giuseppe-bonsignore/" },
            { nome: "Naboo", categoria: "Profilo", titolo: "Un ristorante da scoprire", estratto: "La scheda completa del ristorante con recensioni, immagini e informazioni per prenotare.", url: "https://www.naboo.app/de-at/explorer/houses/loste-e-il-sacrestano" },
            { nome: "Wanderlog", categoria: "Viaggi", titolo: "Tappa siciliana d'eccezione", estratto: "Inserito tra i ristoranti consigliati ai viaggiatori in visita alla costa meridionale della Sicilia.", url: "https://wanderlog.com/de/place/details/2702245/loste-e-il-sacrestano" },
          ].map((item) => (
            <a
              key={item.url}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                flex: "0 0 340px",
                scrollSnapAlign: "start",
                display: "flex",
                flexDirection: "column",
                backgroundColor: "white",
                textDecoration: "none",
                color: "#1a1a1a",
                textAlign: "left",
                boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
                transition: "transform 0.3s, box-shadow 0.3s",
                padding: "32px",
              }}
            >
              <p style={{
                fontFamily: "Montserrat, sans-serif",
                color: "#c9a55c",
                fontSize: "11px",
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                marginBottom: "16px"
              }}>
                {item.categoria}
              </p>
              <h3 style={{
                fontFamily: "Cormorant Garamond, serif",
                fontSize: "24px",
                fontWeight: 500,
                color: "#1a1a1a",
                marginBottom: "16px",
                lineHeight: 1.3
              }}>
                {item.titolo}
              </h3>
              <p style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "13px",
                color: "#666",
                lineHeight: 1.7,
                marginBottom: "24px",
                flex: 1
              }}>
                {item.estratto}
              </p>
              <div style={{ paddingTop: "16px", borderTop: "1px solid #eee", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{
                  fontFamily: "Cormorant Garamond, serif",
                  fontStyle: "italic",
                  fontSize: "15px",
                  color: "#1a1a1a"
                }}>
                  {item.nome}
                </span>
                <span style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "11px",
                  color: "#c9a55c",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase"
                }}>
                  Leggi →
                </span>
              </div>
            </a>
          ))}
        </div>

        <style>{`
          .press-scroll::-webkit-scrollbar { display: none; }
          .press-scroll { -ms-overflow-style: none; }
          .press-scroll > a:hover { transform: translateY(-4px); box-shadow: 0 16px 40px rgba(0,0,0,0.1) !important; }
        `}</style>
      </section>

      {/* SOCIAL */}
      <section className="mobile-section" style={{ padding: "100px 24px", backgroundColor: "white", textAlign: "center" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <p style={{
            fontFamily: "Montserrat, sans-serif",
            color: "#c9a55c",
            fontSize: "14px",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            marginBottom: "16px"
          }}>
            Seguilo
          </p>
          <h2 style={{
            fontFamily: "Cormorant Garamond, serif",
            fontSize: "clamp(28px, 4vw, 40px)",
            fontWeight: 400,
            color: "#1a1a1a",
            marginBottom: "24px"
          }}>
            Social dello Chef
          </h2>
          <div style={{ width: "60px", height: "1px", backgroundColor: "#c9a55c", margin: "0 auto 32px" }} />
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="https://www.instagram.com/ostepeppebonsignore/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "12px",
                padding: "16px 28px",
                border: "1px solid #1a1a1a",
                color: "#1a1a1a",
                textDecoration: "none",
                fontFamily: "Montserrat, sans-serif",
                fontSize: "14px",
                letterSpacing: "0.1em",
                textTransform: "uppercase"
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
              </svg>
              Instagram
            </a>
            <a
              href="https://www.facebook.com/oste.peppebonsignore/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "12px",
                padding: "16px 28px",
                border: "1px solid #1a1a1a",
                color: "#1a1a1a",
                textDecoration: "none",
                fontFamily: "Montserrat, sans-serif",
                fontSize: "14px",
                letterSpacing: "0.1em",
                textTransform: "uppercase"
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/>
              </svg>
              Facebook
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

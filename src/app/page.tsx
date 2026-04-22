import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div style={{ position: "relative" }}>
      {/* HERO - Sticky sotto */}
      <section className="mobile-hero-100" style={{ position: "sticky", top: 0, height: "100vh", width: "100%", zIndex: 0 }}>
        <Image
          src="/images/hero.jpg"
          alt="Piatti gourmet"
          fill
          style={{ objectFit: "cover" }}
          priority
          quality={100}
          sizes="100vw"
        />
        <div style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0,0,0,0.4)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          color: "white",
          padding: "0 24px"
        }}>
          <p style={{
            fontFamily: "Montserrat, sans-serif",
            fontSize: "14px",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            marginBottom: "16px"
          }}>
            Osteria Contemporanea
          </p>
          <h1 style={{
            fontFamily: "Cormorant Garamond, serif",
            fontSize: "clamp(40px, 8vw, 90px)",
            fontWeight: 300,
            marginBottom: "24px"
          }}>
            L&apos;Oste e il Sacrestano
          </h1>
          <p style={{
            fontFamily: "Montserrat, sans-serif",
            fontSize: "18px",
            fontWeight: 300,
            maxWidth: "600px",
            marginBottom: "40px"
          }}>
            Cucina siciliana contemporanea nel cuore di Licata
          </p>
          <Link href="/prenota" className="btn-primary" style={{ fontFamily: "Montserrat, sans-serif" }}>
            Prenota un Tavolo
          </Link>
        </div>
      </section>

      {/* BENVENUTI - scorre sopra hero */}
      <section className="mobile-section" style={{
        padding: "120px 24px",
        backgroundColor: "#fafafa",
        textAlign: "center",
        position: "relative",
        zIndex: 1
      }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <p style={{
            fontFamily: "Montserrat, sans-serif",
            color: "#c9a55c",
            fontSize: "14px",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            marginBottom: "24px"
          }}>
            Benvenuti
          </p>
          <h2 style={{
            fontFamily: "Cormorant Garamond, serif",
            fontSize: "clamp(32px, 5vw, 56px)",
            fontWeight: 400,
            color: "#1a1a1a",
            marginBottom: "24px"
          }}>
            Un viaggio nei sapori della Sicilia
          </h2>
          <div style={{ width: "60px", height: "1px", backgroundColor: "#c9a55c", margin: "0 auto 32px" }} />
          <p style={{
            fontFamily: "Montserrat, sans-serif",
            fontSize: "16px",
            lineHeight: 1.8,
            color: "#666",
            marginBottom: "16px"
          }}>
            Dal 2004, L&apos;Oste e il Sacrestano accoglie i suoi ospiti in un&apos;atmosfera intima e raffinata
            nel centro storico di Licata. La nostra osteria contemporanea propone una cucina di mercato,
            principalmente a base di pesce fresco e verdure del territorio.
          </p>
          <p style={{
            fontFamily: "Montserrat, sans-serif",
            fontSize: "16px",
            lineHeight: 1.8,
            color: "#666"
          }}>
            Chiara vi accoglie con calore, mentre lo Chef Peppe Bonsignore trasforma ogni giorno
            i migliori prodotti del mercato in piatti che raccontano la tradizione siciliana.
          </p>
        </div>
      </section>
      </div>

      {/* PARALLAX PRE-CHEF */}
      <section className="mobile-parallax" style={{
        position: "relative",
        height: "500px",
        backgroundImage: "url(/images/parallax-piatti.jpg)",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundSize: "cover"
      }} />

      {/* CHEF PEPPE - Immagine a sinistra, testo a destra */}
      <section style={{ backgroundColor: "white" }}>
        <div className="mobile-split" style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          minHeight: "700px"
        }}>
          {/* Immagine Chef */}
          <div className="mobile-split-image" style={{ position: "relative", minHeight: "500px" }}>
            <Image
              src="/images/chef-peppe.jpg"
              alt="Chef Peppe Bonsignore"
              fill
              style={{ objectFit: "cover", objectPosition: "top" }}
             quality={95}  sizes="100vw" />
          </div>

          {/* Testo */}
          <div className="mobile-split-text" style={{
            display: "flex",
            alignItems: "center",
            padding: "60px"
          }}>
            <div style={{ maxWidth: "500px" }}>
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
              <h2 style={{
                fontFamily: "Cormorant Garamond, serif",
                fontSize: "clamp(32px, 4vw, 48px)",
                fontWeight: 400,
                color: "#1a1a1a",
                marginBottom: "24px"
              }}>
                Peppe Bonsignore
              </h2>
              <div style={{ width: "60px", height: "1px", backgroundColor: "#c9a55c", marginBottom: "32px" }} />
              <p style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "16px",
                lineHeight: 1.8,
                color: "#666",
                marginBottom: "16px"
              }}>
                Giuseppe Bonsignore, per tutti Peppe, e la sua filosofia culinaria nascono da una
                profonda connessione con il territorio siciliano. Ogni mattina al mercato, seleziona
                personalmente il pescato del giorno e le verdure piu fresche.
              </p>
              <p style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "16px",
                lineHeight: 1.8,
                color: "#666",
                marginBottom: "32px"
              }}>
                La sua cucina, riconosciuta dalla Guida Michelin, unisce tradizione e innovazione,
                valorizzando le tecniche della tradizione siciliana con un approccio contemporaneo.
              </p>
              <Link href="/peppe" className="btn-outline" style={{ fontFamily: "Montserrat, sans-serif" }}>
                Scopri di piu
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PARALLAX PRE-PIATTI */}
      <section className="mobile-parallax" style={{
        position: "relative",
        height: "500px",
        backgroundImage: "url(/images/parallax-prenotazioni.jpg)",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundSize: "cover"
      }} />

      {/* GALLERIA PIATTI */}
      <section className="mobile-section" style={{ padding: "120px 24px", backgroundColor: "#fafafa" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <p style={{
              fontFamily: "Montserrat, sans-serif",
              color: "#c9a55c",
              fontSize: "14px",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              marginBottom: "16px"
            }}>
              I Nostri Piatti
            </p>
            <h2 style={{
              fontFamily: "Cormorant Garamond, serif",
              fontSize: "clamp(32px, 5vw, 48px)",
              fontWeight: 400,
              color: "#1a1a1a"
            }}>
              La Galleria del Gusto
            </h2>
          </div>

          <div className="mobile-gallery-3" style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "24px"
          }}>
            {[
              "/images/035.jpeg",
              "/images/home-galleria-peppe-chiara.jpg",
              "/images/galleria-3-new.jpg",
              "/images/galleria-3.jpg",
              "/images/galleria-4.jpg",
              "/images/galleria-6-new.jpg"
            ].map((src, i) => (
              <div key={i} style={{ position: "relative", aspectRatio: "1/1", overflow: "hidden" }}>
                <Image
                  src={src}
                  alt={`Piatto ${i + 1}`}
                  fill
                  style={{ objectFit: "cover", transition: "transform 0.5s" }}
                  className="hover:scale-105"
                 quality={95}  sizes="100vw" />
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "48px" }}>
            <Link href="/menu" className="btn-outline" style={{ fontFamily: "Montserrat, sans-serif" }}>
              Scopri il Menu
            </Link>
          </div>
        </div>
      </section>

      {/* PARALLAX PIATTO */}
      <section className="mobile-parallax" style={{
        position: "relative",
        height: "500px",
        backgroundImage: "url(/images/parallax-prenota.jpg)",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundSize: "cover"
      }} />

      {/* LICATA */}
      <section style={{ backgroundColor: "white" }}>
        <div className="mobile-split" style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          minHeight: "600px"
        }}>
          {/* Testo */}
          <div className="mobile-split-text" style={{
            display: "flex",
            alignItems: "center",
            padding: "60px",
            order: 1
          }}>
            <div style={{ maxWidth: "500px" }}>
              <p style={{
                fontFamily: "Montserrat, sans-serif",
                color: "#c9a55c",
                fontSize: "14px",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                marginBottom: "16px"
              }}>
                Il Territorio
              </p>
              <h2 style={{
                fontFamily: "Cormorant Garamond, serif",
                fontSize: "clamp(32px, 4vw, 48px)",
                fontWeight: 400,
                color: "#1a1a1a",
                marginBottom: "24px"
              }}>
                Licata, Perla della Sicilia
              </h2>
              <div style={{ width: "60px", height: "1px", backgroundColor: "#c9a55c", marginBottom: "32px" }} />
              <p style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "16px",
                lineHeight: 1.8,
                color: "#666",
                marginBottom: "16px"
              }}>
                Situata sulla costa meridionale della Sicilia, Licata e una citta ricca di storia
                e tradizioni culinarie. Il suo porto peschereccio fornisce ogni giorno il pesce
                piu fresco.
              </p>
              <p style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "16px",
                lineHeight: 1.8,
                color: "#666",
                marginBottom: "32px"
              }}>
                Visitare L&apos;Oste e il Sacrestano significa scoprire l&apos;autenticita di un territorio
                unico, dove mare e terra si incontrano per creare sapori indimenticabili.
              </p>
              <Link href="/licata" className="btn-outline" style={{ fontFamily: "Montserrat, sans-serif" }}>
                Scopri Licata
              </Link>
            </div>
          </div>

          {/* Immagine */}
          <div className="mobile-split-image" style={{ position: "relative", minHeight: "400px", order: 2 }}>
            <Image
              src="/images/004.jpg"
              alt="Licata"
              fill
              style={{ objectFit: "cover" }}
             quality={95}  sizes="100vw" />
          </div>
        </div>
      </section>

      {/* PARALLAX PRE-PRENOTAZIONI */}
      <section className="mobile-parallax" style={{
        position: "relative",
        height: "500px",
        backgroundImage: "url(/images/parallax-quote.jpg)",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundSize: "cover"
      }} />

      {/* CTA PRENOTAZIONE */}
      <section className="mobile-section-dark" style={{
        padding: "120px 24px",
        backgroundColor: "#1a1a1a",
        textAlign: "center"
      }}>
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <p style={{
            fontFamily: "Montserrat, sans-serif",
            color: "#c9a55c",
            fontSize: "14px",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            marginBottom: "24px"
          }}>
            Prenotazioni
          </p>
          <h2 style={{
            fontFamily: "Cormorant Garamond, serif",
            fontSize: "clamp(32px, 5vw, 56px)",
            fontWeight: 400,
            color: "white",
            marginBottom: "24px"
          }}>
            Vivi l&apos;Esperienza
          </h2>
          <div style={{ width: "60px", height: "1px", backgroundColor: "#c9a55c", margin: "0 auto 32px" }} />
          <p style={{
            fontFamily: "Montserrat, sans-serif",
            fontSize: "16px",
            lineHeight: 1.8,
            color: "#999",
            marginBottom: "40px"
          }}>
            Prenota il tuo tavolo e lasciati trasportare in un viaggio sensoriale
            attraverso i sapori autentici della Sicilia. Chiara e Peppe vi aspettano.
          </p>
          <div className="mobile-cta-group" style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/prenota" className="btn-primary" style={{ fontFamily: "Montserrat, sans-serif" }}>
              Prenota Online
            </Link>
            <a
              href="tel:0922774736"
              className="btn-outline"
              style={{
                fontFamily: "Montserrat, sans-serif",
                borderColor: "white",
                color: "white"
              }}
            >
              Chiama: 0922 774736
            </a>
          </div>
          <div style={{ marginTop: "48px", color: "#666", fontFamily: "Montserrat, sans-serif", fontSize: "14px" }}>
            <p>Via Sant&apos;Andrea 19, 92027 Licata (AG)</p>
            <p style={{ marginTop: "8px" }}>Mar-Sab: 12:00-15:00 / 20:00-21:30 | Dom: 12:00-15:00</p>
          </div>
        </div>
      </section>

    </main>
  );
}

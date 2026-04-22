import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Licata, Sicilia | L'Oste e il Sacrestano",
  description: "Scopri Licata, perla della costa meridionale della Sicilia. Storia, cultura e tradizioni gastronomiche di una citta unica.",
};

export default function LicataPage() {
  return (
    <main>
      {/* HERO */}
      <section className="mobile-hero-80" style={{ position: "relative", height: "80vh", width: "100%" }}>
        <Image
          src="/images/licata-hero.png"
          alt="Licata, Sicilia"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
        <div style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0,0,0,0.4)"
        }} />
        <div style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          color: "white",
          padding: "24px"
        }}>
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
          <h1 style={{
            fontFamily: "Cormorant Garamond, serif",
            fontSize: "clamp(48px, 8vw, 90px)",
            fontWeight: 300,
            marginBottom: "16px"
          }}>
            Licata
          </h1>
        </div>
      </section>

      {/* INTRODUCTION */}
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
            Storia e Cultura
          </p>
          <h2 style={{
            fontFamily: "Cormorant Garamond, serif",
            fontSize: "clamp(32px, 5vw, 48px)",
            fontWeight: 400,
            color: "#1a1a1a",
            marginBottom: "24px"
          }}>
            Una Citta Millenaria
          </h2>
          <div style={{ width: "60px", height: "1px", backgroundColor: "#c9a55c", margin: "0 auto 40px" }} />
          <p style={{
            fontFamily: "Montserrat, sans-serif",
            fontSize: "16px",
            lineHeight: 1.8,
            color: "#666",
            marginBottom: "24px"
          }}>
            Licata, situata sulla costa meridionale della Sicilia in provincia di Agrigento, e una citta che vanta oltre tremila anni di storia. Fondata dai Greci con il nome di Phintias, e stata crocevia di civilta che hanno lasciato tracce indelebili nel suo patrimonio artistico e culturale.
          </p>
          <p style={{
            fontFamily: "Montserrat, sans-serif",
            fontSize: "16px",
            lineHeight: 1.8,
            color: "#666"
          }}>
            Oggi Licata e una vivace citta marinara, il cui porto peschereccio e uno dei piu importanti della Sicilia. Le sue spiagge dorate, il centro storico barocco e l&apos;enogastronomia d&apos;eccellenza la rendono una meta imperdibile per chi vuole scoprire la Sicilia piu autentica.
          </p>
        </div>
      </section>

      {/* IL MARE */}
      <section style={{ backgroundColor: "white" }}>
        <div className="mobile-split" style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          minHeight: "600px",
          maxWidth: "1400px",
          margin: "0 auto"
        }}>
          <div className="mobile-split-image" style={{ position: "relative", minHeight: "400px" }}>
            <Image src="/images/porto-peschereccio.png" alt="Il porto peschereccio di Licata" fill style={{ objectFit: "cover" }} />
          </div>
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
                Il Mare
              </p>
              <h2 style={{
                fontFamily: "Cormorant Garamond, serif",
                fontSize: "clamp(28px, 4vw, 40px)",
                fontWeight: 400,
                color: "#1a1a1a",
                marginBottom: "24px"
              }}>
                Un Porto Peschereccio d&apos;Eccellenza
              </h2>
              <div style={{ width: "60px", height: "1px", backgroundColor: "#c9a55c", marginBottom: "32px" }} />
              <p style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "16px",
                lineHeight: 1.8,
                color: "#666"
              }}>
                Il porto di Licata e uno dei piu attivi della Sicilia per la pesca. Ogni mattina, le barche rientrano cariche di gamberi rossi, triglie, seppie, calamari e il pregiato pesce azzurro del Mediterraneo. Questa ricchezza ittica e il cuore pulsante della tradizione gastronomica locale e la fonte d&apos;ispirazione quotidiana per la cucina de L&apos;Oste e il Sacrestano.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LA TERRA */}
      <section style={{ backgroundColor: "white" }}>
        <div className="mobile-split" style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          minHeight: "600px",
          maxWidth: "1400px",
          margin: "0 auto"
        }}>
          <div className="mobile-split-text" style={{ display: "flex", alignItems: "center", padding: "60px", order: 1 }}>
            <div style={{ maxWidth: "500px" }}>
              <p style={{
                fontFamily: "Montserrat, sans-serif",
                color: "#c9a55c",
                fontSize: "14px",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                marginBottom: "16px"
              }}>
                La Terra
              </p>
              <h2 style={{
                fontFamily: "Cormorant Garamond, serif",
                fontSize: "clamp(28px, 4vw, 40px)",
                fontWeight: 400,
                color: "#1a1a1a",
                marginBottom: "24px"
              }}>
                Campagne Rigogliose
              </h2>
              <div style={{ width: "60px", height: "1px", backgroundColor: "#c9a55c", marginBottom: "32px" }} />
              <p style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "16px",
                lineHeight: 1.8,
                color: "#666"
              }}>
                L&apos;entroterra licatese e un mosaico di uliveti, vigneti e orti che producono verdure di straordinaria qualita. Pomodori, melanzane, peperoni, carciofi e le erbe aromatiche della macchia mediterranea crescono rigogliosi sotto il sole siciliano, regalando sapori intensi e autentici che ritroviamo nei piatti dello Chef Peppe.
              </p>
            </div>
          </div>
          <div className="mobile-split-image" style={{ position: "relative", minHeight: "400px", order: 2 }}>
            <Image src="/images/vineyard-rows.png" alt="Vigneti e campagna siciliana" fill style={{ objectFit: "cover" }} />
          </div>
        </div>
      </section>

      {/* COSA VEDERE */}
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
              Da Visitare
            </p>
            <h2 style={{
              fontFamily: "Cormorant Garamond, serif",
              fontSize: "clamp(32px, 5vw, 48px)",
              fontWeight: 400,
              color: "#1a1a1a"
            }}>
              Cosa Vedere a Licata
            </h2>
          </div>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "32px"
          }}>
            <div style={{ backgroundColor: "white", overflow: "hidden" }}>
              <div style={{ position: "relative", width: "100%", aspectRatio: "16/9" }}>
                <Image src="/images/centro-storico.png" alt="Il Centro Storico di Licata" fill style={{ objectFit: "cover" }} />
              </div>
              <div style={{ padding: "40px" }}>
                <h4 style={{
                  fontFamily: "Cormorant Garamond, serif",
                  fontSize: "22px",
                  fontWeight: 400,
                  color: "#1a1a1a",
                  marginBottom: "16px"
                }}>
                  Il Centro Storico
                </h4>
                <p style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "15px",
                  lineHeight: 1.7,
                  color: "#666"
                }}>
                  Passeggia tra i vicoli del centro storico barocco, ammirando palazzi nobiliari, chiese settecentesche e la splendida Piazza Progresso.
                </p>
              </div>
            </div>
            <div style={{ backgroundColor: "white", overflow: "hidden" }}>
              <div style={{ position: "relative", width: "100%", aspectRatio: "16/9" }}>
                <Image src="/images/castel-sant-angelo.png" alt="Castel Sant'Angelo" fill style={{ objectFit: "cover", filter: "brightness(1.25) contrast(1.05)" }} />
              </div>
              <div style={{ padding: "40px" }}>
                <h4 style={{
                  fontFamily: "Cormorant Garamond, serif",
                  fontSize: "22px",
                  fontWeight: 400,
                  color: "#1a1a1a",
                  marginBottom: "16px"
                }}>
                  Castel Sant&apos;Angelo
                </h4>
                <p style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "15px",
                  lineHeight: 1.7,
                  color: "#666"
                }}>
                  La fortezza cinquecentesca domina la citta dalla collina, offrendo una vista panoramica mozzafiato sul mare e sull&apos;entroterra.
                </p>
              </div>
            </div>
            <div style={{ backgroundColor: "white", overflow: "hidden" }}>
              <div style={{ position: "relative", width: "100%", aspectRatio: "16/9" }}>
                <Image src="/images/spiagge.png" alt="Le Spiagge di Licata" fill style={{ objectFit: "cover" }} />
              </div>
              <div style={{ padding: "40px" }}>
                <h4 style={{
                  fontFamily: "Cormorant Garamond, serif",
                  fontSize: "22px",
                  fontWeight: 400,
                  color: "#1a1a1a",
                  marginBottom: "16px"
                }}>
                  Le Spiagge
                </h4>
                <p style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "15px",
                  lineHeight: 1.7,
                  color: "#666"
                }}>
                  Dalla spiaggia della Playa alla Baia di Mollarella, chilometri di costa sabbiosa e acque cristalline ti attendono.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DOVE SIAMO */}
      <section className="mobile-section-dark" style={{ padding: "120px 24px", backgroundColor: "#1a1a1a", textAlign: "center" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <p style={{
            fontFamily: "Montserrat, sans-serif",
            color: "#c9a55c",
            fontSize: "14px",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            marginBottom: "16px"
          }}>
            Dove Siamo
          </p>
          <h2 style={{
            fontFamily: "Cormorant Garamond, serif",
            fontSize: "clamp(32px, 5vw, 48px)",
            fontWeight: 400,
            color: "white",
            marginBottom: "24px"
          }}>
            Vieni a Trovarci
          </h2>
          <div style={{ width: "60px", height: "1px", backgroundColor: "#c9a55c", margin: "0 auto 40px" }} />
          <p style={{
            fontFamily: "Montserrat, sans-serif",
            fontSize: "16px",
            lineHeight: 1.8,
            color: "#999",
            marginBottom: "32px"
          }}>
            L&apos;Oste e il Sacrestano si trova nel cuore del centro storico di Licata, in Via Sant&apos;Andrea 19. Una location intima e accogliente dove vivere un&apos;esperienza gastronomica indimenticabile.
          </p>
          <div style={{
            fontFamily: "Montserrat, sans-serif",
            fontSize: "15px",
            lineHeight: 2,
            color: "#888"
          }}>
            <p>Via Sant&apos;Andrea 19, 92027 Licata (AG)</p>
            <p>Tel: 0922 774736</p>
            <p>Email: osteriabonsignore@gmail.com</p>
          </div>
          <div style={{ marginTop: "48px" }}>
            <Link href="/prenota" className="btn-primary" style={{ fontFamily: "Montserrat, sans-serif" }}>
              Prenota un Tavolo
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

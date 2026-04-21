import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import MostraGallery from "@/components/MostraGallery";

export const metadata: Metadata = {
  title: "Menu e Galleria | L'Oste e il Sacrestano",
  description: "Scopri i piatti dello Chef Peppe Bonsignore. Cucina di mercato a base di pesce fresco e verdure del territorio siciliano.",
};

export default function MenuPage() {
  const mostra = [
    { src: "/images/mostra-new-1.png", alt: "Spaghetti verdi con bottarga" },
    { src: "/images/mostra-new-2.png", alt: "Polpo glassato al vino" },
    { src: "/images/mostra-new-3.png", alt: "Pesce con ragu di pomodoro" },
    { src: "/images/mostra-new-4.png", alt: "Arancino su salsa verde" },
    { src: "/images/mostra-nuova-2.png", alt: "Branzino con asparagi e carciofo" },
    { src: "/images/mostra-nuova-1.png", alt: "Vegetale al forno con crema" },
    { src: "/images/mostra-nuova-3.png", alt: "Vellutata con olio e erbe" },
    { src: "/images/mostra-tmp43obdanf.png", alt: "Polpo e gambero" },
    { src: "/images/mostra-tmp863gusaj.png", alt: "Polpo e gambero su piatto" },
    { src: "/images/mostra-tmp8fpdym0l.png", alt: "Polpo con piselli" },
    { src: "/images/mostra-tmpdh_1js3q.png", alt: "Polpo dorato" },
    { src: "/images/mostra-tmpivo3owmv.png", alt: "Polpo su piatto nero" },
    { src: "/images/mostra-tmp0z_9c5op.png", alt: "Spaghetti con pomodori" },
    { src: "/images/mostra-tmp3o0ihd9j.png", alt: "Tonno con rosmarino" },
    { src: "/images/mostra-tmprohptsa5.png", alt: "Tonno rosolato" },
    { src: "/images/mostra-tmpctja64ge.png", alt: "Pesce con verdure" },
    { src: "/images/mostra-tmpdgzzn5fp.png", alt: "Pesce al forno" },
    { src: "/images/mostra-tmpf_plour4.png", alt: "Pesce con patate" },
    { src: "/images/mostra-tmplcf48hh8.png", alt: "Baccala in brodo" },
    { src: "/images/mostra-tmpib6wys_9.png", alt: "Frittura in brodo" },
    { src: "/images/mostra-tmp6qgph5hp.png", alt: "Cannolo dall'alto" },
    { src: "/images/mostra-tmp8va8f0ml.png", alt: "Cannolo con cacao" },
    { src: "/images/mostra-tmpsym7fyu9.png", alt: "Cannolo con frutta" },
  ];

  return (
    <main>
      {/* HERO */}
      <div style={{ position: "relative" }}>
      <section style={{ position: "sticky", top: 0, height: "80vh", width: "100%", zIndex: 0 }}>
        <Image
          src="/images/hero.png"
          alt="I piatti dello chef"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
        <div style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0,0,0,0.5)"
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
            I Nostri Piatti
          </p>
          <h1 style={{
            fontFamily: "Cormorant Garamond, serif",
            fontSize: "clamp(40px, 7vw, 80px)",
            fontWeight: 300
          }}>
            Menu e Galleria
          </h1>
        </div>
      </section>

      {/* MENU */}
      <section style={{ padding: "120px 24px", backgroundColor: "#fafafa", position: "relative", zIndex: 1 }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
          <p style={{
            fontFamily: "Montserrat, sans-serif",
            color: "#c9a55c",
            fontSize: "12px",
            letterSpacing: "0.4em",
            textTransform: "uppercase",
            marginBottom: "16px"
          }}>
            Il Menu
          </p>
          <h2 style={{
            fontFamily: "Cormorant Garamond, serif",
            fontSize: "clamp(32px, 5vw, 48px)",
            fontWeight: 400,
            color: "#1a1a1a",
            marginBottom: "16px"
          }}>
            Discorsi tra contadini e pescatori
          </h2>
          <div style={{ width: "60px", height: "1px", backgroundColor: "#c9a55c", margin: "0 auto 40px" }} />
          <p style={{
            fontFamily: "Cormorant Garamond, serif",
            fontStyle: "italic",
            fontSize: "19px",
            lineHeight: 1.9,
            color: "#555",
            marginBottom: "64px"
          }}>
            Il nostro viaggio: un cammino costante fatto di ricette, racconti, ingredienti, il giro per la nostra terra, seguendo stagioni e materie prime raccolte da mani sapienti che ci portano alla luce come sempre nuove. Il rispetto per ogni ingrediente ci spinge a valorizzarlo in ogni sua sfaccettatura. Il nostro menu fuori dal canoni raccontra storie e contaminazioni di un territorio fatto di mare e campagna.
          </p>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "32px",
            marginBottom: "48px"
          }}>
            <div style={{
              padding: "40px 24px",
              border: "1px solid #e0d5bf",
              backgroundColor: "white"
            }}>
              <p style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "11px",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "#c9a55c",
                marginBottom: "16px"
              }}>
                Percorso
              </p>
              <h3 style={{
                fontFamily: "Cormorant Garamond, serif",
                fontSize: "36px",
                fontWeight: 400,
                color: "#1a1a1a",
                marginBottom: "12px"
              }}>
                6 Portate
              </h3>
              <p style={{
                fontFamily: "Cormorant Garamond, serif",
                fontSize: "32px",
                fontWeight: 300,
                color: "#c9a55c"
              }}>
                € 89,00
              </p>
            </div>

            <div style={{
              padding: "40px 24px",
              border: "1px solid #e0d5bf",
              backgroundColor: "white"
            }}>
              <p style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "11px",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "#c9a55c",
                marginBottom: "16px"
              }}>
                Percorso
              </p>
              <h3 style={{
                fontFamily: "Cormorant Garamond, serif",
                fontSize: "36px",
                fontWeight: 400,
                color: "#1a1a1a",
                marginBottom: "12px"
              }}>
                4 Portate
              </h3>
              <p style={{
                fontFamily: "Cormorant Garamond, serif",
                fontSize: "32px",
                fontWeight: 300,
                color: "#c9a55c"
              }}>
                € 77,00
              </p>
            </div>
          </div>

          <p style={{
            fontFamily: "Montserrat, sans-serif",
            fontSize: "13px",
            color: "#999",
            letterSpacing: "0.1em"
          }}>
            Coperto € 4 &nbsp;·&nbsp; Acqua € 4 &nbsp;·&nbsp; Caffe € 3
          </p>
        </div>
      </section>
      </div>

      {/* PARALLAX TRA MENU E GALLERIA */}
      <section style={{
        position: "relative",
        height: "500px",
        backgroundImage: "url(/images/mostra-tmpzg8eq5a3.png)",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundSize: "cover"
      }} />

      {/* MOSTRA ARTISTICA */}
      <section style={{ padding: "60px 24px 120px", backgroundColor: "#fafafa" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <MostraGallery items={mostra} />
        </div>
      </section>

      {/* MENU INFO */}
      <section style={{ padding: "100px 24px", backgroundColor: "white" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "48px"
          }}>
            <div style={{ textAlign: "center" }}>
              <div style={{
                width: "64px",
                height: "64px",
                margin: "0 auto 24px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid #c9a55c",
                borderRadius: "50%"
              }}>
                <svg style={{ width: "32px", height: "32px", color: "#c9a55c" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 style={{
                fontFamily: "Cormorant Garamond, serif",
                fontSize: "24px",
                fontWeight: 400,
                color: "#1a1a1a",
                marginBottom: "16px"
              }}>
                Cucina di Mercato
              </h3>
              <p style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "15px",
                lineHeight: 1.7,
                color: "#666"
              }}>
                Il menu cambia ogni giorno in base ai prodotti freschi disponibili al mercato di Licata.
              </p>
            </div>

            <div style={{ textAlign: "center" }}>
              <div style={{
                width: "64px",
                height: "64px",
                margin: "0 auto 24px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid #c9a55c",
                borderRadius: "50%"
              }}>
                <svg style={{ width: "32px", height: "32px", color: "#c9a55c" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 style={{
                fontFamily: "Cormorant Garamond, serif",
                fontSize: "24px",
                fontWeight: 400,
                color: "#1a1a1a",
                marginBottom: "16px"
              }}>
                Pesce e Verdure
              </h3>
              <p style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "15px",
                lineHeight: 1.7,
                color: "#666"
              }}>
                Protagonisti della nostra cucina sono il pesce fresco e le verdure del territorio siciliano.
              </p>
            </div>

            <div style={{ textAlign: "center" }}>
              <div style={{
                width: "64px",
                height: "64px",
                margin: "0 auto 24px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid #c9a55c",
                borderRadius: "50%"
              }}>
                <svg style={{ width: "32px", height: "32px", color: "#c9a55c" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 style={{
                fontFamily: "Cormorant Garamond, serif",
                fontSize: "24px",
                fontWeight: 400,
                color: "#1a1a1a",
                marginBottom: "16px"
              }}>
                Menu Degustazione
              </h3>
              <p style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "15px",
                lineHeight: 1.7,
                color: "#666"
              }}>
                Affidatevi allo chef per un percorso degustazione che racconta la Sicilia attraverso i suoi sapori.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "100px 24px", backgroundColor: "#1a1a1a", textAlign: "center" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <h2 style={{
            fontFamily: "Cormorant Garamond, serif",
            fontSize: "clamp(32px, 5vw, 48px)",
            fontWeight: 400,
            color: "white",
            marginBottom: "24px"
          }}>
            Scopri il Menu del Giorno
          </h2>
          <p style={{
            fontFamily: "Montserrat, sans-serif",
            fontSize: "16px",
            lineHeight: 1.8,
            color: "#999",
            marginBottom: "40px"
          }}>
            Per conoscere le proposte del giorno, contattaci o vieni a trovarci. Saremo felici di raccontarti cosa ha ispirato lo chef oggi.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", justifyContent: "center" }}>
            <Link href="/prenota" className="btn-primary" style={{ fontFamily: "Montserrat, sans-serif" }}>
              Prenota un Tavolo
            </Link>
            <a
              href="tel:0922774736"
              style={{
                fontFamily: "Montserrat, sans-serif",
                padding: "14px 32px",
                border: "1px solid white",
                color: "white",
                textDecoration: "none",
                fontSize: "14px",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                transition: "all 0.3s"
              }}
            >
              Chiama: 0922 774736
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

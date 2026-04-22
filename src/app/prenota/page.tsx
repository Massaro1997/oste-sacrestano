"use client";

import { useState } from "react";
import Image from "next/image";

export default function PrenotaPage() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefono: "",
    data: "",
    orario: "",
    persone: "2",
    note: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const [submitError, setSubmitError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");
    try {
      const r = await fetch("/api/prenotazioni", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!r.ok) {
        const j = await r.json().catch(() => ({}));
        setSubmitError(j.error || "Errore invio");
        setIsSubmitting(false);
        return;
      }
      setIsSubmitting(false);
      setIsSubmitted(true);
    } catch {
      setSubmitError("Connessione non riuscita");
      setIsSubmitting(false);
    }
  };

  const inputStyle = {
    width: "100%",
    padding: "14px 16px",
    border: "1px solid #ddd",
    fontFamily: "Montserrat, sans-serif",
    fontSize: "16px",
    outline: "none",
    transition: "border-color 0.3s",
    backgroundColor: "white"
  };

  const labelStyle = {
    display: "block",
    fontFamily: "Montserrat, sans-serif",
    fontSize: "14px",
    color: "#666",
    marginBottom: "8px"
  };

  if (isSubmitted) {
    return (
      <main style={{ minHeight: "100vh", backgroundColor: "#fafafa", paddingTop: "140px", paddingBottom: "100px" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto", padding: "0 24px", textAlign: "center" }}>
          <div style={{
            width: "80px",
            height: "80px",
            margin: "0 auto 32px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#c9a55c",
            borderRadius: "50%"
          }}>
            <svg style={{ width: "40px", height: "40px", color: "white" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 style={{
            fontFamily: "Cormorant Garamond, serif",
            fontSize: "clamp(32px, 5vw, 48px)",
            fontWeight: 300,
            color: "#1a1a1a",
            marginBottom: "24px"
          }}>
            Richiesta Inviata
          </h1>
          <p style={{
            fontFamily: "Montserrat, sans-serif",
            fontSize: "16px",
            lineHeight: 1.8,
            color: "#666",
            marginBottom: "40px"
          }}>
            Grazie per la tua richiesta di prenotazione. Ti contatteremo al piu presto per confermare la disponibilita.
          </p>
          <a
            href="/"
            style={{
              fontFamily: "Montserrat, sans-serif",
              display: "inline-block",
              padding: "14px 32px",
              border: "1px solid #1a1a1a",
              color: "#1a1a1a",
              textDecoration: "none",
              fontSize: "14px",
              letterSpacing: "0.1em",
              textTransform: "uppercase"
            }}
          >
            Torna alla Home
          </a>
        </div>
      </main>
    );
  }

  return (
    <main>
      {/* HERO */}
      <section className="mobile-hero-80" style={{ position: "relative", height: "80vh", width: "100%" }}>
        <Image
          src="/images/hero-prenota.jpg"
          alt="Prenota un tavolo"
          fill
          style={{ objectFit: "cover" }}
          priority
         quality={100}  sizes="100vw" />
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
            Prenotazioni
          </p>
          <h1 style={{
            fontFamily: "Cormorant Garamond, serif",
            fontSize: "clamp(40px, 7vw, 72px)",
            fontWeight: 300
          }}>
            Prenota un Tavolo
          </h1>
        </div>
      </section>

      {/* FORM SECTION */}
      <section className="mobile-section" style={{ padding: "80px 24px", backgroundColor: "#fafafa" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div className="mobile-stack-2" style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "80px"
          }}>
            {/* FORM */}
            <div>
              <h2 style={{
                fontFamily: "Cormorant Garamond, serif",
                fontSize: "clamp(28px, 4vw, 40px)",
                fontWeight: 400,
                color: "#1a1a1a",
                marginBottom: "40px"
              }}>
                Richiedi una Prenotazione
              </h2>

              <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: "24px" }}>
                  <label htmlFor="nome" style={labelStyle}>Nome e Cognome *</label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    required
                    value={formData.nome}
                    onChange={handleChange}
                    style={inputStyle}
                  />
                </div>

                <div className="mobile-form-row" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px", marginBottom: "24px" }}>
                  <div>
                    <label htmlFor="email" style={labelStyle}>Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label htmlFor="telefono" style={labelStyle}>Telefono *</label>
                    <input
                      type="tel"
                      id="telefono"
                      name="telefono"
                      required
                      value={formData.telefono}
                      onChange={handleChange}
                      style={inputStyle}
                    />
                  </div>
                </div>

                <div className="mobile-form-row" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "24px", marginBottom: "24px" }}>
                  <div>
                    <label htmlFor="data" style={labelStyle}>Data *</label>
                    <input
                      type="date"
                      id="data"
                      name="data"
                      required
                      value={formData.data}
                      onChange={handleChange}
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label htmlFor="orario" style={labelStyle}>Orario *</label>
                    <select
                      id="orario"
                      name="orario"
                      required
                      value={formData.orario}
                      onChange={handleChange}
                      style={inputStyle}
                    >
                      <option value="">Seleziona</option>
                      <option value="12:00">12:00</option>
                      <option value="12:30">12:30</option>
                      <option value="13:00">13:00</option>
                      <option value="13:30">13:30</option>
                      <option value="20:00">20:00</option>
                      <option value="20:30">20:30</option>
                      <option value="21:00">21:00</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="persone" style={labelStyle}>Persone *</label>
                    <select
                      id="persone"
                      name="persone"
                      required
                      value={formData.persone}
                      onChange={handleChange}
                      style={inputStyle}
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                        <option key={num} value={num}>{num} {num === 1 ? "persona" : "persone"}</option>
                      ))}
                      <option value="9+">Piu di 8</option>
                    </select>
                  </div>
                </div>

                <div style={{ marginBottom: "32px" }}>
                  <label htmlFor="note" style={labelStyle}>Note (allergie, intolleranze, richieste speciali)</label>
                  <textarea
                    id="note"
                    name="note"
                    rows={4}
                    value={formData.note}
                    onChange={handleChange}
                    style={{
                      ...inputStyle,
                      resize: "none"
                    }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary"
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    opacity: isSubmitting ? 0.5 : 1,
                    cursor: isSubmitting ? "not-allowed" : "pointer"
                  }}
                >
                  {isSubmitting ? "Invio in corso..." : "Invia Richiesta"}
                </button>
              </form>
            </div>

            {/* INFO */}
            <div className="mobile-info-sidebar" style={{ paddingLeft: "40px" }}>
              <h2 style={{
                fontFamily: "Cormorant Garamond, serif",
                fontSize: "clamp(28px, 4vw, 40px)",
                fontWeight: 400,
                color: "#1a1a1a",
                marginBottom: "40px"
              }}>
                Informazioni
              </h2>

              <div style={{ marginBottom: "40px" }}>
                <h3 style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "16px",
                  fontWeight: 500,
                  color: "#c9a55c",
                  marginBottom: "16px"
                }}>
                  Orari di Apertura
                </h3>
                <div style={{ fontFamily: "Montserrat, sans-serif", fontSize: "15px", lineHeight: 1.8, color: "#666" }}>
                  <p>Martedi - Sabato: 12:00 - 15:00 / 20:00 - 21:30</p>
                  <p>Domenica: 12:00 - 15:00</p>
                  <p style={{ color: "#999" }}>Lunedi: Chiuso</p>
                </div>
              </div>

              <div style={{ marginBottom: "40px" }}>
                <h3 style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "16px",
                  fontWeight: 500,
                  color: "#c9a55c",
                  marginBottom: "16px"
                }}>
                  Contatti
                </h3>
                <div style={{ fontFamily: "Montserrat, sans-serif", fontSize: "15px", lineHeight: 1.8, color: "#666" }}>
                  <p>Tel: <a href="tel:0922774736" style={{ color: "#666", textDecoration: "none" }}>0922 774736</a></p>
                  <p>Email: <a href="mailto:osteriabonsignore@gmail.com" style={{ color: "#666", textDecoration: "none" }}>osteriabonsignore@gmail.com</a></p>
                </div>
              </div>

              <div style={{ marginBottom: "40px" }}>
                <h3 style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "16px",
                  fontWeight: 500,
                  color: "#c9a55c",
                  marginBottom: "16px"
                }}>
                  Indirizzo
                </h3>
                <p style={{ fontFamily: "Montserrat, sans-serif", fontSize: "15px", lineHeight: 1.8, color: "#666" }}>
                  Via Sant&apos;Andrea 19<br />
                  92027 Licata (AG)<br />
                  Sicilia, Italia
                </p>
              </div>

              <div style={{ paddingTop: "20px", borderTop: "1px solid #eee" }}>
                <h3 style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "16px",
                  fontWeight: 500,
                  color: "#c9a55c",
                  marginBottom: "16px"
                }}>
                  Note Importanti
                </h3>
                <ul style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "14px",
                  lineHeight: 2,
                  color: "#666",
                  listStyle: "none",
                  padding: 0
                }}>
                  <li>- La prenotazione sara confermata telefonicamente</li>
                  <li>- Per gruppi superiori a 8 persone, contattaci telefonicamente</li>
                  <li>- Segnala eventuali allergie o intolleranze nelle note</li>
                  <li>- In caso di ritardo, avvisaci telefonicamente</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

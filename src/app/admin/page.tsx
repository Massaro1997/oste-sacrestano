"use client";

import { useEffect, useState } from "react";

type Prenotazione = {
  id: string;
  nome: string;
  email: string;
  telefono: string;
  data: string;
  orario: string;
  persone: string;
  note: string;
  createdAt: string;
  stato: "pending" | "confermata" | "rifiutata";
};

export default function AdminPage() {
  const [authed, setAuthed] = useState(false);
  const [pin, setPin] = useState("");
  const [loginError, setLoginError] = useState("");
  const [items, setItems] = useState<Prenotazione[]>([]);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState<"all" | "pending" | "confermata" | "rifiutata">("all");

  const load = async () => {
    setLoading(true);
    const r = await fetch("/api/admin/prenotazioni");
    if (r.status === 401) {
      setAuthed(false);
      setLoading(false);
      return;
    }
    const j = await r.json();
    setItems(j.items || []);
    setAuthed(true);
    setLoading(false);
  };

  useEffect(() => {
    load();
  }, []);

  const login = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError("");
    const r = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ pin }),
    });
    if (r.ok) {
      setPin("");
      load();
    } else {
      setLoginError("PIN errato");
    }
  };

  const logout = async () => {
    await fetch("/api/admin/login", { method: "DELETE" });
    setAuthed(false);
    setItems([]);
  };

  const setStato = async (id: string, stato: Prenotazione["stato"]) => {
    await fetch("/api/admin/prenotazioni", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, stato }),
    });
    load();
  };

  const del = async (id: string) => {
    if (!confirm("Eliminare questa prenotazione?")) return;
    await fetch(`/api/admin/prenotazioni?id=${id}`, { method: "DELETE" });
    load();
  };

  if (!authed) {
    return (
      <main style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#1a1a1a",
        padding: "24px"
      }}>
        <form onSubmit={login} style={{
          backgroundColor: "white",
          padding: "48px 40px",
          width: "100%",
          maxWidth: "380px",
          textAlign: "center"
        }}>
          <p style={{
            fontFamily: "Montserrat, sans-serif",
            color: "#c9a55c",
            fontSize: "11px",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            marginBottom: "12px"
          }}>
            Area Riservata
          </p>
          <h1 style={{
            fontFamily: "Cormorant Garamond, serif",
            fontSize: "28px",
            fontWeight: 400,
            color: "#1a1a1a",
            marginBottom: "32px"
          }}>
            Accesso Dashboard
          </h1>
          <input
            type="password"
            inputMode="numeric"
            pattern="[0-9]*"
            autoFocus
            autoComplete="off"
            placeholder="PIN"
            value={pin}
            onChange={(e) => setPin(e.target.value.replace(/\D/g, ""))}
            style={{
              width: "100%",
              padding: "16px",
              fontSize: "20px",
              textAlign: "center",
              letterSpacing: "0.5em",
              border: "1px solid #ddd",
              outline: "none",
              marginBottom: "16px",
              fontFamily: "Montserrat, sans-serif"
            }}
          />
          {loginError && (
            <p style={{
              color: "#c81e4a",
              fontSize: "13px",
              marginBottom: "16px",
              fontFamily: "Montserrat, sans-serif"
            }}>
              {loginError}
            </p>
          )}
          <button
            type="submit"
            style={{
              width: "100%",
              padding: "14px",
              backgroundColor: "#1a1a1a",
              color: "white",
              border: "none",
              fontFamily: "Montserrat, sans-serif",
              fontSize: "14px",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              cursor: "pointer"
            }}
          >
            Accedi
          </button>
        </form>
      </main>
    );
  }

  const filtered = filter === "all" ? items : items.filter((x) => x.stato === filter);
  const counts = {
    all: items.length,
    pending: items.filter((x) => x.stato === "pending").length,
    confermata: items.filter((x) => x.stato === "confermata").length,
    rifiutata: items.filter((x) => x.stato === "rifiutata").length,
  };

  const statoColor = (s: string) =>
    s === "confermata" ? "#4caf50" : s === "rifiutata" ? "#c81e4a" : "#c9a55c";

  return (
    <main style={{ minHeight: "100vh", backgroundColor: "#f5f5f5", paddingBottom: "60px" }}>
      <header style={{
        backgroundColor: "#1a1a1a",
        color: "white",
        padding: "24px 32px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "16px"
      }}>
        <div>
          <p style={{
            fontFamily: "Montserrat, sans-serif",
            color: "#c9a55c",
            fontSize: "11px",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            marginBottom: "4px"
          }}>
            Dashboard
          </p>
          <h1 style={{
            fontFamily: "Cormorant Garamond, serif",
            fontSize: "26px",
            fontWeight: 400,
            margin: 0
          }}>
            Prenotazioni
          </h1>
        </div>
        <button
          onClick={logout}
          style={{
            backgroundColor: "transparent",
            color: "white",
            border: "1px solid rgba(255,255,255,0.3)",
            padding: "10px 20px",
            fontFamily: "Montserrat, sans-serif",
            fontSize: "13px",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            cursor: "pointer"
          }}
        >
          Esci
        </button>
      </header>

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "32px 24px" }}>
        <div style={{ display: "flex", gap: "12px", marginBottom: "24px", flexWrap: "wrap" }}>
          {(["all", "pending", "confermata", "rifiutata"] as const).map((k) => (
            <button
              key={k}
              onClick={() => setFilter(k)}
              style={{
                padding: "10px 18px",
                backgroundColor: filter === k ? "#1a1a1a" : "white",
                color: filter === k ? "white" : "#1a1a1a",
                border: "1px solid #ddd",
                fontFamily: "Montserrat, sans-serif",
                fontSize: "13px",
                cursor: "pointer",
                textTransform: "capitalize"
              }}
            >
              {k === "all" ? "Tutte" : k} ({counts[k]})
            </button>
          ))}
          <button
            onClick={load}
            style={{
              marginLeft: "auto",
              padding: "10px 18px",
              backgroundColor: "white",
              border: "1px solid #ddd",
              fontFamily: "Montserrat, sans-serif",
              fontSize: "13px",
              cursor: "pointer"
            }}
          >
            Aggiorna
          </button>
        </div>

        {loading && <p>Caricamento...</p>}

        {!loading && filtered.length === 0 && (
          <div style={{
            backgroundColor: "white",
            padding: "80px 24px",
            textAlign: "center",
            color: "#999",
            fontFamily: "Montserrat, sans-serif"
          }}>
            Nessuna prenotazione
          </div>
        )}

        <div style={{ display: "grid", gap: "16px" }}>
          {filtered.map((p) => (
            <div key={p.id} style={{
              backgroundColor: "white",
              padding: "24px",
              display: "grid",
              gridTemplateColumns: "1fr auto",
              gap: "16px",
              borderLeft: `4px solid ${statoColor(p.stato)}`
            }}>
              <div>
                <div style={{ display: "flex", gap: "12px", alignItems: "center", marginBottom: "12px", flexWrap: "wrap" }}>
                  <h3 style={{
                    fontFamily: "Cormorant Garamond, serif",
                    fontSize: "22px",
                    fontWeight: 500,
                    margin: 0,
                    color: "#1a1a1a"
                  }}>
                    {p.nome}
                  </h3>
                  <span style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "11px",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    padding: "4px 10px",
                    backgroundColor: statoColor(p.stato),
                    color: "white"
                  }}>
                    {p.stato}
                  </span>
                </div>
                <div style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                  gap: "8px 24px",
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "13px",
                  color: "#666"
                }}>
                  <div><strong style={{ color: "#1a1a1a" }}>Data:</strong> {p.data} {p.orario}</div>
                  <div><strong style={{ color: "#1a1a1a" }}>Persone:</strong> {p.persone}</div>
                  <div><strong style={{ color: "#1a1a1a" }}>Tel:</strong> <a href={`tel:${p.telefono}`} style={{ color: "#666" }}>{p.telefono}</a></div>
                  <div><strong style={{ color: "#1a1a1a" }}>Email:</strong> <a href={`mailto:${p.email}`} style={{ color: "#666" }}>{p.email}</a></div>
                </div>
                {p.note && (
                  <p style={{
                    marginTop: "12px",
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "13px",
                    color: "#666",
                    fontStyle: "italic"
                  }}>
                    &ldquo;{p.note}&rdquo;
                  </p>
                )}
                <p style={{
                  marginTop: "8px",
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "11px",
                  color: "#999"
                }}>
                  Ricevuta: {new Date(p.createdAt).toLocaleString("it-IT")}
                </p>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px", minWidth: "120px" }}>
                {p.stato !== "confermata" && (
                  <button
                    onClick={() => setStato(p.id, "confermata")}
                    style={{
                      padding: "8px 12px",
                      backgroundColor: "#4caf50",
                      color: "white",
                      border: "none",
                      fontFamily: "Montserrat, sans-serif",
                      fontSize: "12px",
                      cursor: "pointer",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em"
                    }}
                  >
                    Conferma
                  </button>
                )}
                {p.stato !== "rifiutata" && (
                  <button
                    onClick={() => setStato(p.id, "rifiutata")}
                    style={{
                      padding: "8px 12px",
                      backgroundColor: "#c81e4a",
                      color: "white",
                      border: "none",
                      fontFamily: "Montserrat, sans-serif",
                      fontSize: "12px",
                      cursor: "pointer",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em"
                    }}
                  >
                    Rifiuta
                  </button>
                )}
                {p.stato !== "pending" && (
                  <button
                    onClick={() => setStato(p.id, "pending")}
                    style={{
                      padding: "8px 12px",
                      backgroundColor: "white",
                      color: "#666",
                      border: "1px solid #ddd",
                      fontFamily: "Montserrat, sans-serif",
                      fontSize: "12px",
                      cursor: "pointer",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em"
                    }}
                  >
                    Riapri
                  </button>
                )}
                <button
                  onClick={() => del(p.id)}
                  style={{
                    padding: "8px 12px",
                    backgroundColor: "transparent",
                    color: "#999",
                    border: "1px solid #ddd",
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "12px",
                    cursor: "pointer",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em"
                  }}
                >
                  Elimina
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

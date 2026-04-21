import fs from "fs";
import path from "path";

export type Prenotazione = {
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

const DATA_DIR = path.join(process.cwd(), "data");
const FILE = path.join(DATA_DIR, "prenotazioni.json");

function ensure() {
  if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
  if (!fs.existsSync(FILE)) fs.writeFileSync(FILE, "[]", "utf-8");
}

export function listAll(): Prenotazione[] {
  ensure();
  const raw = fs.readFileSync(FILE, "utf-8");
  try {
    return JSON.parse(raw) as Prenotazione[];
  } catch {
    return [];
  }
}

export function add(p: Omit<Prenotazione, "id" | "createdAt" | "stato">): Prenotazione {
  ensure();
  const all = listAll();
  const entry: Prenotazione = {
    ...p,
    id: Date.now().toString(36) + Math.random().toString(36).slice(2, 8),
    createdAt: new Date().toISOString(),
    stato: "pending",
  };
  all.unshift(entry);
  fs.writeFileSync(FILE, JSON.stringify(all, null, 2), "utf-8");
  return entry;
}

export function updateStato(id: string, stato: Prenotazione["stato"]): boolean {
  ensure();
  const all = listAll();
  const idx = all.findIndex((x) => x.id === id);
  if (idx === -1) return false;
  all[idx].stato = stato;
  fs.writeFileSync(FILE, JSON.stringify(all, null, 2), "utf-8");
  return true;
}

export function remove(id: string): boolean {
  ensure();
  const all = listAll();
  const next = all.filter((x) => x.id !== id);
  if (next.length === all.length) return false;
  fs.writeFileSync(FILE, JSON.stringify(next, null, 2), "utf-8");
  return true;
}

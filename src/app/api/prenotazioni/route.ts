import { NextRequest, NextResponse } from "next/server";
import { add } from "@/lib/prenotazioni-store";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const required = ["nome", "email", "telefono", "data", "orario", "persone"];
    for (const k of required) {
      if (!body[k] || typeof body[k] !== "string") {
        return NextResponse.json({ error: `Campo mancante: ${k}` }, { status: 400 });
      }
    }
    const entry = add({
      nome: String(body.nome).slice(0, 200),
      email: String(body.email).slice(0, 200),
      telefono: String(body.telefono).slice(0, 50),
      data: String(body.data).slice(0, 20),
      orario: String(body.orario).slice(0, 20),
      persone: String(body.persone).slice(0, 10),
      note: String(body.note || "").slice(0, 1000),
    });
    return NextResponse.json({ ok: true, id: entry.id });
  } catch (e) {
    return NextResponse.json({ error: "Errore server" }, { status: 500 });
  }
}

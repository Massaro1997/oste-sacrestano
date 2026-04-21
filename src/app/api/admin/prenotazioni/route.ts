import { NextRequest, NextResponse } from "next/server";
import { listAll, updateStato, remove } from "@/lib/prenotazioni-store";
import { isAdmin } from "@/lib/admin-auth";

export async function GET() {
  if (!(await isAdmin())) return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  return NextResponse.json({ items: listAll() });
}

export async function PATCH(req: NextRequest) {
  if (!(await isAdmin())) return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  const body = await req.json().catch(() => ({}));
  const { id, stato } = body;
  if (!id || !["pending", "confermata", "rifiutata"].includes(stato)) {
    return NextResponse.json({ error: "bad request" }, { status: 400 });
  }
  const ok = updateStato(id, stato);
  return NextResponse.json({ ok });
}

export async function DELETE(req: NextRequest) {
  if (!(await isAdmin())) return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  if (!id) return NextResponse.json({ error: "bad request" }, { status: 400 });
  const ok = remove(id);
  return NextResponse.json({ ok });
}

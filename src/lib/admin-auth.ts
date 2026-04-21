import { cookies } from "next/headers";

const ADMIN_PIN = process.env.ADMIN_PIN || "194523";

export async function isAdmin(): Promise<boolean> {
  const store = await cookies();
  const c = store.get("admin-session");
  return c?.value === ADMIN_PIN;
}

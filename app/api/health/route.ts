import { NextResponse } from "next/server";

/** Use GET /api/health to confirm the server is running (curl or browser). */
export function GET() {
  return NextResponse.json({ ok: true, service: "claw-station" });
}

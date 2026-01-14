import { NextResponse } from "next/server";

export const POST = async (request: Request) => {
  const body = await request.json();
  // Minimal validation to simulate API behavior
  if (!body?.name || !body?.email || !body?.message) {
    return NextResponse.json({ ok: false, message: "Missing fields" }, { status: 400 });
  }

  return NextResponse.json({ ok: true, message: "Message received" });
};

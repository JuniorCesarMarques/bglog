// /app/api/cte/upload/route.ts
import { NextRequest, NextResponse } from "next/server";
import { parseStringPromise } from "xml2js";

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const file = formData.get("file") as File;

  if (!file) return NextResponse.json({ error: "Nenhum arquivo enviado" }, { status: 400 });

  const xml = await file.text();
  const json = await parseStringPromise(xml, { explicitArray: false });

  return NextResponse.json({ data: json });
}

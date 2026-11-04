import { readFile } from "fs/promises";
import path from "path";
import { NextResponse } from "next/server";
import { getPaidProducts } from "@/lib/payments";

export const dynamic = "force-dynamic";

// Notes live outside /public so nobody can download them without paying
const NOTES_DIR = path.join(process.cwd(), "private-notes");

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const sessionId = searchParams.get("session_id") || "";
  const productId = searchParams.get("product") || "";

  const order = sessionId ? await getPaidProducts(sessionId) : null;
  const product = order?.products.find((p) => p.id === productId);
  if (!product) return NextResponse.json({ error: "No paid order found for this download" }, { status: 403 });

  try {
    const file = await readFile(path.join(NOTES_DIR, path.basename(product.file)));
    return new NextResponse(file, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="NoBooks-${product.file}"`,
        "Cache-Control": "private, no-store",
      },
    });
  } catch {
    return NextResponse.json({ error: "File not found. Please contact us and we'll send it to you." }, { status: 404 });
  }
}

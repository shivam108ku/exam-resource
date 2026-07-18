import { NextRequest, NextResponse } from "next/server";
import path from "path";
import fs from "fs";
import { tokenStore } from "@/lib/tokenStore";

const PDF_PATH = path.join(process.cwd(), "private", "Computer-Practice-Set-All-Exams-Final.pdf");

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const token = searchParams.get("token");

  if (!token) {
    return NextResponse.json({ error: "No token provided" }, { status: 400 });
  }

  const entry = tokenStore.get(token);

  if (!entry) {
    return new NextResponse("Invalid or expired download link.", { status: 403 });
  }

  if (entry.used) {
    return new NextResponse(
      "This download link has already been used. Each link is valid for one download only.",
      { status: 403 }
    );
  }

  if (Date.now() > entry.expiresAt) {
    tokenStore.delete(token);
    return new NextResponse("Download link has expired (valid for 24 hours).", { status: 403 });
  }

  if (!fs.existsSync(PDF_PATH)) {
    console.error("PDF not found at:", PDF_PATH);
    return new NextResponse("PDF file not found. Contact support.", { status: 404 });
  }

  // Mark token as used
  entry.used = true;
  tokenStore.set(token, entry);

  // Stream the PDF
  const fileBuffer = fs.readFileSync(PDF_PATH);

  return new NextResponse(fileBuffer, {
    status: 200,
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment; filename="DSSSB-TGT-CS-PYQ-SarkariResource.pdf"',
      "Content-Length": fileBuffer.length.toString(),
      "Cache-Control": "no-store",
    },
  });
}

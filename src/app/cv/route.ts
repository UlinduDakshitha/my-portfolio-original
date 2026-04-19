import { readFile } from "node:fs/promises";
import path from "node:path";

export async function GET() {
  const fileName = "Ulindu_Dakshitha_CV.pdf";
  const filePath = path.join(process.cwd(), "public", fileName);

  try {
    const fileBuffer = await readFile(filePath);

    return new Response(fileBuffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${fileName}"`,
        "Cache-Control": "public, max-age=3600",
      },
    });
  } catch {
    return new Response("CV file not found", { status: 404 });
  }
}

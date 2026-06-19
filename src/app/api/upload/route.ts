import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(req: NextRequest) {
  try {
    const data = await req.formData();

    const file = data.get("file") as File;

    if (!file) {
      return NextResponse.json(
        { message: "No file uploaded" },
        { status: 400 }
      );
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const fileName =
      Date.now() + "-" + file.name.replaceAll(" ", "-");

    const uploadDir = path.join(
      process.cwd(),
      "public/uploads/services"
    );

    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    const filePath = path.join(
      uploadDir,
      fileName
    );

    fs.writeFileSync(filePath, buffer);

    return NextResponse.json({
      success: true,
      image: `/uploads/services/${fileName}`,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { message: "Upload failed" },
      { status: 500 }
    );
  }
}
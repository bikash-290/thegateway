import { NextRequest, NextResponse } from "next/server";
import db from "@/lib/db";

export async function GET() {
  const [rows] = await db.query(`
    SELECT *
    FROM services
    ORDER BY id DESC
  `);

  return NextResponse.json(rows);
}

export async function POST(
  req: NextRequest
) {
  const body = await req.json();

  const {
    category_id,
    title,
    description,
    image,
    price,
    status,
  } = body;

  await db.query(
    `
    INSERT INTO services
    (
      category_id,
      title,
      description,
      image,
      price,
      status
    )
    VALUES (?, ?, ?, ?, ?, ?)
    `,
    [
      category_id,
      title,
      description,
      image,
      price,
      status,
    ]
  );

  return NextResponse.json({
    success: true,
  });
}
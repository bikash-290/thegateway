import { NextRequest, NextResponse } from "next/server";
import db from "@/lib/db";

export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } =
    await params;

  const body = await req.json();

  await db.query(
    `
    UPDATE services
    SET
      category_id=?,
      title=?,
      description=?,
      image=?,
      price=?,
      status=?
    WHERE id=?
    `,
    [
      body.category_id,
      body.title,
      body.description,
      body.image,
      body.price,
      body.status,
      id,
    ]
  );

  return NextResponse.json({
    success: true,
  });
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } =
    await params;

  await db.query(
    "DELETE FROM services WHERE id=?",
    [id]
  );

  return NextResponse.json({
    success: true,
  });
}
export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } =
    await params;

  const [rows]: any =
    await db.query(
      `
      SELECT *
      FROM services
      WHERE id = ?
      `,
      [id]
    );

  return NextResponse.json(
    rows[0]
  );
}
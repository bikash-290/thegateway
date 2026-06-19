import { NextResponse } from "next/server";
import db from "@/lib/db";

export async function GET() {
  try {
    const [rows] = await db.query(
      `
      SELECT
        id,
        category_name
      FROM categories
      ORDER BY category_name
      `
    );

    return NextResponse.json(rows);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { message: "Failed to fetch categories" },
      { status: 500 }
    );
  }
}
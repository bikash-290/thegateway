import pool from "@/lib/db";

export async function GET() {
  try {
    const [rows] = await pool.query("SELECT 1 AS status");

    return Response.json({
      success: true,
      data: rows,
    });
  } catch (error) {
    return Response.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Database Error",
      },
      { status: 500 }
    );
  }
}
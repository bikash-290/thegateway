import pool from "@/lib/db";

export async function GET() {
  try {
    const [rows] = await pool.query("SELECT * FROM contacts");

    return Response.json({
      success: true,
      data: rows,
    });
  } catch (error) {
    return Response.json(
      {
        success: false,
        message: "Failed to fetch contacts",
      },
      { status: 500 }
    );
  }
}
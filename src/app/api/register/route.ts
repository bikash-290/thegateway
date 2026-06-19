import pool from "@/lib/db";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
  const body = await req.json();

  const { full_name, email, password } = body;

  const hashedPassword =
    await bcrypt.hash(password, 10);

  await pool.query(
    `
    INSERT INTO users
    (full_name,email,password)
    VALUES (?,?,?)
    `,
    [
      full_name,
      email,
      hashedPassword,
    ]
  );

  return Response.json({
    success: true,
  });
}
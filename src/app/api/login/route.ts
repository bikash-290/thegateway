import pool from "@/lib/db";
import bcrypt from "bcryptjs";
import { generateToken } from "@/lib/auth";

export async function POST(req: Request) {
  const body = await req.json();

  const { email, password } = body;

  const [rows]: any = await pool.query(
    "SELECT * FROM users WHERE email=?",
    [email]
  );

  if (rows.length === 0) {
    return Response.json(
      { message: "User not found" },
      { status: 404 }
    );
  }

  const user = rows[0];

  const valid =
    await bcrypt.compare(
      password,
      user.password
    );

  if (!valid) {
    return Response.json(
      { message: "Invalid password" },
      { status: 401 }
    );
  }

  const token = generateToken({
    id: user.id,
    role: user.role,
  });

  return Response.json({
    success: true,
    token,
    user,
  });
}
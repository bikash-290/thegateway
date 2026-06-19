import jwt from "jsonwebtoken";

const JWT_SECRET =
  process.env.JWT_SECRET || "9957f8eb0e2f7a66148267b50ec4a2e9";

export function generateToken(payload: any) {
  return jwt.sign(payload, JWT_SECRET, {
    expiresIn: "7d",
  });
}

export function verifyToken(token: string) {
  return jwt.verify(token, JWT_SECRET);
}
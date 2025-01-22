import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret";

export const middleware = (req: NextRequest): NextResponse | undefined => {
  const token = req.headers.get("Authorization")?.split(" ")[1]; // Bearer token
  if (!token) {
    return NextResponse.json({ error: "Unauthorized access" }, { status: 401 });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.headers.set("user", JSON.stringify(decoded));
  } catch (error) {
    return NextResponse.json({ error: "Invalid token" }, { status: 401 });
  }
};

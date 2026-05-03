import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";


export async function POST(req) {
  try {
    const { email, password } = await req.json();

    const client = await clientPromise;
    const db = client.db("softshackle");

    const user = await db.collection("admins").findOne({ email });

    if (!user) {
      return NextResponse.json(
        { error: "Invalid email or password" },
        { status: 401 }
      );
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return NextResponse.json(
        { error: "Invalid email or password" },
        { status: 401 }
      );
    }

    //create JWT token
    const token = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

     // ✅ Set cookie
    const response = NextResponse.json({ success: true });

    response.cookies.set("token", token, {
        httpOnly: true,
        secure: false, // true in production (HTTPS)
        sameSite: "strict",
        path: "/",
        maxAge: 60 * 60 * 24, // 1 day
        });

    return response

} catch (err) {
    console.error("Login Error:", err);
    return NextResponse.json(
        { error: "Internal server error" }, 
        { status: 500 }
    );
}
}

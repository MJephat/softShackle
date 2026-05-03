import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";


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

    return NextResponse.json({ 
        success: true, 
        admin: { email: user.email } 
    });
} catch (err) {
    console.error("Login Error:", err);
    return NextResponse.json(
        { error: "Internal server error" }, 
        { status: 500 }
    );
}
}

import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(req) {
  try {
    const { username,email, password } = await req.json();

    if(!email || !password) {
        return NextResponse.json(
            { error: "Email and password are required" }, 
            { status: 400 }
        );
    }

    const client = await clientPromise;
    const db = client.db("softshackle");

    const existing = await db.collection("admins").findOne({ email });

    if (existing) {
      return NextResponse.json(
        { error: "Admin with this email already exists" },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await db.collection("admins").insertOne({
        username, 
        email, 
        password: hashedPassword,
        createdAt: new Date(),
    });

    return NextResponse.json({ success: true });

} catch (err) {
    console.error("Registration Error:", err);
    return NextResponse.json(
        { error: "Internal server error" }, 
        { status: 500 }
    );
  }
}
  
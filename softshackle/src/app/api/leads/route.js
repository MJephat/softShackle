import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

// TODO: Replace with real DB (Prisma / Supabase)
// import { prisma } from "@/lib/prisma";

export async function POST(req) {
  try {
    const body = await req.json();
    
    const client = await clientPromise;
    const db = client.db("softshackle");

    await db.collection("leads").insertOne({
      name: "unKnown Customer",
      phone: body.phone,
      service: body.service,
      urgency: body.urgency,
      type: body.type, // whatsapp, call, form
      status: "new",
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({ success: true });
      } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}


export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("softshackle");

    const leads = await db
      .collection("leads")
      .find({})
      .sort({ timestamp: -1 })
      .toArray();

    return NextResponse.json({ leads });
  } catch (err) {
    return NextResponse.json({ leads: [] });
  }
}

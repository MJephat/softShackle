import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";



export async function POST(req) {
  try {
    const body = await req.json();
    
    if (!body.phone) {
      return NextResponse.json(
        { error: "Phone is required" },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db("softshackle");

    const newLead = {
      name: body.name || "Unknown Customer",
      phone: body.phone,
      service: body.service || null,
      urgency: body.urgency || "normal",
      type: body.type || "unknown",
      status: "new",
      createdAt: new Date(),
    };

    await db.collection("leads").insertOne(newLead);

    return NextResponse.json({ success: true, lead: newLead });
      } catch (err) {
    console.error("Lead Error:", err);
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
      .sort({ createdAt: -1 })
      .toArray();

    return NextResponse.json({ leads });
  } catch (err) {
    console.error("Get Leads Error:", err);
    return NextResponse.json({ leads: [], error: "Failed to fetch leads" }, 
      { status: 500 });
  }
}

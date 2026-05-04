import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

export async function POST(req) {
  try {
    const { leadId, phone, name } = await req.json();

    if (!leadId || !phone) {
      return NextResponse.json({ error: "Missing leadId or phone" }, { status: 400 });
    }

    const reviewLink = `${process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:3000"}/rate?leadId=${leadId}`;

    // Option A: Return the WhatsApp deep link (no API cost)
    const waText  = encodeURIComponent(
      `Hi ${name ?? "there"}, thanks for using our service! Please rate your experience: ${reviewLink}`
    );
    const waUrl   = `https://wa.me/${phone.replace(/\D/g, "")}?text=${waText}`;

    // Option B (Phase 2): Send via Africa's Talking SMS
    // const AT = require("africastalking")({ apiKey: process.env.AT_API_KEY, username: process.env.AT_USERNAME });
    // await AT.SMS.send({ to: [phone], message: `Rate us: ${reviewLink}`, from: "BizTrack" });

    return NextResponse.json({ success: true, waUrl, reviewLink });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    const { leadId, rating } = await req.json();

    const client = await clientPromise;
    const db = client.db("softshackle");

    await db.collection("leads").updateOne(
      { _id: new ObjectId(leadId) },
      {
        $set: {
          rating,
          reviewedAt: new Date(),
        },
      }
    );

    return NextResponse.json({ success: true });

  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed" }, { status: 500 });
  }
}
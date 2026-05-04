import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

export async function POST(req) {
  try {
    const { leadId, rating } = await req.json();

    if (!leadId || !rating) {
      return NextResponse.json(
        { error: "Missing leadId or rating" },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db("softshackle");

    const result = await db.collection("leads").updateOne(
      { _id: new ObjectId(leadId) },
      {
        $set: {
          rating,
          reviewedAt: new Date(),
        },
      }
    );

    if (result.matchedCount === 0) {
      return NextResponse.json(
        { error: "Lead not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true });

  } catch (err) {
    console.error("REVIEW ERROR:", err);
    return NextResponse.json(
      { error: "Failed to save review" },
      { status: 500 }
    );
  }
}
import { NextResponse } from "next/server";

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
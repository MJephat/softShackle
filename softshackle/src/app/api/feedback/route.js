// import { NextResponse } from "next/server";

// export async function POST(req) {
//   try {
//     const { leadId, rating, feedback } = await req.json();

//     if (!leadId || !rating) {
//       return NextResponse.json({ error: "Missing leadId or rating" }, { status: 400 });
//     }

//     // Prisma example:
//     // await prisma.review.create({ data: { leadId, rating, feedback } });
//     // await prisma.lead.update({ where: { id: leadId }, data: { status: "reviewed", rating } });

//     // If rating >= 4, front-end already redirected to Google.
//     // This route saves low-rating private feedback.

//     console.log("Feedback saved:", { leadId, rating, feedback });

//     return NextResponse.json({ success: true });
//   } catch (err) {
//     console.error(err);
//     return NextResponse.json({ error: "Internal server error" }, { status: 500 });
//   }
// }

import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

export async function POST(req) {
  const { leadId, feedback } = await req.json();

  const client = await clientPromise;
  const db = client.db("softshackle");

  await db.collection("leads").updateOne(
    { _id: new ObjectId(leadId) },
    {
      $set: {
        feedback,
      },
    }
  );

  return NextResponse.json({ success: true });
}
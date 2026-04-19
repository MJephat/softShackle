import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { leadId, rating, feedback } = await req.json();

    if (!leadId || !rating) {
      return NextResponse.json({ error: "Missing leadId or rating" }, { status: 400 });
    }

    // Prisma example:
    // await prisma.review.create({ data: { leadId, rating, feedback } });
    // await prisma.lead.update({ where: { id: leadId }, data: { status: "reviewed", rating } });

    // If rating >= 4, front-end already redirected to Google.
    // This route saves low-rating private feedback.

    console.log("Feedback saved:", { leadId, rating, feedback });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

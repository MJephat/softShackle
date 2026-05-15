import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { leadId, phone, name } = await req.json();

    if (!leadId || !phone) {
      return NextResponse.json(
        { error: "Missing leadId or phone" },
        { status: 400 }
      );
    }

    const baseUrl =
      process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

    const reviewLink = `${baseUrl}/rate?leadId=${leadId}`;

    const waText = encodeURIComponent(
      `Hi ${name ?? "there"}, thanks for using our service!\n\nPlease rate your experience: \n${reviewLink}`
    );

    const cleanPhone = phone.replace(/\D/g, "");

    const waUrl = `https://wa.me/${cleanPhone}?text=${waText}`;

    return NextResponse.json({
      success: true,
      waUrl,
      reviewLink,
    });

  } catch (err) {
    console.error("SEND REVIEW ERROR:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}


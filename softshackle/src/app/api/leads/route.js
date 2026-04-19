import { NextResponse } from "next/server";

// TODO: Replace with real DB (Prisma / Supabase)
// import { prisma } from "@/lib/prisma";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, phone, service, urgency, type } = body;

    if (!name || !phone || !type) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Prisma example (uncomment when DB is set up):
    // const lead = await prisma.lead.create({
    //   data: { name, phone, service, urgency, type, status: "new" },
    // });

    // Mock response for now
    const lead = {
      id: `lead_${Date.now()}`,
      name,
      phone,
      service,
      urgency,
      type,
      status: "new",
      timestamp: new Date().toISOString(),
    };

    return NextResponse.json({ success: true, lead });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function GET() {
  // TODO: return leads from DB
  // const leads = await prisma.lead.findMany({ orderBy: { createdAt: "desc" } });
  return NextResponse.json({ leads: [] });
}

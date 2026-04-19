export const MOCK_LEADS = [
  {
    id: "lead_001",
    name: "Jephat maina",
    phone: "+254 713805349",
    service: "Towing",
    urgency: "emergency",
    type: "whatsapp",
    status: "new",
    timestamp: "2024-04-12T08:14:00Z",
  },
  {
    id: "lead_002",
    name: "Amina Kariuki",
    phone: "+254 798 001 234",
    service: "Flatbed",
    urgency: "scheduled",
    type: "call",
    status: "contacted",
    timestamp: "2024-04-12T09:32:00Z",
  },
  {
    id: "lead_003",
    name: "Peter Njoroge",
    phone: "+254 723 456 789",
    service: "Recovery",
    urgency: "emergency",
    type: "whatsapp",
    status: "new",
    timestamp: "2024-04-12T10:05:00Z",
  },
  {
    id: "lead_004",
    name: "Faith Wambui",
    phone: "+254 700 987 654",
    service: "Towing",
    urgency: "scheduled",
    type: "form",
    status: "reviewed",
    timestamp: "2024-04-12T11:20:00Z",
    rating: 5,
  },
  {
    id: "lead_005",
    name: "Kevin Ochieng",
    phone: "+254 711 223 344",
    service: "Towing",
    urgency: "emergency",
    type: "call",
    status: "contacted",
    timestamp: "2024-04-12T12:48:00Z",
  },
];

export const MOCK_REVIEWS = [
  {
    leadId: "lead_004",
    leadName: "Faith Wambui",
    sentAt: "2024-04-11T14:00:00Z",
    rating: 5,
    redirectedToGoogle: true,
  },
  {
    leadId: "lead_002",
    leadName: "Amina Kariuki",
    sentAt: "2024-04-12T10:00:00Z",
    rating: 2,
    feedback: "Driver arrived 30 mins late and did not call ahead.",
    redirectedToGoogle: false,
  },
];

export function getInitials(name) {
  return name
    .split(" ")
    .filter((n) => n)
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

export function formatTime(iso) {
  return new Date(iso).toLocaleTimeString("en-KE", {
    hour: "2-digit",
    minute: "2-digit",
  });
}

export function formatDate(iso) {
  return new Date(iso).toLocaleDateString("en-KE", {
    day: "numeric",
    month: "short",
  });
}

export const WHATSAPP_NUMBER = "254712000000";
export const GOOGLE_REVIEW_URL = "https://g.page/r/YOUR_REVIEW_LINK/review";

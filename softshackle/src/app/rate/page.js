"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";

export default function RatePage() {
  const params = useSearchParams();
  const leadId = params.get("leadId");

  const [loading, setLoading] = useState(false);

  async function handleRating(stars) {
    setLoading(true);

    const res = await fetch("/api/review", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ leadId, rating: stars }),
    });

    const data = await res.json();

    if (stars >= 4) {
      // ✅ Redirect to Google review
      window.location.href = "https://g.page/r/YOUR_GOOGLE_REVIEW_LINK";
    } else {
      // ✅ Go to feedback page
      window.location.href = `/feedback?leadId=${leadId}`;
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-xl font-bold mb-6">
        Rate our service
      </h1>

      <div className="flex gap-3 text-3xl">
        {[1, 2, 3, 4, 5].map((star) => (
          <button key={star} onClick={() => handleRating(star)}>
            ⭐
          </button>
        ))}
      </div>
    </div>
  );
}
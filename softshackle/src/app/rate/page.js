"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";

export default function RatePage() {
  const params = useSearchParams();
  const leadId = params.get("leadId");

  const [selected, setSelected] = useState(0);
  const [loading, setLoading] = useState(false);

  async function submitRating() {
    if (!selected || !leadId) return;

    try {
      setLoading(true);

      const res = await fetch("/api/review", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          leadId,
          rating: selected,
        }),
      });

      if (!res.ok) throw new Error("Failed");

      // ✅ AFTER SUCCESS
      if (selected >= 4) {
        window.location.href = "https://g.page/r/YOUR_GOOGLE_LINK";
      } else {
        window.location.href = `/feedback?leadId=${leadId}`;
      }

    } catch (err) {
      alert("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">

      <h1 className="text-xl font-bold mb-4 text-center">
        How was your experience?
      </h1>

      {/* ⭐ STAR SELECTOR */}
      <div className="flex gap-3 text-4xl mb-6">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            onClick={() => setSelected(star)}
            className={`transition ${
              selected >= star ? "scale-110" : "opacity-40"
            }`}
          >
            ⭐
          </button>
        ))}
      </div>

      {/* ✅ SELECTED TEXT */}
      {selected > 0 && (
        <p className="text-sm mb-4">
          You selected {selected} star{selected > 1 && "s"}
        </p>
      )}

      {/* 🚀 SUBMIT BUTTON */}
      <button
        onClick={submitRating}
        disabled={!selected || loading}
        className="bg-black text-white px-6 py-2 rounded disabled:opacity-50"
      >
        {loading ? "Submitting..." : "Submit Review"}
      </button>

      {!leadId && (
        <p className="text-red-500 mt-4 text-sm">
          Invalid review link
        </p>
      )}
    </div>
  );
}
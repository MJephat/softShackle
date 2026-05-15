"use client";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";

function RateContent() {
  const searchParams = useSearchParams();

  const leadId = searchParams.get("leadId");

  const [selected, setSelected] = useState(0);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  async function submitRating() {
    if (!selected) {
      alert("Please select a rating");
      return;
    }

    setLoading(true);

    try {
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

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed");
      }

      setSubmitted(true);

      // Positive reviews
      if (selected >= 4) {
        window.location.href =
          "https://g.page/r/YOUR_GOOGLE_REVIEW_LINK/review";
      }

      // Negative reviews
      if (selected <= 3) {
        window.location.href = `/feedback?leadId=${leadId}`;
      }

    } catch (err) {
      console.error(err);
      alert("Failed to submit review");
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold">
          Thank you for your feedback 🙏
        </h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-xl p-8 max-w-md w-full text-center">

        <h1 className="text-3xl font-bold mb-4">
          Rate Your Experience
        </h1>

        <p className="text-gray-600 mb-6">
          How was our towing service?
        </p>

        <div className="flex justify-center gap-3 text-4xl mb-6">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              onClick={() => setSelected(star)}
              className={
                star <= selected
                  ? "text-yellow-500"
                  : "text-gray-300"
              }
            >
              ★
            </button>
          ))}
        </div>

        <button
          onClick={submitRating}
          disabled={loading}
          className="w-full bg-black text-white py-3 rounded-lg"
        >
          {loading ? "Submitting..." : "Submit Review"}
        </button>
      </div>
    </div>
  );
}

export default function RatePage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RateContent />
    </Suspense>
  );
}
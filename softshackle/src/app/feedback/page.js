"use client";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";

function FeedbackContent() {
  const searchParams = useSearchParams();

  const leadId = searchParams.get("leadId");

  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  async function submitFeedback(e) {
    e.preventDefault();

    const res = await fetch("/api/feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        leadId,
        message,
      }),
    });

    if (res.ok) {
      setSubmitted(true);
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
    <div className="min-h-screen flex items-center justify-center p-6">
      <form
        onSubmit={submitFeedback}
        className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md"
      >
        <h1 className="text-2xl font-bold mb-4">
          Private Feedback
        </h1>

        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell us what went wrong..."
          className="w-full border p-3 rounded-lg h-32"
          required
        />

        <button
          type="submit"
          className="w-full mt-4 bg-black text-white py-3 rounded-lg"
        >
          Submit Feedback
        </button>
      </form>
    </div>
  );
}

export default function FeedbackPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <FeedbackContent />
    </Suspense>
  );
}
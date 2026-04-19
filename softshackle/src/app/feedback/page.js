"use client";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { StarRating } from "@/components/StarRating";

export default function FeedbackPage() {
  const params   = useSearchParams();
  const leadId   = params.get("leadId") ?? "";
  const rating   = Number(params.get("rating") ?? 1);
  const [feedback, setFeedback] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit() {
    if (!feedback.trim()) return;
    // TODO: POST /api/feedback { leadId, rating, feedback }
    setSubmitted(true);
  }

  return (
    <div className="min-h-screen bg-zinc-950 flex items-center justify-center p-4">
      <div className="w-full max-w-sm">

        <div className="text-center mb-8">
          <div className="w-14 h-14 rounded-2xl bg-zinc-800 border border-zinc-700 flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">💬</span>
          </div>
          <h1 className="text-xl font-semibold text-zinc-100">Tell us what went wrong</h1>
          <p className="text-sm text-zinc-500 mt-1">Your feedback is private and helps us improve</p>
        </div>

        {!submitted ? (
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs text-zinc-500">Your rating:</span>
              <StarRating rating={rating} size="sm" />
            </div>

            <textarea
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              placeholder="What could we have done better?"
              rows={4}
              className="w-full bg-zinc-800 border border-zinc-700 rounded-xl p-3 text-sm text-zinc-200 placeholder-zinc-600 resize-none focus:outline-none focus:border-zinc-500 transition-colors"
            />

            <button
              onClick={handleSubmit}
              disabled={!feedback.trim()}
              className="w-full py-3 rounded-xl bg-zinc-700 hover:bg-zinc-600 disabled:bg-zinc-800 disabled:text-zinc-600 text-zinc-100 font-medium text-sm transition-all duration-150 mt-3"
            >
              Submit feedback
            </button>

            <p className="text-center text-xs text-zinc-600 mt-3">
              This is private — not posted publicly anywhere
            </p>
          </div>
        ) : (
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 text-center animate-fade-up">
            <div className="text-4xl mb-3">🙏</div>
            <p className="text-base font-semibold text-zinc-100">Thank you for your feedback</p>
            <p className="text-sm text-zinc-500 mt-1">
              We will use this to improve our service for next time.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

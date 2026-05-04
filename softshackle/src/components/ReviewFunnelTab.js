"use client";
import { StarRating } from "./StarRating";
import { ExternalLink, MessageSquare } from "lucide-react";

export function ReviewFunnelTab({ leads = [] }) {

  const totalReviewed = leads.filter(l => l?.rating != null).length;
  const positive = leads.filter(l => l?.rating >= 4).length;
  const negative = leads.filter(l => l?.rating > 0 && l?.rating <= 3).length;

  return (
    <div className="space-y-4">

      {/* 🔹 TOP STATS */}
      <div className="grid grid-cols-3 gap-3">
        <div className="bg-zinc-900 p-3 rounded-lg text-center">
          <p className="text-xs text-zinc-400">Reviewed</p>
          <p className="text-lg font-bold text-white">{totalReviewed}</p>
        </div>

        <div className="bg-zinc-900 p-3 rounded-lg text-center">
          <p className="text-xs text-emerald-400">Positive (4–5⭐)</p>
          <p className="text-lg font-bold text-white">{positive}</p>
        </div>

        <div className="bg-zinc-900 p-3 rounded-lg text-center">
          <p className="text-xs text-amber-400">Negative (1–3⭐)</p>
          <p className="text-lg font-bold text-white">{negative}</p>
        </div>
      </div>

      {/* 🔹 FUNNEL LOGIC */}
      <div className="bg-slate-900 border border-zinc-800 rounded-xl p-4">
        <p className="text-xs font-medium uppercase tracking-wide text-zinc-500 mb-4">
          Review funnel logic
        </p>

        <div className="flex flex-col gap-4">
          <div className="flex items-start gap-3">
            <div className="w-7 h-7 rounded-full bg-sky-900 text-sky-400 flex items-center justify-center text-xs font-semibold">
              1
            </div>
            <div>
              <p className="text-sm font-medium text-zinc-200">
                Admin sends review link
              </p>
              <p className="text-xs text-zinc-500">
                Via WhatsApp or copy-paste · /rate?leadId=123
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-7 h-7 rounded-full bg-sky-900 text-sky-400 flex items-center justify-center text-xs font-semibold">
              2
            </div>
            <div>
              <p className="text-sm font-medium text-zinc-200">
                Customer rates 1–5 stars
              </p>
              <p className="text-xs text-zinc-500">
                Simple page, no login required
              </p>
            </div>
          </div>
        </div>

        {/* 🔹 RESULTS */}
        <div className="grid grid-cols-2 gap-3 mt-5">

          {/* POSITIVE */}
          <div className="bg-zinc-800/60 border border-emerald-900/60 rounded-xl p-4">
            <p className="text-xs font-semibold text-emerald-500 mb-2">
              4–5 stars ({positive})
            </p>
            <StarRating rating={5} size="sm" />
            <p className="text-xs text-zinc-400 mt-2 flex items-center gap-1">
              <ExternalLink size={11} /> Redirect to Google review
            </p>
          </div>

          {/* NEGATIVE */}
          <div className="bg-zinc-800/60 border border-amber-900/60 rounded-xl p-4">
            <p className="text-xs font-semibold text-amber-500 mb-2">
              1–3 stars ({negative})
            </p>
            <StarRating rating={2} size="sm" />
            <p className="text-xs text-zinc-400 mt-2 flex items-center gap-1">
              <MessageSquare size={11} /> Private feedback form
            </p>
          </div>

        </div>
      </div>

      <p className="text-xs text-zinc-600">
        Protects your public reputation while capturing real feedback privately.
      </p>
    </div>
  );
}
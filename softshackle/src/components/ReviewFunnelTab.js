"use client";
import { StarRating } from "./StarRating";
import { ExternalLink, MessageSquare } from "lucide-react";

export function ReviewFunnelTab() {
  return (
    <div className="space-y-4">
      <div className="bg-slate-900 border border-zinc-800 rounded-xl p-4">
        <p className="text-xs font-medium uppercase tracking-wide text-zinc-500 mb-4">
          Review funnel logic
        </p>

        <div className="flex flex-col gap-4">
          {[
            {
              step: 1,
              title: "Admin sends review link",
              desc: "Via WhatsApp or copy-paste · /rate?leadId=123",
            },
            {
              step: 2,
              title: "Customer rates 1–5 stars",
              desc: "Simple page, no login required",
            },
          ].map(({ step, title, desc }) => (
            <div key={step} className="flex items-start gap-3">
              <div className="w-7 h-7 rounded-full bg-sky-900 text-sky-400 flex items-center justify-center text-xs font-semibold flex-shrink-0">
                {step}
              </div>
              <div>
                <p className="text-sm font-medium text-zinc-200">{title}</p>
                <p className="text-xs text-zinc-500 mt-0.5">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-3 mt-5">
          <div className="bg-zinc-800/60 border border-emerald-900/60 rounded-xl p-4">
            <p className="text-xs font-semibold text-emerald-500 mb-2">4–5 stars</p>
            <StarRating rating={5} size="sm" />
            <p className="text-xs text-zinc-400 mt-2 flex items-center gap-1">
              <ExternalLink size={11} /> Redirect to Google review
            </p>
            <p className="text-[11px] font-mono text-zinc-600 mt-1">→ g.page/r/your-link</p>
          </div>

          <div className="bg-zinc-800/60 border border-amber-900/60 rounded-xl p-4">
            <p className="text-xs font-semibold text-amber-500 mb-2">1–3 stars</p>
            <StarRating rating={2} size="sm" />
            <p className="text-xs text-zinc-400 mt-2 flex items-center gap-1">
              <MessageSquare size={11} /> Private feedback form
            </p>
            <p className="text-[11px] font-mono text-zinc-600 mt-1">→ /feedback</p>
          </div>
        </div>
      </div>

      <p className="text-xs text-zinc-600">
        Protects your public reputation while capturing real feedback privately. No paid API needed.
      </p>
    </div>
  );
}

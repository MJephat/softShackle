"use client";
import { useState } from "react";
import { BuildPhasesTab } from "@/components/BuildPhasesTab";
import { LeadsTab } from "@/components/LeadsTab";
import { ReviewFunnelTab } from "@/components/ReviewFunnelTab";
import { SendReviewModal } from "@/components/sendReviewModal";
import { MOCK_LEADS } from "@/lib/data";
import clsx from "clsx";
import { MetricCard } from "@/components/MetricCards";

const TABS = [
  { id: "leads",  label: "Leads"         },
  { id: "review", label: "Review funnel" },
  { id: "phases", label: "Build phases"  },
];

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("leads");
  const [reviewTarget, setReviewTarget] = useState(null);

  const totalLeads    = MOCK_LEADS.length;
  const waClicks      = MOCK_LEADS.filter((l) => l.type === "whatsapp").length;
  const avgRating     = 4.6;
  const googleReviews = 9;

  return (
    <div className="min-h-screen w-full bg-white text-zinc-900 antialiased p-4 sm:p-6">
        <div className="w-full max-w-7xl mx-auto">

      <div className="flex items-start justify-between mb-6">
        <div>
          
          <h1 className="text-xl font-semibold text-zinc-900 tracking-tight">Business dashboard</h1>
          <p className="text-sm text-zinc-500 mt-0.5">softshackle Towing Co. · Phase 1 MVP</p>
        </div>
        <span className="flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full bg-emerald-900/50 text-emerald-400 border border-emerald-800/40">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 pulse-dot" />
          Live
        </span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-6">
        <MetricCard label="Total leads"     value={totalLeads}    sub="all sources"          />
        <MetricCard label="WhatsApp clicks" value={waClicks}      sub="free, no API"         />
        <MetricCard label="Avg rating"      value={avgRating}     sub="from review funnel" accent="text-amber-400" />
        <MetricCard label="Google reviews"  value={googleReviews} sub="redirected"         accent="text-sky-400"  />
      </div>

      <div className="flex gap-2 mb-5 overflow-x-auto scrollbar-hide">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={clsx(
              "px-4 py-1.5 rounded-full text-sm font-medium border whitespace-nowrap transition-all duration-150",
              activeTab === tab.id
                ? "bg-zinc-100 text-zinc-900 border-transparent"
                : "border-zinc-800 text-zinc-400 hover:text-zinc-200 hover:border-zinc-700"
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div>
        {activeTab === "leads"  && <LeadsTab leads={MOCK_LEADS} onSendReview={setReviewTarget} />}
        {activeTab === "review" && <ReviewFunnelTab />}
        {activeTab === "phases" && <BuildPhasesTab />}
      </div>

      {reviewTarget && (
        <SendReviewModal lead={reviewTarget} onClose={() => setReviewTarget(null)} />
      )}
      </div>
    </div>
  );
}

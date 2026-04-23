"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";
import { BuildPhasesTab } from "@/components/BuildPhasesTab";
import { LeadsTab } from "@/components/LeadsTab";
import { ReviewFunnelTab } from "@/components/ReviewFunnelTab";
import { SendReviewModal } from "@/components/sendReviewModal";
import { MetricCard } from "@/components/MetricCards";

const TABS = [
  { id: "leads", label: "Leads" },
  { id: "review", label: "Review funnel" },
  { id: "phases", label: "Build phases" },
];

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("leads");
  const [reviewTarget, setReviewTarget] = useState(null);
  const [leads, setLeads] = useState([]);

  useEffect(() => {
    loadLeads();
  }, []);

  async function loadLeads() {
    const res = await fetch("/api/leads");
    const data = await res.json();
    setLeads(data.leads || []);
  }

  const totalLeads = leads.length;
  const waClicks = leads.filter((l) => l.type === "whatsapp").length;
    const caClicks = leads.filter((l) => l.type === "call").length;
  const avgRating = 4.6;
  const googleReviews = 9;

  return (
    <div className="min-h-screen w-full bg-white p-6">
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-6">
          <MetricCard label="Total leads" value={totalLeads} />
          <MetricCard label="WhatsApp clicks" value={waClicks} />
          <MetricCard label="Call clicks" value={caClicks} />
          <MetricCard label="Avg rating" value={avgRating} />
          <MetricCard label="Google reviews" value={googleReviews} />
        </div>

        <div className="mb-5 flex gap-2">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={clsx(
                "px-4 py-2 rounded-full",
                activeTab === tab.id
                  ? "bg-black text-white"
                  : "bg-gray-100"
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {activeTab === "leads" && (
          <LeadsTab leads={leads} onSendReview={setReviewTarget} />
        )}

        {activeTab === "review" && <ReviewFunnelTab />}
        {activeTab === "phases" && <BuildPhasesTab />}

        {reviewTarget && (
          <SendReviewModal
            lead={reviewTarget}
            onClose={() => setReviewTarget(null)}
          />
        )}
      </div>
    </div>
  );
}
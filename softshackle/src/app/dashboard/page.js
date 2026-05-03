"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";
import { BuildPhasesTab } from "@/components/BuildPhasesTab";
import { LeadsTab } from "@/components/LeadsTab";
import { ReviewFunnelTab } from "@/components/ReviewFunnelTab";
import { SendReviewModal } from "@/components/sendReviewModal";
import { MetricCard } from "@/components/MetricCards";
import { useRouter } from "next/navigation";

const TABS = [
  { id: "leads", label: "Leads" },
  { id: "review", label: "Review funnel" },
  { id: "phases", label: "Build phases" },
];

export default function Dashboard() {
  const router = useRouter();

  const [activeTab, setActiveTab] = useState("leads");
  const [reviewTarget, setReviewTarget] = useState(null);
  const [leads, setLeads] = useState([]);
  
  const [currentPage, setCurrentPage] = useState(1);
  const leadsPerPage = 15;

  const indexOfLast = currentPage * leadsPerPage;
  const indexOfFirst = indexOfLast - leadsPerPage;

  const currentLeads = leads.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(leads.length / leadsPerPage);

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

  //handle logout
  async function handleLogout() {
  await fetch("/api/logout", { method: "POST" });
  router.push("/");
}
  return (
    <div className="min-h-screen w-full bg-white p-6">

      <div className="flex justify-between items-center mb-5 bg-gray-100 p-4 rounded-lg max-w-7xl mx-auto">
          <span className="text-2xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Dashboard
          </span>

          <button
          onClick={handleLogout}
          className="bg-red-400 text-white px-6 py-2.5 rounded-lg font-semibold shadow-md hover:bg-red-700 hover:shadow-lg transition-all duration-200 active:scale-95"
        >
          Logout
        </button>
        
        </div>
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
          // <LeadsTab leads={leads} onSendReview={setReviewTarget} />
          <LeadsTab leads={currentLeads} onSendReview={setReviewTarget} />
 
        )}
           {activeTab === "leads" && (
              <div className="flex justify-center gap-2 mt-6 flex-wrap">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={clsx(
                      "px-3 py-1 rounded",
                      currentPage === page
                        ? "bg-black text-white"
                        : "bg-gray-200"
                    )}
                  >
                    {page}
                  </button>
                ))}
              </div>
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
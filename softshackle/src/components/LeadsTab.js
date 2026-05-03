"use client";
import { LeadRow } from "./LeadRow";

export function LeadsTab({ leads, onSendReview }) {
  return (
    <div>
      <div className="bg-slate-900 border border-zinc-800 rounded-xl overflow-hidden">
        <div className="px-4 py-3 border-b border-zinc-800 flex items-center justify-between">
          <p className="text-xs font-medium uppercase tracking-wide text-zinc-500">Recent leads</p>
          <span className="text-xs text-zinc-600">{leads.length} total</span>
        </div>
        <div className="px-4">
          {leads.map((lead) => (
            <LeadRow key={lead.id} lead={lead} onSendReview={onSendReview} />
          ))}
        </div>
      </div>
     
    </div>
  );
}

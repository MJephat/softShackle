"use client";
import { Lead } from "@/types";
import { Avatar } from "./Avatar";
import { X, Copy, Check } from "lucide-react";
import { useState } from "react";

export function SendReviewModal({
  lead,
  onClose,
}) {
  const [copied, setCopied] = useState(false);
  const link = `${typeof window !== "undefined" ? window.location.origin : ""}/rate?leadId=${lead.id}`;

  function copyLink() {
    navigator.clipboard.writeText(link);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  const waText = encodeURIComponent(`Hi ${lead.name.split(" ")[0]}, thanks for using our service! Please rate your experience: ${link}`);
  const waUrl  = `https://wa.me/${lead.phone.replace(/\D/g, "")}?text=${waText}`;

  return (
    <div
      className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-end sm:items-center justify-center z-50 p-4"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-slate-900 border border-zinc-700 rounded-2xl w-full max-w-sm p-5 animate-fade-up">
        <div className="flex items-center justify-between mb-4">
          <p className="text-sm font-semibold text-zinc-100">Send review request</p>
          <button
            onClick={onClose}
            className="w-7 h-7 rounded-full flex items-center justify-center text-zinc-500 hover:text-zinc-200 hover:bg-zinc-800 transition-colors"
          >
            <X size={15} />
          </button>
        </div>

        <div className="flex items-center gap-3 bg-zinc-800/60 rounded-xl p-3 mb-4">
          <Avatar name={lead.name} size="sm" />
          <div>
            <p className="text-sm font-medium text-zinc-200">{lead.name}</p>
            <p className="text-xs text-zinc-500">{lead.phone}</p>
          </div>
        </div>

        <div className="bg-zinc-800/50 rounded-xl p-3 mb-4">
          <p className="text-[11px] text-zinc-500 mb-1">Review link</p>
          <p className="text-xs font-mono text-zinc-400 break-all">{link}</p>
        </div>

        <div className="flex flex-col gap-2">
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-medium transition-colors"
          >
            Send via WhatsApp
          </a>
          <button
            onClick={copyLink}
            className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl border border-zinc-700 hover:bg-zinc-800 text-zinc-300 text-sm font-medium transition-colors"
          >
            {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
            {copied ? "Copied!" : "Copy link"}
          </button>
        </div>
      </div>
    </div>
  );
}

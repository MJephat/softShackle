"use client";
import { Avatar } from "./Avatar";
import { Badge } from "./Badge";
import { formatTime } from "@/lib/data";
import { Phone, MessageCircle, FileText, Send } from "lucide-react";

const TYPE_META = {
  whatsapp: { label: "WhatsApp", icon: MessageCircle, variant: "green" },
  call:     { label: "Call",      icon: Phone,          variant: "blue"  },
  form:     { label: "Form",      icon: FileText,       variant: "gray"  },
};

const STATUS_META = {
  new:       { label: "New",       variant: "amber" },
  contacted: { label: "Contacted", variant: "blue"  },
  reviewed:  { label: "Reviewed",  variant: "green" },
};

export function LeadRow({ lead, onSendReview }) {
  const type   = TYPE_META[lead.type];
  const status = STATUS_META[lead.status];
  const Icon   = type.icon;

  return (
    <div className="flex items-center gap-3 py-3 border-b border-zinc-800/60 last:border-0 animate-fade-up group">
      <Avatar name={lead.name} />

      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-zinc-100 truncate">{lead.name}</p>
        <p className="text-xs text-zinc-500 truncate">
          {lead.phone} · {lead.service} ·{" "}
          <span className={lead.urgency === "emergency" ? "text-rose-400" : "text-zinc-500"}>
            {lead.urgency}
          </span>
        </p>
      </div>

      <div className="hidden sm:flex items-center gap-2 flex-shrink-0">
        <Badge variant={type.variant}>
          <Icon size={10} />
          {type.label}
        </Badge>
        <Badge variant={status.variant}>{status.label}</Badge>
        <span className="text-xs text-zinc-600">{formatTime(lead.timestamp)}</span>
      </div>

      <button
        onClick={() => onSendReview(lead)}
        className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-emerald-900 hover:text-emerald-400 text-zinc-400 border border-zinc-700 hover:border-emerald-800 transition-all duration-150 flex-shrink-0"
      >
        <Send size={12} />
        <span className="hidden sm:inline">Send review</span>
      </button>
    </div>
  );
}

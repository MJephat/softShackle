"use client";

const PHASE1_FEATURES = [
  "Website",
  "WhatsApp button",
  "Lead form",
  "Save leads to DB",
  "Login dashboard",
  "Review funnel",
];

const PHASE2_FEATURES = [
  "SMS · Africa's Talking",
  "Missed call automation",
  "Auto WhatsApp replies",
  "Real call tracking",
];

const MARKETS = [
  { name: "Towing companies", color: "bg-emerald-900 text-emerald-400" },
  { name: "Clinics",           color: "bg-sky-900 text-sky-400"     },
  { name: "Salons",            color: "bg-violet-900 text-violet-400" },
  { name: "Repair services",   color: "bg-rose-900 text-rose-400"   },
];

function ProgressBar({ pct, color = "bg-emerald-500" }) {
  return (
    <div className="h-1.5 rounded-full bg-zinc-800 overflow-hidden mt-3">
      <div
        className={`h-full rounded-full ${color} transition-all duration-700`}
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}

export function BuildPhasesTab() {
  return (
    <div className="space-y-4">
      <div className="bg-slate-900 border border-zinc-800 rounded-xl p-4">
        <div className="flex items-center justify-between mb-3">
          <p className="text-sm font-medium text-zinc-200">Phase 1 — build now</p>
          <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-900/60 text-emerald-400 border border-emerald-800/40">
            70% done
          </span>
        </div>
        <div className="flex flex-wrap gap-2">
          {PHASE1_FEATURES.map((f) => (
            <span
              key={f}
              className="text-xs px-2.5 py-1 rounded-full border border-zinc-700 text-zinc-400"
            >
              {f}
            </span>
          ))}
        </div>
        <ProgressBar pct={70} />
        <p className="text-[11px] text-zinc-600 mt-2">Zero API costs — fully functional SaaS product</p>
      </div>

      <div className="bg-slate-900 border border-zinc-800 rounded-xl p-4">
        <div className="flex items-center justify-between mb-3">
          <p className="text-sm font-medium text-zinc-200">Phase 2 — after first users</p>
          <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-amber-900/60 text-amber-400 border border-amber-800/40">
            Paid APIs
          </span>
        </div>
        <div className="flex flex-wrap gap-2">
          {PHASE2_FEATURES.map((f) => (
            <span
              key={f}
              className="text-xs px-2.5 py-1 rounded-full border border-zinc-700 text-zinc-500"
            >
              {f}
            </span>
          ))}
        </div>
        <ProgressBar pct={0} color="bg-amber-500" />
        <p className="text-[11px] text-zinc-600 mt-2">
          Add only when you have paying customers to justify the cost
        </p>
      </div>

      <div className="bg-slate-900 border border-zinc-800 rounded-xl p-4">
        <p className="text-xs font-medium uppercase tracking-wide text-zinc-500 mb-3">
          Target markets with Phase 1 alone
        </p>
        <div className="grid grid-cols-2 gap-2">
          {MARKETS.map(({ name, color }) => (
            <div
              key={name}
              className="flex items-center gap-2 bg-zinc-800/50 rounded-lg px-3 py-2.5"
            >
              <span className={`w-2 h-2 rounded-full flex-shrink-0 ${color.split(" ")[0]}`} />
              <p className="text-xs text-zinc-300">{name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

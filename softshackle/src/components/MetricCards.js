"use client";

export function MetricCard({
  label,
  value,
  sub,
  accent,
}) {
  return (
    <div className="bg-slate-900 border border-zinc-800 rounded-xl p-4 flex flex-col gap-1">
      <p className="text-xs text-white opacity-70 uppercase tracking-wide font-medium">{label}</p>
      <p className={`text-2xl font-semibold ${accent ?? "text-zinc-100"}`}>{value}</p>
      {sub && <p className="text-xs text-zinc-500">{sub}</p>}
    </div>
  );
}

"use client";
import { getInitials } from "@/lib/data";

const COLORS = [
  "bg-emerald-900 text-emerald-400",
  "bg-sky-900 text-sky-400",
  "bg-violet-900 text-violet-400",
  "bg-rose-900 text-rose-400",
  "bg-amber-900 text-amber-400",
];

function colorFor(name) {
  let hash = 0;
  for (let i = 0; i < name.length; i++) hash = name.charCodeAt(i) + ((hash << 5) - hash);
  return COLORS[Math.abs(hash) % COLORS.length];
}

export function Avatar({ name, size = "md" }) {
  const sz = size === "sm" ? "w-7 h-7 text-[10px]" : size === "lg" ? "w-12 h-12 text-base" : "w-9 h-9 text-xs";
  return (
    <div className={`${sz} ${colorFor(name)} rounded-full flex items-center justify-center font-semibold flex-shrink-0`}>
      {getInitials(name)}
    </div>
  );
}

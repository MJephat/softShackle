"use client";
import clsx from "clsx";

const variants = {
  green: "bg-emerald-900/60 text-emerald-400 border-emerald-800/60",
  amber: "bg-amber-900/60 text-amber-400 border-amber-800/60",
  blue:  "bg-sky-900/60 text-sky-400 border-sky-800/60",
  red:   "bg-rose-900/60 text-rose-400 border-rose-800/60",
  gray:  "bg-zinc-800/60 text-zinc-400 border-zinc-700/60",
};

export function Badge({
  children,
  variant = "gray",
  className,
}) {
  return (
    <span
      className={clsx(
        "inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-medium border",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}

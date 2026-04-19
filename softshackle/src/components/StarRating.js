"use client";

export function StarRating({
  rating,
  max = 5,
  interactive = false,
  onRate,
  size = "md",
}) {
  const sz = size === "sm" ? "text-sm" : size === "lg" ? "text-2xl" : "text-base";
  return (
    <div className={`flex gap-0.5 ${sz}`}>
      {Array.from({ length: max }).map((_, i) => {
        const filled = i < rating;
        return (
          <button
            key={i}
            type="button"
            disabled={!interactive}
            onClick={() => interactive && onRate?.(i + 1)}
            className={`transition-transform ${interactive ? "cursor-pointer hover:scale-110" : "cursor-default"} ${
              filled ? "text-amber-400" : "text-zinc-700"
            }`}
          >
            ★
          </button>
        );
      })}
    </div>
  );
}


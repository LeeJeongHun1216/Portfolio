export default function Card({
  children,
  className = "",
  highlighted = false,
  accent = null,
}) {
  const accentTop = {
    blue: "before:absolute before:inset-x-0 before:top-0 before:h-1 before:rounded-t-xl before:bg-gradient-to-r before:from-brand-blue before:to-accent-cyan",
    navy: "before:absolute before:inset-x-0 before:top-0 before:h-1 before:rounded-t-xl before:bg-gradient-to-r before:from-navy before:to-brand-blue",
  };

  const base =
    "relative overflow-hidden rounded-xl border bg-white p-6 shadow-sm transition-shadow hover:shadow-md md:p-8";
  const border = highlighted
    ? "border-brand-blue/25 shadow-md shadow-brand-blue/10 ring-1 ring-brand-blue/10"
    : "border-gray-200/80 hover:border-brand-blue/20";

  const accentClass = accent ? accentTop[accent] : "";

  return (
    <article className={`${base} ${border} ${accentClass} ${className}`}>
      {children}
    </article>
  );
}

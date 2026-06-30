export default function TagList({ tags, variant = "default" }) {
  const styles =
    variant === "navy"
      ? "border border-navy/15 bg-navy/8 text-navy"
      : "border border-brand-blue/15 bg-brand-blue/8 text-brand-blue";

  return (
    <ul className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <li
          key={tag}
          className={`rounded-full px-3 py-1 text-xs font-medium md:text-sm ${styles}`}
        >
          {tag}
        </li>
      ))}
    </ul>
  );
}

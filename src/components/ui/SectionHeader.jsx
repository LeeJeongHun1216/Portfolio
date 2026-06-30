export default function SectionHeader({ title, subtitle }) {
  return (
    <div className="mb-8 md:mb-10">
      <h2 className="text-2xl font-bold text-navy md:text-3xl">{title}</h2>
      {subtitle && (
        <p className="mt-2 text-sm text-gray-500 md:text-base">{subtitle}</p>
      )}
      <div className="accent-bar mt-3 h-1 w-14 rounded-full" />
    </div>
  );
}

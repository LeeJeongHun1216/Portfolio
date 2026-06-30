import { Server, Network, Monitor } from "lucide-react";
import { personal } from "../../data/portfolio";

const keywordIcons = {
  Server: Server,
  Network: Network,
  "System Operation": Monitor,
};

export default function Home() {
  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-brand-blue/10 bg-gradient-to-br from-surface via-white to-brand-blue/[0.04] py-20 md:py-28"
    >
      <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-brand-blue/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-accent-cyan/10 blur-3xl" />

      <div className="relative mx-auto max-w-5xl px-5 md:px-8">
        <p className="mb-3 inline-block rounded-full bg-brand-blue/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-brand-blue">
          Portfolio
        </p>
        <h1 className="text-4xl font-bold md:text-5xl">
          <span className="text-gradient">{personal.name}</span>
        </h1>
        <p className="mt-3 text-xl font-medium text-navy/70 md:text-2xl">
          {personal.title}
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          {personal.keywords.map((keyword) => {
            const Icon = keywordIcons[keyword];
            return (
              <div
                key={keyword}
                className="flex items-center gap-2 rounded-lg border border-brand-blue/20 bg-white/80 px-4 py-2.5 shadow-sm backdrop-blur-sm"
              >
                <Icon className="h-4 w-4 text-brand-blue" strokeWidth={2} />
                <span className="text-sm font-medium text-navy">{keyword}</span>
              </div>
            );
          })}
        </div>

        <p className="mt-10 max-w-2xl border-l-2 border-brand-blue/30 pl-5 text-base leading-relaxed text-gray-600 md:text-lg">
          {personal.intro}
        </p>
      </div>
    </section>
  );
}

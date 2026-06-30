import { Shield, CheckCircle2 } from "lucide-react";
import { military } from "../../data/portfolio";
import SectionHeader from "../ui/SectionHeader";
import Card from "../ui/Card";
import TagList from "../ui/TagList";

export default function MilitaryExperience() {
  return (
    <section id="military" className="py-16 md:py-20">
      <div className="mx-auto max-w-5xl px-5 md:px-8">
        <SectionHeader
          title="Military Experience"
          subtitle="정보체계관리 특기 복무 경험"
        />

        <Card highlighted className="relative overflow-hidden bg-gradient-to-br from-white to-brand-blue/[0.03]">
          <div className="accent-bar absolute left-0 top-0 h-full w-1 rounded-none" />

          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-navy to-brand-blue px-3 py-1 text-xs font-semibold text-white shadow-sm">
                <Shield className="h-3.5 w-3.5" />
                Core Experience
              </div>
              <h3 className="text-xl font-bold text-navy md:text-2xl">
                {military.unit}
              </h3>
              <p className="mt-2 text-base text-gray-600">{military.specialty}</p>
            </div>
            <TagList tags={military.keywords} variant="navy" />
          </div>

          <div className="mt-8">
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wide text-brand-blue">
              업무 경험
            </h4>
            <ul className="grid gap-3 sm:grid-cols-2">
              {military.experiences.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 rounded-lg border border-brand-blue/10 bg-white/80 px-4 py-3 text-sm text-gray-700 shadow-sm md:text-base"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-blue" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Card>
      </div>
    </section>
  );
}

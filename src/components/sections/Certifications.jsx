import { Award } from "lucide-react";
import { certifications } from "../../data/portfolio";
import SectionHeader from "../ui/SectionHeader";
import Card from "../ui/Card";

export default function Certifications() {
  return (
    <section id="certifications" className="section-surface-alt py-16 md:py-20">
      <div className="mx-auto max-w-5xl px-5 md:px-8">
        <SectionHeader title="Certifications" subtitle="보유 자격증" />

        <div className="grid gap-6 md:grid-cols-3">
          {certifications.map((group, index) => (
            <Card key={group.category} accent={index % 2 === 0 ? "blue" : "navy"}>
              <div className="mb-4 flex items-center gap-2">
                <div className="rounded-lg bg-brand-blue/10 p-2">
                  <Award className="h-5 w-5 text-brand-blue" />
                </div>
                <h3 className="text-base font-semibold text-navy">
                  {group.category}
                </h3>
              </div>
              <ul className="space-y-2.5">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="border-l-2 border-brand-blue/30 pl-3 text-sm text-gray-700 md:text-base"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

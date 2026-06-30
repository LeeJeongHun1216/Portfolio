import { ArrowUpRight, Trophy } from "lucide-react";
import { awards, projects } from "../../data/portfolio";
import SectionHeader from "../ui/SectionHeader";
import Card from "../ui/Card";

export default function Awards() {
  return (
    <section id="awards" className="section-surface-alt py-16 md:py-20">
      <div className="mx-auto max-w-5xl px-5 md:px-8">
        <SectionHeader title="Awards" subtitle="교내 수상 경력" />

        <div className="grid gap-6 md:grid-cols-2">
          {awards.map((award, index) => {
            const relatedProject = award.projectId
              ? projects.find((p) => p.id === award.projectId)
              : null;

            return (
              <Card key={award.id} accent={index % 2 === 0 ? "blue" : "navy"}>
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-blue/15 to-accent-cyan/15">
                    <Trophy
                      className="h-6 w-6 text-brand-blue"
                      strokeWidth={1.75}
                    />
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                    대회명
                  </p>
                </div>
                <h3 className="mt-3 overflow-x-auto whitespace-nowrap text-sm font-bold text-navy md:text-base">
                  {award.contest}
                </h3>

                <div className="mt-5 space-y-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                      수상
                    </p>
                    <span className="mt-1.5 inline-block rounded-full bg-navy/8 px-3 py-1 text-sm font-semibold text-navy">
                      {award.prize}
                    </span>
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                      내용
                    </p>
                    <p className="mt-1.5 text-sm leading-relaxed text-gray-700 md:text-base">
                      {award.description}
                    </p>
                  </div>

                  {relatedProject && (
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                        관련 프로젝트
                      </p>
                      <a
                        href={relatedProject.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-1.5 inline-flex items-center gap-1 text-sm font-medium text-brand-blue transition-colors hover:text-navy hover:underline md:text-base"
                      >
                        {relatedProject.title}
                        <ArrowUpRight className="h-3.5 w-3.5 shrink-0" />
                      </a>
                    </div>
                  )}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

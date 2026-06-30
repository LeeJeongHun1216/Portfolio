import { ExternalLink } from "lucide-react";
import { projects } from "../../data/portfolio";
import SectionHeader from "../ui/SectionHeader";
import Card from "../ui/Card";
import TagList from "../ui/TagList";
import ProjectImage from "../ui/ProjectImage";

function ProjectDetail({ label, items }) {
  return (
    <div>
      <h4 className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-500">
        {label}
      </h4>
      <ul className="space-y-1">
        {items.map((item) => (
          <li key={item} className="text-sm text-gray-700 md:text-base">
            · {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-16 md:py-20">
      <div className="mx-auto max-w-5xl px-5 md:px-8">
        <SectionHeader title="Projects" subtitle="프로젝트 경험" />

        <div className="space-y-8">
          {projects.map((project) => (
            <Card key={project.id}>
              <div className="grid gap-6 lg:grid-cols-5">
                <div className="lg:col-span-2">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block transition-opacity hover:opacity-90"
                  >
                    <ProjectImage
                      src={project.image}
                      alt={project.imageAlt}
                      projectNumber={project.id}
                    />
                  </a>
                </div>

                <div className="lg:col-span-3">
                  <p className="text-xs font-semibold uppercase tracking-wide text-brand-blue">
                    Project {String(project.id).padStart(2, "0")}
                  </p>
                  <h3 className="mt-1 text-lg font-bold text-navy md:text-xl">
                    {project.title}
                  </h3>

                  <div className="mt-5 space-y-4">
                    <div>
                      <h4 className="mb-1 text-xs font-semibold uppercase tracking-wide text-gray-500">
                        목적
                      </h4>
                      <p className="text-sm text-gray-700 md:text-base">
                        {project.purpose}
                      </p>
                    </div>

                    <div>
                      <h4 className="mb-1 text-xs font-semibold uppercase tracking-wide text-gray-500">
                        내용
                      </h4>
                      <p className="text-sm text-gray-700 md:text-base">
                        {project.description}
                      </p>
                    </div>

                    {project.utilization && (
                      <ProjectDetail label="활용" items={project.utilization} />
                    )}

                    <ProjectDetail label="개발 방식" items={project.development} />
                    <ProjectDetail label="담당" items={project.responsibilities} />

                    <div>
                      <h4 className="mb-1 text-xs font-semibold uppercase tracking-wide text-gray-500">
                        링크
                      </h4>
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm text-brand-blue transition-colors hover:text-navy hover:underline md:text-base"
                      >
                        <ExternalLink className="h-3.5 w-3.5 shrink-0" />
                        {project.url}
                      </a>
                    </div>
                  </div>

                  <div className="mt-5">
                    <TagList tags={project.keywords} />
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

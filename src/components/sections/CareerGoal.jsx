import { careerGoal } from "../../data/portfolio";
import SectionHeader from "../ui/SectionHeader";
import Card from "../ui/Card";

export default function CareerGoal() {
  return (
    <section id="career-goal" className="py-16 md:py-20">
      <div className="mx-auto max-w-5xl px-5 md:px-8">
        <SectionHeader title="Career Goal" subtitle="진로 목표" />

        <Card accent="blue" className="bg-gradient-to-r from-white to-brand-blue/[0.04]">
          <blockquote className="text-base leading-relaxed text-gray-700 md:text-lg">
            &ldquo;{careerGoal}&rdquo;
          </blockquote>
        </Card>
      </div>
    </section>
  );
}

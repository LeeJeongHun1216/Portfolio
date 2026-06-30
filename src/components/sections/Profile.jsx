import { GraduationCap, Target } from "lucide-react";
import { profile } from "../../data/portfolio";
import SectionHeader from "../ui/SectionHeader";
import Card from "../ui/Card";

export default function Profile() {
  return (
    <section id="profile" className="py-16 md:py-20">
      <div className="mx-auto max-w-5xl px-5 md:px-8">
        <SectionHeader title="Profile" subtitle="기본 정보 및 희망 분야" />

        <div className="grid gap-6 md:grid-cols-2">
          <Card accent="blue">
            <div className="mb-4 flex items-center gap-2">
              <div className="rounded-lg bg-brand-blue/10 p-2">
                <GraduationCap className="h-5 w-5 text-brand-blue" />
              </div>
              <h3 className="text-lg font-semibold text-navy">학력</h3>
            </div>
            <ul className="space-y-3">
              {profile.education.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-sm text-gray-700 md:text-base"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-blue" />
                  {item}
                </li>
              ))}
            </ul>
          </Card>

          <Card accent="navy">
            <div className="mb-4 flex items-center gap-2">
              <div className="rounded-lg bg-navy/10 p-2">
                <Target className="h-5 w-5 text-navy" />
              </div>
              <h3 className="text-lg font-semibold text-navy">희망 분야</h3>
            </div>
            <ul className="space-y-3">
              {profile.interests.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-sm text-gray-700 md:text-base"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-navy" />
                  {item}
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
}

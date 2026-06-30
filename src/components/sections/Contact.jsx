import { Mail, Phone, User } from "lucide-react";
import { personal } from "../../data/portfolio";
import SectionHeader from "../ui/SectionHeader";

const contactItems = [
  {
    icon: User,
    label: "이름",
    value: personal.name,
    href: null,
    wide: false,
  },
  {
    icon: Mail,
    label: "이메일",
    value: personal.email,
    href: `mailto:${personal.email}`,
    wide: true,
  },
  {
    icon: Phone,
    label: "전화번호",
    value: personal.phone,
    href: `tel:${personal.phone.replace(/-/g, "")}`,
    wide: false,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section-surface py-16 md:py-20">
      <div className="mx-auto max-w-5xl px-5 md:px-8">
        <SectionHeader title="Contact" subtitle="연락처" />

        <div className="overflow-hidden rounded-2xl border border-brand-blue/15 bg-white shadow-lg shadow-brand-blue/8">
          <div className="accent-bar h-1" />
          <div className="flex flex-col divide-y divide-gray-100 lg:flex-row lg:divide-x lg:divide-y-0">
            {contactItems.map(({ icon: Icon, label, value, href, wide }) => (
              <div
                key={label}
                className={`group flex items-center gap-4 px-6 py-5 transition-colors hover:bg-brand-blue/[0.03] md:px-7 md:py-6 ${
                  wide ? "lg:flex-[1.6]" : "lg:flex-1"
                }`}
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-blue/15 to-accent-cyan/15">
                  <Icon
                    className="h-5 w-5 text-brand-blue transition-colors group-hover:text-navy"
                    strokeWidth={1.75}
                  />
                </div>
                <div className="min-w-0 flex-1 overflow-hidden">
                  <p className="text-xs font-medium text-gray-400">{label}</p>
                  {href ? (
                    <a
                      href={href}
                      className={`mt-0.5 block font-semibold text-navy transition-colors hover:text-brand-blue ${
                        wide
                          ? "whitespace-nowrap text-xs sm:text-sm lg:text-[0.9rem]"
                          : "text-sm md:text-base"
                      }`}
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="mt-0.5 text-sm font-semibold text-navy md:text-base">
                      {value}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import type { Metadata } from "next";
import { PageCta, PageHero, SectionHeading } from "@/components/ui";
import { BoltIcon, ShieldIcon, SunIcon } from "@/components/icons";
import { Reveal } from "@/components/Reveal";
import { GlowCard } from "@/components/GlowCard";
import {
  batteryBrands,
  inverterBrands,
  panelBrands,
  partnerBrands,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "Products & Brands | Suryajyot Solar",
  description:
    "We install trusted solar panels, inverters, and batteries from Tata Power Solar, Adani Solar, Waaree, Deye, and more.",
};

const brandGroups = [
  {
    title: "Solar Panels",
    icon: SunIcon,
    brands: panelBrands,
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1100&q=80",
  },
  {
    title: "Inverters",
    icon: BoltIcon,
    brands: inverterBrands,
    image:
      "https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?auto=format&fit=crop&w=1100&q=80",
  },
  {
    title: "Batteries",
    icon: ShieldIcon,
    brands: batteryBrands,
    image:
      "https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=1100&q=80",
  },
];

function logosFor(names: string[]) {
  return partnerBrands.filter((brand) =>
    names.some(
      (name) =>
        brand.name.toLowerCase().includes(name.toLowerCase()) ||
        name.toLowerCase().includes(brand.name.toLowerCase().split(" ")[0]),
    ),
  );
}

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Products & Brands"
        title="Equipment chosen for long-term reliability"
        description="We install trusted, high-performance solar equipment from reputed manufacturers, so every system we deliver is built to last."
        image="https://images.unsplash.com/photo-1595437193398-f24279553f4f?auto=format&fit=crop&w=1600&q=80"
      />

      <section className="section-pad">
        <div className="section-container">
          <div className="grid gap-6 lg:grid-cols-3">
            {brandGroups.map((group, i) => {
              const logos = logosFor(group.brands);
              return (
                <Reveal key={group.title} delay={i * 80}>
                  <GlowCard className="group h-full overflow-hidden rounded-2xl surface-card">
                    <div className="relative h-44 w-full overflow-hidden">
                      <Image
                        src={group.image}
                        alt={group.title}
                        fill
                        sizes="(min-width: 1024px) 33vw, 100vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 to-navy-900/20" />
                      <span className="absolute bottom-4 left-4 flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-sun-400 backdrop-blur">
                        <group.icon className="h-4.5 w-4.5" />
                      </span>
                      <h3 className="absolute bottom-5 left-16 text-base font-semibold text-white">
                        {group.title}
                      </h3>
                    </div>
                    <div className="space-y-3 p-5">
                      {logos.map((brand) => (
                        <div
                          key={brand.name}
                          className="flex h-14 items-center rounded-xl border border-navy-900/8 bg-navy-50/60 px-3"
                        >
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={brand.logo}
                            alt={brand.name}
                            className="h-8 w-auto max-w-full object-contain"
                          />
                        </div>
                      ))}
                    </div>
                  </GlowCard>
                </Reveal>
              );
            })}
          </div>

          <p className="mt-10 text-center text-sm text-navy-500">
            Brand availability may vary by project based on system size and
            site requirements.
          </p>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="section-container">
          <Reveal>
            <SectionHeading
              eyebrow="Quality Assurance"
              title="Every component chosen for long-term reliability"
              description="From high-efficiency panels to durable inverters and batteries, we partner only with manufacturers whose products meet strict performance and safety standards."
            />
          </Reveal>
          <div className="mt-12">
            <PageCta
              title="Want a brand recommendation for your roof?"
              description="We match panels, inverters, and batteries to your load, budget, and warranty needs."
            />
          </div>
        </div>
      </section>
    </>
  );
}

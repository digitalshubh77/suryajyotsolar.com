import Image from "next/image";
import type { Metadata } from "next";
import { Button, PageCta, PageHero, SectionHeading } from "@/components/ui";
import { ShieldIcon, serviceIconMap } from "@/components/icons";
import { Reveal } from "@/components/Reveal";
import { GlowCard } from "@/components/GlowCard";
import { SolarBackground } from "@/components/SolarBackground";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { services, site, warranties } from "@/lib/content";

export const metadata: Metadata = {
  title: "Our Services | Suryajyot Solar",
  description:
    "Residential, commercial, and industrial solar installation, maintenance, and net metering support across Kolhapur District.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Complete rooftop solar solutions"
        description="Quality equipment, professional installation, and reliable service from start to finish."
        image="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1600&q=80"
      />

      <section className="section-pad">
        <div className="section-container space-y-16">
          {services.map((service, index) => {
            const Icon = serviceIconMap[service.icon];
            const reversed = index % 2 === 1;
            return (
              <Reveal
                key={service.slug}
                className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
                  reversed ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <GlowCard ring={false} className="relative rounded-2xl">
                  <div className="overflow-hidden rounded-2xl">
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={900}
                      height={650}
                      className="h-[260px] w-full object-cover transition-transform duration-700 hover:scale-[1.03] sm:h-[340px]"
                    />
                  </div>
                  <span className="absolute -top-3 -left-3 flex h-12 w-12 items-center justify-center rounded-xl bg-navy-900 text-sun-400 shadow-lg">
                    <Icon className="h-6 w-6" />
                  </span>
                </GlowCard>
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-sun-700">
                    0{index + 1}
                  </span>
                  <h3 className="mt-2 text-2xl font-semibold text-navy-900">
                    {service.title}
                  </h3>
                  <p className="mt-4 text-[15px] leading-relaxed text-navy-600">
                    {service.description}
                  </p>
                  <Button href={site.whatsappHref} variant="outline" className="mt-6">
                    Enquire About This Service
                  </Button>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="relative overflow-hidden section-pad">
        <div className="mesh-navy absolute inset-0" />
        <div className="grid-texture absolute inset-0 opacity-20" />
        <SolarBackground compact />
        <div className="section-container relative">
          <Reveal>
            <SectionHeading
              eyebrow="Warranty Coverage"
              title="Backed by manufacturer-grade warranties"
              light
              description="Warranty coverage applies across all our service categories."
            />
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {warranties.map((w, i) => (
              <Reveal key={w.label} delay={i * 60}>
                <GlowCard
                  dark
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 text-center"
                >
                  <ShieldIcon className="mx-auto h-6 w-6 text-sun-400" />
                  <AnimatedCounter
                    value={w.value}
                    className="mt-3 block text-xl font-semibold text-white"
                  />
                  <p className="mt-1.5 text-[11px] font-medium uppercase tracking-[0.12em] text-navy-300">
                    {w.label}
                  </p>
                </GlowCard>
              </Reveal>
            ))}
          </div>
          <p className="relative mt-8 text-center text-xs leading-relaxed text-navy-400">
            Warranty terms are as declared by the respective product
            manufacturers and are subject to their standard terms and
            conditions.
          </p>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="section-container">
          <PageCta
            title="Need help choosing the right system?"
            description="Tell us your monthly bill and roof type. We will recommend the right capacity and share a clear quotation."
          />
        </div>
      </section>
    </>
  );
}

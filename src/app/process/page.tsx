import type { Metadata } from "next";
import { PageCta, PageHero, SectionHeading } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { GlowCard } from "@/components/GlowCard";
import { processSteps } from "@/lib/content";

export const metadata: Metadata = {
  title: "Our Installation Process | Suryajyot Solar",
  description:
    "A simple, transparent 5-step process from your first enquiry to a fully functioning solar system — site visit, quotation, documentation, installation, and net metering.",
};

export default function ProcessPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Process"
        title="From enquiry to a working solar system"
        description="A simple, transparent 5-step process from your first site visit to net metering."
        image="https://images.unsplash.com/photo-1624397640148-949b1732bb0a?auto=format&fit=crop&w=1600&q=80"
      />

      <section className="section-pad bg-white">
        <div className="section-container max-w-3xl">
          <Reveal>
            <SectionHeading
              eyebrow="How It Works"
              title="Your solar journey in 5 clear steps"
            />
          </Reveal>
          <div className="relative mt-12">
            <div className="pointer-events-none absolute left-6 top-6 hidden h-[calc(100%-3rem)] w-px bg-gradient-to-b from-sun-400/70 via-navy-200 to-transparent sm:block" />
            <div className="space-y-4">
              {processSteps.map((step, i) => (
                <Reveal key={step.step} delay={i * 70}>
                  <GlowCard
                    ring={false}
                    className="relative flex flex-col gap-4 rounded-2xl border border-navy-900/8 bg-navy-50/40 p-5 transition-colors duration-300 hover:border-sun-400/30 hover:bg-white sm:flex-row sm:items-start"
                  >
                    <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-navy-900 text-sm font-semibold text-sun-400 shadow-[0_0_0_6px_#fff]">
                      {step.step}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-navy-900">
                        {step.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-navy-600">
                        {step.description}
                      </p>
                    </div>
                  </GlowCard>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={processSteps.length * 70}>
            <div className="mt-12">
              <PageCta
                eyebrow="Typical timeline"
                title="Installation completed in 5 days"
                description="From the moment your project starts, our technicians work efficiently to get your system installed, tested, and ready for net metering."
                primaryLabel="Start With a Free Site Visit"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

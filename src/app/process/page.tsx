import type { Metadata } from "next";
import { Button, PageHero } from "@/components/ui";
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

      <section className="section-pad">
        <div className="mx-auto max-w-3xl px-6 sm:px-8">
          <div className="relative">
            <div className="absolute left-[23px] top-3 bottom-3 hidden w-px bg-navy-900/10 sm:block" />
            <div className="space-y-4">
              {processSteps.map((step, i) => (
                <Reveal key={step.step} delay={i * 70}>
                  <GlowCard className="relative flex flex-col gap-4 rounded-lg border border-navy-900/8 bg-white p-5 sm:flex-row sm:items-start sm:pl-5">
                    <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-navy-900 text-[13px] font-semibold text-sun-400">
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
            <div className="mt-12 rounded-lg bg-navy-900 p-8 text-center text-white">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-sun-400">
                Typical timeline
              </p>
              <h3 className="mt-2 text-xl font-semibold">
                Installation completed in 5 days
              </h3>
              <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-navy-300">
                From the moment your project starts, our technicians work
                efficiently to get your system installed, tested, and ready
                for net metering.
              </p>
              <div className="mt-6 flex justify-center">
                <Button href="/contact" variant="primary">
                  Start With a Free Site Visit
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

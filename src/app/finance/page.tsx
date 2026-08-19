import type { Metadata } from "next";
import { Button, PageHero, SectionHeading } from "@/components/ui";
import { BankIcon, CheckIcon, ShieldIcon } from "@/components/icons";
import { Reveal } from "@/components/Reveal";
import { GlowCard } from "@/components/GlowCard";

export const metadata: Metadata = {
  title: "Finance & Subsidy Guidance | Suryajyot Solar",
  description:
    "Explore government subsidy schemes and nationalised bank finance options for your rooftop solar installation with Suryajyot Solar.",
};

const financePoints = [
  "Guidance on central and state government subsidy schemes for residential rooftop solar",
  "Support through the complete subsidy application process",
  "Easy EMI and finance options via nationalised banks",
  "Transparent guidance with no hidden charges",
];

export default function FinancePage() {
  return (
    <>
      <PageHero
        eyebrow="Finance & Subsidy"
        title="Make solar affordable with finance and subsidy support"
        description="We help you explore available subsidy schemes and nationalised bank finance options."
        image="https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=1600&q=80"
      />

      <section className="section-pad">
        <div className="mx-auto grid max-w-7xl gap-5 px-6 sm:px-8 lg:grid-cols-2">
          <Reveal>
            <GlowCard dark className="rounded-lg bg-navy-900 p-8 text-white">
              <span className="flex h-11 w-11 items-center justify-center rounded-md bg-white/8 text-sun-400">
                <BankIcon className="h-5 w-5" />
              </span>
              <h3 className="mt-6 text-xl font-semibold">Bank Finance</h3>
              <p className="mt-3 text-sm leading-relaxed text-navy-300">
                We work with nationalised banks to help you access EMI and
                finance options for your solar investment, so upfront cost is
                never a barrier to switching to solar.
              </p>
            </GlowCard>
          </Reveal>
          <Reveal delay={80}>
            <GlowCard className="rounded-lg border border-navy-900/8 bg-white p-8">
              <span className="flex h-11 w-11 items-center justify-center rounded-md bg-navy-900 text-sun-400">
                <ShieldIcon className="h-5 w-5" />
              </span>
              <h3 className="mt-6 text-xl font-semibold text-navy-900">
                Subsidy Guidance
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-navy-600">
                Suryajyot Solar helps you explore available central and state
                government subsidy schemes for residential rooftop solar, and
                guides you through the application process.
              </p>
            </GlowCard>
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="mx-auto max-w-3xl px-6 sm:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="How We Help"
              title="What our finance and subsidy support covers"
            />
          </Reveal>
          <div className="mt-10 space-y-3">
            {financePoints.map((point, i) => (
              <Reveal key={point} delay={i * 60}>
                <GlowCard className="flex items-start gap-3 rounded-lg border border-navy-900/8 bg-white p-4">
                  <CheckIcon className="mt-0.5 h-4.5 w-4.5 shrink-0 text-sun-600" />
                  <p className="text-sm font-medium leading-relaxed text-navy-700">
                    {point}
                  </p>
                </GlowCard>
              </Reveal>
            ))}
          </div>

          <Reveal delay={financePoints.length * 60}>
            <div className="mt-8 rounded-lg border border-navy-900/8 bg-navy-50 p-5 text-sm leading-relaxed text-navy-600">
              <strong className="font-semibold text-navy-900">Please note:</strong>{" "}
              Subsidy eligibility and amount are determined by MNRE / government
              guidelines and may change without notice. Final subsidy amount,
              eligibility, and disbursal timelines are subject to government
              approval and are not guaranteed by Suryajyot Solar. Finance
              approval is subject to the respective bank&apos;s terms and
              conditions.
            </div>
          </Reveal>

          <div className="mt-10 flex justify-center">
            <Button href="/contact" variant="primary">
              Get Subsidy Guidance
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

import Image from "next/image";
import type { Metadata } from "next";
import { Button, PageCta, PageHero, SectionHeading, StatCard } from "@/components/ui";
import { BoltIcon, ShieldIcon, SunIcon } from "@/components/icons";
import { Reveal } from "@/components/Reveal";
import { GlowCard } from "@/components/GlowCard";
import { SolarBackground } from "@/components/SolarBackground";
import { site, stats } from "@/lib/content";

export const metadata: Metadata = {
  title: "About Us | Suryajyot Solar",
  description:
    "Founded in 2024 by Shubham Chandrakant Bhosale, Suryajyot Solar has completed 50+ rooftop solar installations across Kolhapur District.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Suryajyot Solar"
        title="Making solar simple, reliable, and local"
        description="Clean energy for every home and business in Kolhapur District."
        image="https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=1600&q=80"
      />

      <section className="section-pad">
        <div className="section-container grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal className="relative">
            <div className="overflow-hidden rounded-2xl">
              <Image
                src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1100&q=80"
                alt="Solar panel field under bright sky"
                width={900}
                height={700}
                className="h-[340px] w-full object-cover sm:h-[420px]"
              />
            </div>
            <div className="glass-card absolute -bottom-5 right-4 w-52 rounded-xl p-4 sm:right-6">
              <SunIcon className="h-5 w-5 text-sun-600" />
              <p className="mt-2 text-sm font-semibold text-navy-900">
                Founded {site.yearStarted}
              </p>
              <p className="text-xs text-navy-500">By {site.founder}</p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <SectionHeading
              align="left"
              eyebrow="Our Story"
              title="Trusted solar partner across Kolhapur District"
            />
            <p className="mt-5 text-[15px] leading-relaxed text-navy-600">
              Founded in {site.yearStarted} by {site.founder}, {site.name}{" "}
              was built with a simple purpose: to make clean, reliable solar
              energy accessible to every home and business in{" "}
              {site.serviceArea}. In a short span, we have completed{" "}
              {site.installations} solar installations, helping customers
              reduce their electricity bills while contributing to a greener
              future.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-navy-600">
              We believe switching to solar shouldn&apos;t be complicated.
              That is why we handle the entire journey — from the first site
              visit and quotation to documentation, installation, and net
              metering — with transparency and quality workmanship at every
              step.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                { label: "Experience", value: `${site.experienceYears} Years` },
                { label: "Service Area", value: site.serviceArea },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-navy-900/8 bg-navy-50/50 px-4 py-3"
                >
                  <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-navy-400">
                    {item.label}
                  </p>
                  <p className="mt-0.5 text-sm font-semibold text-navy-900">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
            <Button href={site.whatsappHref} variant="primary" className="mt-7">
              Start Your Solar Journey
            </Button>
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden py-16">
        <div className="mesh-navy absolute inset-0" />
        <div className="grid-texture absolute inset-0 opacity-20" />
        <SolarBackground compact />
        <div className="section-container relative">
          <div className="grid overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] sm:grid-cols-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 70}>
                <div
                  className={
                    i < stats.length - 1 ? "sm:border-r sm:border-white/10" : ""
                  }
                >
                  <StatCard value={s.value} label={s.label} />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="section-container">
          <div className="grid gap-5 lg:grid-cols-2">
            <Reveal>
              <GlowCard dark className="h-full rounded-2xl bg-navy-900 p-8 text-white">
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-white/10 text-sun-400">
                  <ShieldIcon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-xl font-semibold">Our Mission</h3>
                <p className="mt-3 text-sm leading-relaxed text-navy-300">
                  To become a trusted solar energy provider by promoting clean
                  energy and building a sustainable future.
                </p>
              </GlowCard>
            </Reveal>
            <Reveal delay={80}>
              <GlowCard className="h-full rounded-2xl surface-card p-8">
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-navy-50 text-sun-600">
                  <BoltIcon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-xl font-semibold text-navy-900">
                  Why We Do This
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-navy-600">
                  We believe switching to solar shouldn&apos;t be complicated.
                  We handle the entire journey — site visit, quotation,
                  documentation, installation, and net metering — with
                  transparency and quality workmanship at every step.
                </p>
              </GlowCard>
            </Reveal>
          </div>

          <Reveal delay={160}>
            <div className="mt-10">
              <PageCta
                title="Ready to start your solar journey?"
                description="Book a free site visit. Our local team will assess your roof and share a clear quotation."
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

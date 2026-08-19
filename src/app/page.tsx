import Image from "next/image";
import { Button, Eyebrow, SectionHeading } from "@/components/ui";
import {
  BankIcon,
  CheckIcon,
  ClockIcon,
  ShieldIcon,
  BoltIcon,
  SunIcon,
  serviceIconMap,
} from "@/components/icons";
import { Reveal } from "@/components/Reveal";
import { Marquee } from "@/components/Marquee";
import { HeroHeadline } from "@/components/HeroHeadline";
import { GlowCard } from "@/components/GlowCard";
import { SolarBackground } from "@/components/SolarBackground";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { WaveDivider } from "@/components/WaveDivider";
import {
  galleryImages,
  processSteps,
  services,
  site,
  stats,
  warranties,
  whyChooseUs,
} from "@/lib/content";

const heroHighlights = [
  "Free site visit & quotation",
  "Net metering support",
  "Finance & subsidy guidance",
];

const statIcons = [CheckIcon, ClockIcon, ShieldIcon, BoltIcon];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="mesh-navy absolute inset-0" />
        <div className="grid-texture absolute inset-0 opacity-20" />
        <div className="noise-overlay" />

        {/* Animated solar-themed background */}
        <SolarBackground />

        <div className="section-container relative pb-20 pt-10 sm:pt-14 lg:pb-24 lg:pt-16">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <Reveal>
              <span className="hero-badge">
                <SunIcon className="h-3.5 w-3.5" />
                Kolhapur District
              </span>
              <HeroHeadline />
              <p className="mt-4 max-w-lg text-[15px] leading-[1.7] text-navy-200 sm:text-base">
                End-to-end rooftop solar for homes, businesses, and industries.
                One local team handles assessment, installation, and net
                metering across {site.serviceArea}.
              </p>

              <ul className="mt-5 space-y-2">
                {heroHighlights.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-navy-200">
                    <CheckIcon className="h-4 w-4 shrink-0 text-sun-400" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button href={site.whatsappHref} variant="primary">
                  Book a Free Site Visit
                </Button>
                <Button
                  href={site.phoneHref}
                  variant="outline"
                  className="!border-white/25 !bg-white/5 !text-white hover:!border-white hover:!bg-white hover:!text-navy-900"
                >
                  Call {site.phone}
                </Button>
              </div>
            </Reveal>

            <Reveal delay={100} className="relative">
              <div className="animate-spin-slow aura-ring pointer-events-none absolute -inset-6 -z-10 rounded-[2rem] opacity-70" />
              <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-[0_32px_64px_-24px_rgba(0,0,0,0.55)]">
                <Image
                  src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1400&q=80"
                  alt="Rooftop solar panel installation under sunlight"
                  width={900}
                  height={620}
                  priority
                  className="h-[260px] w-full object-cover sm:h-[320px] lg:h-[360px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-navy-900/10 to-transparent" />
              </div>

              <div className="absolute -bottom-5 left-4 right-4 grid grid-cols-2 gap-3 sm:-bottom-6 sm:left-6 sm:right-6">
                <div className="surface-card rounded-xl p-4">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-navy-400">
                    Panel Warranty
                  </p>
                  <p className="mt-1 text-sm font-semibold text-navy-900">
                    30 Years Performance
                  </p>
                </div>
                <div className="surface-card rounded-xl p-4">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-navy-400">
                    Installation
                  </p>
                  <p className="mt-1 text-sm font-semibold text-navy-900">
                    Completed in 5 Days
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        <WaveDivider className="absolute bottom-0 left-0 text-background" />
      </section>

      {/* STATS */}
      <section className="relative z-10 -mt-1 bg-background pb-4 pt-2">
        <div className="section-container">
          <div className="grid grid-cols-2 overflow-hidden rounded-2xl border border-navy-900/8 bg-white shadow-[0_20px_50px_-28px_rgba(11,18,32,0.2)] lg:grid-cols-4">
            {stats.map((s, i) => {
              const Icon = statIcons[i % statIcons.length];
              return (
                <div
                  key={s.label}
                  className={`px-5 py-8 text-center ${
                    i < stats.length - 1 ? "lg:border-r lg:border-navy-900/8" : ""
                  } ${i % 2 === 0 ? "border-r border-navy-900/8 lg:border-r" : ""} ${
                    i < 2 ? "border-b border-navy-900/8 lg:border-b-0" : ""
                  }`}
                >
                  <span className="mx-auto flex h-9 w-9 items-center justify-center rounded-lg bg-sun-50 text-sun-600">
                    <Icon className="h-4.5 w-4.5" />
                  </span>
                  <AnimatedCounter
                    value={s.value}
                    className="mt-3 block text-3xl font-semibold text-navy-900"
                  />
                  <p className="mt-2 text-[11px] font-medium uppercase tracking-[0.14em] text-navy-400">
                    {s.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Marquee />

      {/* SERVICES */}
      <section className="section-pad bg-navy-50/60">
        <div className="section-container">
          <Reveal>
            <SectionHeading
              eyebrow="What We Offer"
              title="Complete solar solutions for every need"
              description="From residential rooftops to industrial installations — professional workmanship and reliable after-sales support."
            />
          </Reveal>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {services.slice(0, 3).map((service, i) => {
              const Icon = serviceIconMap[service.icon];
              return (
                <Reveal key={service.slug} delay={i * 70}>
                  <GlowCard className="group h-full overflow-hidden rounded-2xl surface-card">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        sizes="(min-width: 1280px) 33vw, 50vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-900/75 to-transparent" />
                      <span className="absolute bottom-4 left-4 flex h-10 w-10 items-center justify-center rounded-lg bg-white/15 text-sun-400 backdrop-blur">
                        <Icon className="h-5 w-5" />
                      </span>
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-navy-900">
                        {service.title}
                      </h3>
                      <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-navy-500">
                        {service.description}
                      </p>
                    </div>
                  </GlowCard>
                </Reveal>
              );
            })}
          </div>

          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            {services.slice(3).map((service, i) => {
              const Icon = serviceIconMap[service.icon];
              return (
                <Reveal key={service.slug} delay={(i + 3) * 70}>
                  <GlowCard className="flex h-full gap-5 rounded-2xl surface-card p-5 sm:items-start">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-navy-900 text-sun-400">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="text-base font-semibold text-navy-900">
                        {service.title}
                      </h3>
                      <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-navy-500">
                        {service.description}
                      </p>
                    </div>
                  </GlowCard>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="relative overflow-hidden section-pad bg-white">
        <div className="pointer-events-none absolute -left-24 top-1/3 h-72 w-72 rounded-full bg-sun-500/8 blur-3xl" />
        <div className="section-container relative">
          <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
            <Reveal className="relative order-2 lg:order-1">
              <div className="overflow-hidden rounded-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=1200&q=80"
                  alt="Solar panels on a commercial rooftop at sunset"
                  width={900}
                  height={700}
                  className="aspect-[5/4] w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-5 -right-2 w-44 rounded-xl border border-navy-900/8 bg-white p-5 shadow-[0_16px_40px_-20px_rgba(11,18,32,0.25)] sm:right-4">
                <AnimatedCounter
                  value={site.installations}
                  className="block text-3xl font-semibold text-sun-600"
                />
                <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.14em] text-navy-400">
                  Installations Done
                </p>
              </div>
            </Reveal>

            <Reveal delay={100} className="order-1 lg:order-2">
              <Eyebrow>Who We Are</Eyebrow>
              <h2 className="mt-4 text-[30px] font-semibold leading-tight tracking-tight text-navy-900 sm:text-[38px]">
                Trusted solar partner across Kolhapur District
              </h2>
              <p className="mt-5 text-[15px] leading-relaxed text-navy-600">
                Founded in {site.yearStarted} by {site.founder}, {site.name}{" "}
                makes clean, reliable solar energy accessible to every home and
                business in {site.serviceArea}. We have completed{" "}
                {site.installations} installations with transparent pricing and
                quality workmanship.
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  { label: "Experience", value: `${site.experienceYears} Years` },
                  { label: "Service Area", value: site.serviceArea },
                  { label: "Founded", value: String(site.yearStarted) },
                  { label: "Founder", value: site.founder },
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
            </Reveal>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="relative overflow-hidden section-pad">
        <div className="mesh-navy absolute inset-0" />
        <div className="grid-texture absolute inset-0 opacity-15" />

        <div className="section-container relative">
          <Reveal>
            <SectionHeading
              eyebrow="Why Choose Us"
              title="Why customers trust Suryajyot Solar"
              light
              description="Local expertise, certified installation, and support you can count on after handover."
            />
          </Reveal>

          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((item, i) => (
              <Reveal key={item} delay={i * 45}>
                <GlowCard
                  dark
                  ring={false}
                  className="flex h-full items-start gap-3 rounded-xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm transition-colors duration-300 hover:border-sun-400/25 hover:bg-white/[0.07]"
                >
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-sun-500/20 text-sun-400">
                    <CheckIcon className="h-4 w-4" />
                  </span>
                  <p className="text-sm leading-relaxed text-navy-200">{item}</p>
                </GlowCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section-pad bg-white">
        <div className="section-container">
          <Reveal>
            <SectionHeading
              eyebrow="How It Works"
              title="Your solar journey in 5 clear steps"
              description="A simple, transparent process from your first enquiry to a working system."
            />
          </Reveal>

          <div className="mt-14 space-y-4">
            {processSteps.map((step, i) => (
              <Reveal key={step.step} delay={i * 60}>
                <GlowCard
                  ring={false}
                  className="flex flex-col gap-4 rounded-2xl border border-navy-900/8 bg-navy-50/40 p-5 transition-colors duration-300 hover:border-sun-400/30 hover:bg-white sm:flex-row sm:items-center sm:gap-6"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-navy-900 text-sm font-semibold text-sun-400">
                    {step.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base font-semibold text-navy-900">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-navy-500">
                      {step.description}
                    </p>
                  </div>
                </GlowCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="section-pad bg-navy-50/60">
        <div className="section-container">
          <Reveal>
            <SectionHeading
              eyebrow="Our Work"
              title="Projects across Kolhapur District"
              description="Residential, commercial, and industrial installations delivered by our local team."
            />
          </Reveal>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {galleryImages.slice(0, 6).map((img, i) => (
              <Reveal
                key={img.src}
                delay={(i % 3) * 60}
                className={i === 0 ? "sm:col-span-2 lg:col-span-2 lg:row-span-2" : ""}
              >
                <div className="group relative h-full min-h-[220px] overflow-hidden rounded-2xl">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={800}
                    height={i === 0 ? 640 : 480}
                    className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${
                      i === 0 ? "h-full min-h-[280px] lg:min-h-[460px]" : "h-56"
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/85 via-navy-900/15 to-transparent" />
                  <p className="absolute bottom-4 left-4 right-4 text-sm font-medium text-white">
                    {img.caption}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WARRANTY + CTA */}
      <section className="section-pad bg-white">
        <div className="section-container">
          <Reveal>
            <SectionHeading
              eyebrow="Warranty & Finance"
              title="Backed by strong warranties and finance support"
            />
          </Reveal>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {warranties.map((w, i) => (
              <Reveal key={w.label} delay={i * 50}>
                <div className="rounded-2xl border border-navy-900/8 bg-white p-6 text-center shadow-[0_8px_24px_-16px_rgba(11,18,32,0.12)]">
                  <ShieldIcon className="mx-auto h-6 w-6 text-sun-600" />
                  <AnimatedCounter
                    value={w.value}
                    className="mt-3 block text-xl font-semibold text-navy-900"
                  />
                  <p className="mt-2 text-[11px] font-medium uppercase tracking-[0.12em] text-navy-400">
                    {w.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200}>
            <div className="relative mt-10 overflow-hidden rounded-2xl bg-navy-900 px-8 py-10 sm:px-12 sm:py-12">
              <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-sun-500/20 blur-3xl" />
              <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                <div className="max-w-xl">
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-white/10 text-sun-400">
                      <BankIcon className="h-5 w-5" />
                    </span>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-sun-400">
                      Finance Available
                    </p>
                  </div>
                  <h3 className="mt-4 text-2xl font-semibold text-white sm:text-[28px]">
                    Ready to start saving with solar?
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy-300">
                    Get a free site visit, quotation, and guidance on bank finance
                    and government subsidy schemes.
                  </p>
                </div>
                <div className="flex shrink-0 flex-col gap-3 sm:items-end">
                  <Button href={site.whatsappHref} variant="primary">
                    Book Free Site Visit
                  </Button>
                  <Button
                    href={site.phoneHref}
                    variant="outline"
                    className="!border-white/25 !bg-transparent !text-white hover:!bg-white hover:!text-navy-900"
                  >
                    Call {site.phone}
                  </Button>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

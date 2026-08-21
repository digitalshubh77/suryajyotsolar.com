import Image from "next/image";
import { Button, Eyebrow, SectionHeading } from "@/components/ui";
import {
  BankIcon,
  CheckIcon,
  ClockIcon,
  ShieldIcon,
  BoltIcon,
  serviceIconMap,
} from "@/components/icons";
import { Reveal } from "@/components/Reveal";
import { Marquee } from "@/components/Marquee";
import { HeroHeadline } from "@/components/HeroHeadline";
import { GlowCard } from "@/components/GlowCard";
import { SolarBackground } from "@/components/SolarBackground";
import { HeroVideoBackground } from "@/components/HeroVideoBackground";
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
      <section className="relative flex min-h-[88vh] flex-col overflow-hidden lg:min-h-[92vh]">
        <HeroVideoBackground />
        <div className="grid-texture absolute inset-0 z-[1] opacity-15" />
        <div className="noise-overlay z-[1] opacity-40" />
        <SolarBackground />

        <div className="section-container relative z-[2] flex flex-1 items-start pb-28 pt-10 sm:pb-32 sm:pt-14 lg:items-center lg:pb-36">
          <div className="grid w-full grid-cols-1 lg:grid-cols-2 lg:gap-16">
            <Reveal className="w-full max-w-xl justify-self-start text-left">
              <span className="hero-badge">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-sun-400 opacity-60 animate-pulse-dot" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-sun-400" />
                </span>
                Serving {site.serviceArea}
              </span>

              <HeroHeadline />

              <p className="mt-5 max-w-lg text-left text-[15px] leading-[1.75] text-white/80 sm:text-base">
                End-to-end rooftop solar for homes, businesses, and industries —
                assessment, installation, and net metering by one local team.
              </p>

              <ul className="mt-7 space-y-2.5 text-left">
                {heroHighlights.map((item) => (
                  <li
                    key={item}
                    className="flex items-center justify-start gap-2.5 text-sm text-white/75"
                  >
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sun-500/20">
                      <CheckIcon className="h-3.5 w-3.5 text-sun-400" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-9 flex flex-col items-start gap-3 sm:flex-row">
                <Button href={site.whatsappHref} variant="primary">
                  Book a Free Site Visit
                </Button>
                <Button
                  href={site.phoneHref}
                  variant="outline"
                  className="!border-white/30 !bg-white/10 !text-white backdrop-blur-sm hover:!border-white hover:!bg-white hover:!text-navy-900"
                >
                  Call {site.phone}
                </Button>
              </div>
            </Reveal>
            {/* Right column empty — video / sun animation stays visible */}
            <div className="hidden lg:block" aria-hidden />
          </div>
        </div>

        <WaveDivider className="absolute bottom-0 left-0 z-[2] text-background" />
      </section>

      {/* STATS — pulled up over hero edge */}
      <section className="relative z-10 -mt-6 bg-transparent pb-2 sm:-mt-8">
        <div className="section-container">
          <div className="grid grid-cols-2 overflow-hidden rounded-2xl border border-navy-900/8 bg-white shadow-[0_24px_60px_-28px_rgba(6,37,56,0.28)] lg:grid-cols-4">
            {stats.map((s, i) => {
              const Icon = statIcons[i % statIcons.length];
              return (
                <div
                  key={s.label}
                  className={`px-5 py-7 text-center sm:py-8 ${
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
      <section className="section-pad bg-navy-50/50">
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
                    <div className="relative h-52 overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        sizes="(min-width: 1280px) 33vw, 50vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-navy-900/20 to-transparent" />
                      <span className="absolute bottom-4 left-4 flex h-11 w-11 items-center justify-center rounded-xl bg-sun-500 text-white shadow-lg">
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
                  <GlowCard className="flex h-full gap-5 rounded-2xl surface-card p-5 transition-colors hover:border-sun-500/25 sm:items-start">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-navy-700 text-sun-400">
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
        <div className="pointer-events-none absolute -left-24 top-1/3 h-72 w-72 rounded-full bg-sun-500/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-16 bottom-0 h-64 w-64 rounded-full bg-navy-700/8 blur-3xl" />
        <div className="section-container relative">
          <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
            <Reveal className="relative order-2 lg:order-1">
              <div className="overflow-hidden rounded-2xl shadow-[0_28px_60px_-32px_rgba(6,37,56,0.35)]">
                <Image
                  src="https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=1200&q=80"
                  alt="Solar panels on a commercial rooftop at sunset"
                  width={900}
                  height={700}
                  className="aspect-[5/4] w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-5 -right-2 w-44 rounded-xl border border-navy-900/8 bg-white p-5 shadow-[0_16px_40px_-20px_rgba(6,37,56,0.28)] sm:right-4">
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
                    className="rounded-xl border border-navy-900/8 bg-navy-50/60 px-4 py-3.5"
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
              <Button href={site.whatsappHref} variant="primary" className="mt-8">
                Talk to Our Team
              </Button>
            </Reveal>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="relative overflow-hidden section-pad">
        <div className="mesh-navy absolute inset-0" />
        <div className="grid-texture absolute inset-0 opacity-15" />
        <SolarBackground compact />

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
                  className="flex h-full items-start gap-3 rounded-xl border border-white/10 bg-white/[0.05] p-5 backdrop-blur-sm transition-colors duration-300 hover:border-sun-400/30 hover:bg-white/[0.09]"
                >
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-sun-500/25 text-sun-300">
                    <CheckIcon className="h-4 w-4" />
                  </span>
                  <p className="text-sm leading-relaxed text-navy-100">{item}</p>
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

          <div className="relative mx-auto mt-14 max-w-3xl space-y-4">
            <div className="pointer-events-none absolute left-6 top-6 hidden h-[calc(100%-3rem)] w-px bg-gradient-to-b from-sun-500 via-sun-300 to-transparent sm:block" />
            {processSteps.map((step, i) => (
              <Reveal key={step.step} delay={i * 60}>
                <GlowCard
                  ring={false}
                  className="flex flex-col gap-4 rounded-2xl border border-navy-900/8 bg-navy-50/50 p-5 transition-colors duration-300 hover:border-sun-500/30 hover:bg-white sm:flex-row sm:items-center sm:gap-6"
                >
                  <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-navy-700 text-sm font-semibold text-sun-400 shadow-[0_0_0_6px_#fff]">
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
      <section className="section-pad bg-navy-50/50">
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
                <div className="rounded-2xl border border-navy-900/8 bg-navy-50/40 p-6 text-center transition-colors hover:border-sun-500/25 hover:bg-white hover:shadow-[0_12px_32px_-20px_rgba(6,37,56,0.2)]">
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
              <SolarBackground compact />
              <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-sun-500/25 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-20 -left-10 h-48 w-48 rounded-full bg-[rgba(252,168,24,0.15)] blur-3xl" />
              <div className="relative z-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                <div className="max-w-xl">
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-sun-500/20 text-sun-400">
                      <BankIcon className="h-5 w-5" />
                    </span>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-sun-400">
                      Finance Available
                    </p>
                  </div>
                  <h3 className="mt-4 text-2xl font-semibold text-white sm:text-[28px]">
                    Ready to start saving with solar?
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy-200">
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

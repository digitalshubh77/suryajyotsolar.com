import Image from "next/image";
import { Button, Eyebrow, SectionHeading } from "@/components/ui";
import {
  BankIcon,
  CheckIcon,
  ShieldIcon,
  SunIcon,
  serviceIconMap,
} from "@/components/icons";
import { Reveal } from "@/components/Reveal";
import { Marquee } from "@/components/Marquee";
import { HeroHeadline } from "@/components/HeroHeadline";
import { GlowCard } from "@/components/GlowCard";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import {
  galleryImages,
  panelBrands,
  processSteps,
  services,
  site,
  stats,
  warranties,
  whyChooseUs,
} from "@/lib/content";

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="mesh-navy absolute inset-0" />
        <div className="grid-texture absolute inset-0 opacity-25" />
        <div className="noise-overlay" />
        <div className="pointer-events-none absolute -left-24 top-10 h-80 w-80 rounded-full bg-sun-500/20 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-14 px-6 pb-24 pt-16 sm:px-8 sm:pt-20 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:pb-32 lg:pt-24">
          <Reveal>
            <Eyebrow light>Kolhapur District Solar Partner</Eyebrow>
            <HeroHeadline />
            <p className="mt-6 max-w-xl text-[15px] leading-[1.8] text-navy-200 sm:text-base">
              Complete rooftop solar for homes, businesses, and industries
              across {site.serviceArea}. Site assessment, system design,
              installation, and net metering — handled by one local team.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={site.whatsappHref} variant="primary">
                Book a Free Site Visit
              </Button>
              <Button
                href={site.phoneHref}
                variant="outline"
                className="!border-white/20 !bg-transparent !text-white hover:!border-white hover:!bg-white hover:!text-navy-900"
              >
                Call {site.phone}
              </Button>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-white/10 pt-6 text-[12px] text-navy-300">
              <span className="font-medium text-white">Trusted brands</span>
              {panelBrands.map((brand) => (
                <span key={brand} className="tracking-wide">
                  {brand}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120} className="relative">
            <div className="absolute -inset-3 rounded-2xl border border-sun-500/25" />
            <div className="relative overflow-hidden rounded-2xl">
              <Image
                src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1400&q=80"
                alt="Rooftop solar panel installation under sunlight"
                width={900}
                height={1000}
                priority
                className="h-[400px] w-full object-cover sm:h-[500px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/75 via-navy-900/10 to-transparent" />
            </div>

            <div className="absolute bottom-5 left-5 right-5 hidden grid-cols-2 gap-3 sm:grid">
              <div className="rounded-xl border border-white/20 bg-white/95 p-4 backdrop-blur">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-navy-900 text-sun-400">
                    <SunIcon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-navy-400">
                      Panel Warranty
                    </p>
                    <p className="text-sm font-semibold text-navy-900">
                      30 Years Performance
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-xl border border-white/20 bg-white/95 p-4 backdrop-blur">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-navy-900 text-sun-400">
                    <ShieldIcon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-navy-400">
                      Typical Timeline
                    </p>
                    <p className="text-sm font-semibold text-navy-900">
                      Installed in 5 Days
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative z-10 -mt-10 px-6 sm:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-2 overflow-hidden rounded-2xl border border-navy-900/8 bg-white shadow-[0_20px_50px_-24px_rgba(11,18,32,0.22)] sm:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`px-4 py-7 text-center ${
                i < stats.length - 1 ? "sm:border-r sm:border-navy-900/8" : ""
              } ${i % 2 === 0 ? "border-r border-navy-900/8 sm:border-r" : ""} ${
                i < 2 ? "border-b border-navy-900/8 sm:border-b-0" : ""
              }`}
            >
              <AnimatedCounter
                value={s.value}
                className="block text-[28px] font-semibold text-navy-900 sm:text-[32px]"
              />
              <p className="mt-1.5 text-[11px] font-medium uppercase tracking-[0.14em] text-navy-400">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <Marquee />

      <section className="section-pad">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="What We Offer"
              title="Complete solar solutions, start to finish"
              description="Residential, commercial, and industrial installations with professional workmanship and reliable after-sales service."
            />
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => {
              const Icon = serviceIconMap[service.icon];
              return (
                <Reveal key={service.slug} delay={i * 70}>
                  <GlowCard className="group h-full overflow-hidden rounded-2xl border border-navy-900/8 bg-white">
                    <div className="relative h-44 overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        sizes="(min-width: 1024px) 33vw, 100vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-900/70 to-transparent" />
                      <span className="absolute bottom-3 left-3 flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-sun-400 backdrop-blur">
                        <Icon className="h-5 w-5" />
                      </span>
                    </div>
                    <div className="p-6">
                      <h3 className="text-[17px] font-semibold text-navy-900">
                        {service.title}
                      </h3>
                      <p className="mt-2.5 text-sm leading-relaxed text-navy-500">
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

      <section className="section-pad bg-white">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 sm:px-8 lg:grid-cols-2 lg:gap-20">
          <Reveal className="relative">
            <div className="overflow-hidden rounded-2xl">
              <Image
                src="https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=1200&q=80"
                alt="Solar panels installed on a commercial rooftop at sunset"
                width={900}
                height={700}
                className="h-[380px] w-full object-cover sm:h-[460px]"
              />
            </div>
            <div className="absolute -bottom-5 right-4 w-48 rounded-xl border border-navy-900/8 bg-white p-5 shadow-[0_16px_40px_-20px_rgba(11,18,32,0.25)] sm:right-6">
              <AnimatedCounter
                value={site.installations}
                className="block text-3xl font-semibold text-sun-600"
              />
              <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.14em] text-navy-400">
                Installations
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <Eyebrow>Who We Are</Eyebrow>
            <h2 className="mt-4 text-[28px] font-semibold tracking-tight text-navy-900 sm:text-[36px]">
              Building a sustainable future, one rooftop at a time
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-navy-600">
              Founded in {site.yearStarted} by {site.founder}, {site.name}{" "}
              was built to make clean, reliable solar energy accessible to
              every home and business in {site.serviceArea}. In a short span,
              we have completed {site.installations} installations, helping
              customers reduce electricity bills and contribute to a greener
              future.
            </p>
            <blockquote className="mt-7 border-l-2 border-sun-500 pl-5 text-[15px] leading-relaxed text-navy-700">
              To become a trusted solar energy provider by promoting clean
              energy and building a sustainable future.
            </blockquote>
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden section-pad">
        <div className="mesh-navy absolute inset-0" />
        <div className="grid-texture absolute inset-0 opacity-20" />

        <div className="relative mx-auto max-w-7xl px-6 sm:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Why Choose Us"
              title="A local team you can rely on"
              light
              description="From certified installation to after-sales support, here is what sets Suryajyot Solar apart."
            />
          </Reveal>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((item, i) => (
              <Reveal key={item} delay={i * 50}>
                <GlowCard
                  dark
                  className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.04] p-5"
                >
                  <CheckIcon className="mt-0.5 h-4.5 w-4.5 shrink-0 text-sun-400" />
                  <p className="text-sm leading-relaxed text-navy-200">{item}</p>
                </GlowCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="How It Works"
              title="A simple, transparent 5-step process"
              description="From your first enquiry to a fully functioning solar system."
            />
          </Reveal>

          <div className="relative mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
            <div className="absolute top-5 left-[8%] hidden h-px w-[84%] bg-navy-900/10 lg:block" />
            {processSteps.map((step, i) => (
              <Reveal key={step.step} delay={i * 70} className="relative text-center">
                <div className="relative mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-navy-900 text-[12px] font-semibold text-sun-400 ring-4 ring-white">
                  {step.step}
                </div>
                <h3 className="mt-5 text-sm font-semibold text-navy-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-navy-500">
                  {step.description}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Recent Work"
              title="Installations across Kolhapur District"
            />
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {galleryImages.slice(0, 6).map((img, i) => (
              <Reveal key={img.src} delay={(i % 3) * 70}>
                <div className="group relative overflow-hidden rounded-2xl">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={800}
                    height={560}
                    className="h-56 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-navy-900/10 to-transparent" />
                  <p className="absolute bottom-4 left-4 right-4 text-sm font-medium text-white">
                    {img.caption}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20 sm:pb-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {warranties.map((w, i) => (
              <Reveal key={w.label} delay={i * 60}>
                <GlowCard className="rounded-2xl border border-navy-900/8 bg-white p-6 text-center">
                  <ShieldIcon className="mx-auto h-6 w-6 text-sun-600" />
                  <AnimatedCounter
                    value={w.value}
                    className="mt-3 block text-xl font-semibold text-navy-900"
                  />
                  <p className="mt-1.5 text-[11px] font-medium uppercase tracking-[0.12em] text-navy-400">
                    {w.label}
                  </p>
                </GlowCard>
              </Reveal>
            ))}
          </div>

          <Reveal delay={warranties.length * 60}>
            <div className="mt-6 flex flex-col items-start justify-between gap-5 rounded-2xl bg-navy-900 p-8 text-white sm:flex-row sm:items-center">
              <div className="flex items-start gap-4 sm:items-center">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/8 text-sun-400">
                  <BankIcon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-lg font-semibold">
                    Nationalised bank finance available
                  </h3>
                  <p className="mt-1 text-sm text-navy-300">
                    Easy EMI options and subsidy guidance to make your switch
                    to solar affordable.
                  </p>
                </div>
              </div>
              <Button href={site.whatsappHref} variant="primary" className="shrink-0">
                Ask About Finance
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

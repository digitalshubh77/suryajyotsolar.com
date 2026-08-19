import Image from "next/image";
import type { Metadata } from "next";
import { Button, PageHero } from "@/components/ui";
import {
  BankIcon,
  BoltIcon,
  CheckIcon,
  ShieldIcon,
  SunIcon,
} from "@/components/icons";
import { Reveal } from "@/components/Reveal";
import { GlowCard } from "@/components/GlowCard";
import { whyChooseUs } from "@/lib/content";

export const metadata: Metadata = {
  title: "Why Choose Us | Suryajyot Solar",
  description:
    "50+ successful solar installations, trusted brands, up to 30 years panel warranty, and finance support through nationalised banks.",
};

const icons = [SunIcon, BoltIcon, ShieldIcon, ShieldIcon, ShieldIcon, BankIcon, SunIcon];

export default function WhyChooseUsPage() {
  return (
    <>
      <PageHero
        eyebrow="Why Choose Us"
        title="A local team committed to quality work"
        description="Trusted installations, honest guidance, and after-sales support across Kolhapur District."
        image="https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&w=1600&q=80"
      />

      <section className="section-pad">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 sm:px-8 lg:grid-cols-2 lg:gap-16">
          <Reveal className="relative order-2 lg:order-1">
            <div className="overflow-hidden rounded-lg">
              <Image
                src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1000&q=80"
                alt="Technicians working on a solar installation"
                width={900}
                height={1000}
                className="h-[380px] w-full object-cover sm:h-[480px]"
              />
            </div>
            <div className="absolute -bottom-5 right-4 w-52 rounded-md border border-navy-900/8 bg-white p-4 shadow-[0_16px_40px_-20px_rgba(11,18,32,0.25)] sm:right-6">
              <p className="text-sm font-semibold text-navy-900">
                Trusted by 50+ customers
              </p>
              <p className="mt-0.5 text-xs text-navy-500">Across Kolhapur District</p>
            </div>
          </Reveal>

          <div className="order-1 lg:order-2">
            <div className="space-y-3">
              {whyChooseUs.map((item, i) => {
                const Icon = icons[i % icons.length];
                return (
                  <Reveal key={item} delay={i * 50}>
                    <GlowCard className="group flex items-center gap-3.5 rounded-lg border border-navy-900/8 bg-white p-4">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-navy-50 text-navy-800">
                        <Icon className="h-5 w-5" />
                      </span>
                      <p className="text-sm font-medium leading-relaxed text-navy-800">
                        {item}
                      </p>
                      <CheckIcon className="ml-auto h-4.5 w-4.5 shrink-0 text-sun-600" />
                    </GlowCard>
                  </Reveal>
                );
              })}
            </div>
            <Button href="/contact" variant="primary" className="mt-7">
              Work With Us
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

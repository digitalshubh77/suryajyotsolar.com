import type { Metadata } from "next";
import { PageHero } from "@/components/ui";
import { ContactForm } from "@/components/ContactForm";
import {
  MailIcon,
  PhoneIcon,
  PinIcon,
  WhatsAppIcon,
} from "@/components/icons";
import { Reveal } from "@/components/Reveal";
import { GlowCard } from "@/components/GlowCard";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact Us | Suryajyot Solar",
  description:
    "Get in touch with Suryajyot Solar for a free site visit or quotation. Serving Kolhapur District.",
};

const contactCards = [
  {
    icon: PinIcon,
    label: "Office Address",
    value: site.address,
    href: undefined,
  },
  {
    icon: PhoneIcon,
    label: "Call Us",
    value: site.phone,
    href: site.phoneHref,
  },
  {
    icon: WhatsAppIcon,
    label: "WhatsApp",
    value: `${site.phone} / ${site.whatsappOffice} (Office)`,
    href: site.whatsappHref,
  },
  {
    icon: MailIcon,
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Speak with our Kolhapur team"
        description="Have questions about switching to solar? Request a free site visit or quotation — we are based locally and ready to help."
        image="https://images.unsplash.com/photo-1524397057410-1e775ed476f3?auto=format&fit=crop&w=1600&q=80"
      />

      <section id="site-visit" className="section-pad scroll-mt-24">
        <div
          id="quotation"
          className="mx-auto grid max-w-7xl gap-10 px-6 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start"
        >
          <div className="space-y-3">
            {contactCards.map((card, i) => {
              const Content = (
                <GlowCard className="group flex items-start gap-4 rounded-lg border border-navy-900/8 bg-white p-5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-navy-900 text-sun-400">
                    <card.icon className="h-4.5 w-4.5" />
                  </span>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-navy-400">
                      {card.label}
                    </p>
                    <p className="mt-1 text-sm font-medium leading-relaxed text-navy-900">
                      {card.value}
                    </p>
                  </div>
                </GlowCard>
              );
              return (
                <Reveal key={card.label} delay={i * 60}>
                  {card.href ? (
                    <a href={card.href} target="_blank" rel="noopener noreferrer">
                      {Content}
                    </a>
                  ) : (
                    Content
                  )}
                </Reveal>
              );
            })}

            <Reveal delay={contactCards.length * 60}>
              <div className="rounded-lg bg-navy-900 p-6 text-white">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-sun-400">
                  Service Area
                </p>
                <p className="mt-2 text-lg font-semibold">{site.serviceArea}</p>
                <p className="mt-2 text-sm leading-relaxed text-navy-300">
                  We serve residential, commercial, and industrial customers
                  throughout {site.serviceArea}.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={100}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}

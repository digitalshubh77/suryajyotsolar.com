import { canNavigate, navLinks, site } from "@/lib/content";
import { Link000 } from "@/components/ui/skiper-ui/skiper40";
import { Brand } from "./Brand";
import {
  FacebookIcon,
  InstagramIcon,
  MailIcon,
  PhoneIcon,
  PinIcon,
  WhatsAppIcon,
} from "./icons";

const exploreLinks = navLinks.filter((l) =>
  ["/", "/about", "/services", "/products", "/projects"].includes(l.href)
);
const companyLinks = navLinks.filter((l) =>
  ["/process", "/why-choose-us", "/finance", "/contact"].includes(l.href)
);

function FooterHeading({ children }: { children: string }) {
  return (
    <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white">
      <span className="mb-4 block h-[2px] w-8 rounded-full bg-sun-500" />
      {children}
    </h3>
  );
}

function FooterList({ items }: { items: { href: string; label: string }[] }) {
  return (
    <ul className="mt-5 space-y-3">
      {items.map((item) => (
        <li key={item.label}>
          {canNavigate(item.href) ? (
            <Link000
              href={item.href}
              className="w-fit text-sm text-navy-300 transition-colors hover:text-white"
            >
              {item.label}
            </Link000>
          ) : (
            <span
              className="cursor-not-allowed text-sm text-navy-500 opacity-50"
              title="Coming soon"
            >
              {item.label}
            </span>
          )}
        </li>
      ))}
    </ul>
  );
}

const socials = [
  { href: site.instagram, label: "Instagram", icon: InstagramIcon },
  { href: site.facebook, label: "Facebook", icon: FacebookIcon },
  { href: site.whatsappHref, label: "WhatsApp", icon: WhatsAppIcon },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-navy-900 text-navy-300">
      <div className="mesh-navy absolute inset-0" />
      <div className="grid-texture absolute inset-0 opacity-20" />
      <div className="pointer-events-none absolute -left-24 top-0 h-64 w-64 rounded-full bg-sun-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-0 h-56 w-56 rounded-full bg-sun-400/8 blur-3xl" />

      <div className="relative h-px bg-gradient-to-r from-transparent via-sun-500 to-transparent" />

      <div className="relative border-b border-white/8">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 py-9 sm:px-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-sun-400">
              Kolhapur District
            </p>
            <h2 className="mt-2 max-w-lg text-2xl font-semibold tracking-tight text-white sm:text-[28px]">
              Ready to start saving with rooftop solar?
            </h2>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-navy-300">
              Message us on WhatsApp or call our local team for a free site
              visit or quotation.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={site.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-lg bg-sun-500 px-5 py-3 text-[13px] font-semibold text-white transition-colors hover:bg-sun-600"
            >
              WhatsApp Us
            </a>
            <a
              href={site.phoneHref}
              className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-5 py-3 text-[13px] font-semibold text-white transition-colors hover:border-sun-400 hover:text-sun-400"
            >
              <PhoneIcon className="h-4 w-4" />
              {site.phone}
            </a>
          </div>
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-14 sm:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-x-8 lg:gap-y-0">
          <div className="sm:col-span-2 lg:col-span-4">
            <Brand variant="dark" size="footer" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-navy-300">
              Rooftop solar for homes, businesses, and industries across{" "}
              {site.serviceArea} — from site visit to net metering.
            </p>
            <div className="mt-6 flex items-center gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-navy-300 transition-colors hover:border-sun-400/50 hover:bg-sun-500/10 hover:text-sun-400"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <FooterHeading>Explore</FooterHeading>
            <FooterList items={exploreLinks} />
          </div>

          <div className="lg:col-span-2">
            <FooterHeading>Company</FooterHeading>
            <FooterList items={companyLinks} />
          </div>

          <div className="lg:col-span-4">
            <FooterHeading>Contact</FooterHeading>
            <ul className="mt-5 space-y-3">
              <li className="flex items-start gap-3 rounded-lg border border-white/8 bg-white/[0.03] p-3">
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-sun-500/15 text-sun-400">
                  <PinIcon className="h-4 w-4" />
                </span>
                <span className="text-sm leading-relaxed">{site.address}</span>
              </li>
              <li>
                <a
                  href={site.phoneHref}
                  className="flex items-center gap-3 rounded-lg border border-white/8 bg-white/[0.03] p-3 transition-colors hover:border-sun-400/30 hover:bg-white/[0.06]"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-sun-500/15 text-sun-400">
                    <PhoneIcon className="h-4 w-4" />
                  </span>
                  <span className="text-sm">
                    <span className="block text-[11px] uppercase tracking-[0.14em] text-navy-400">
                      Call
                    </span>
                    <span className="font-medium text-white">{site.phone}</span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="flex items-center gap-3 rounded-lg border border-white/8 bg-white/[0.03] p-3 transition-colors hover:border-sun-400/30 hover:bg-white/[0.06]"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-sun-500/15 text-sun-400">
                    <MailIcon className="h-4 w-4" />
                  </span>
                  <span className="text-sm">
                    <span className="block text-[11px] uppercase tracking-[0.14em] text-navy-400">
                      Email
                    </span>
                    <span className="font-medium text-white">{site.email}</span>
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/8">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-5 text-[12px] text-navy-400 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>
            &copy; {year} {site.name}. All rights reserved.
          </p>
          <p>Service Area: {site.serviceArea}</p>
        </div>
      </div>
    </footer>
  );
}

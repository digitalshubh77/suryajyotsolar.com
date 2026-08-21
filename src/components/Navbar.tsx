"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { canNavigate, navLinks, site } from "@/lib/content";
import { Brand } from "./Brand";
import {
  BankIcon,
  ChevronDownIcon,
  MailIcon,
  PhoneIcon,
  PinIcon,
  ShieldIcon,
  SunIcon,
  WhatsAppIcon,
} from "./icons";

const primaryHrefs = ["/", "/about", "/services", "/products", "/projects"];

const companyItems = [
  {
    href: "/process",
    label: "Process",
    desc: "Five steps from site visit to net metering",
    icon: SunIcon,
  },
  {
    href: "/why-choose-us",
    label: "Why Us",
    desc: "Local team, warranties, trusted brands",
    icon: ShieldIcon,
  },
  {
    href: "/finance",
    label: "Finance",
    desc: "Subsidy guidance and bank EMI options",
    icon: BankIcon,
  },
];

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

function NavItem({
  href,
  children,
  className,
}: {
  href: string;
  children: ReactNode;
  className: string;
}) {
  if (!canNavigate(href)) {
    return (
      <span className={`${className} cursor-not-allowed`} title="Coming soon">
        {children}
      </span>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lastPathname, setLastPathname] = useState(pathname);

  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setOpen(false);
    setMoreOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const primary = navLinks.filter((l) => primaryHrefs.includes(l.href));

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="sticky top-0 z-50"
    >
      <div className="hidden border-b border-white/10 bg-navy-900 lg:block">
        <div className="mx-auto flex h-9 max-w-7xl items-center justify-between px-6 text-[11px] text-navy-300 sm:px-8">
          <div className="flex min-w-0 items-center gap-4">
            <span className="flex items-center gap-1.5">
              <PinIcon className="h-3.5 w-3.5 shrink-0 text-sun-400" />
              {site.serviceArea}
            </span>
            <span className="h-3 w-px shrink-0 bg-white/15" />
            <a
              href={`mailto:${site.email}`}
              className="flex min-w-0 items-center gap-1.5 truncate hover:text-white"
            >
              <MailIcon className="h-3.5 w-3.5 shrink-0 text-sun-400" />
              <span className="truncate">{site.email}</span>
            </a>
          </div>
          <div className="flex shrink-0 items-center gap-4">
            <a href={site.phoneHref} className="flex items-center gap-1.5 font-medium hover:text-white">
              <PhoneIcon className="h-3.5 w-3.5 text-sun-400" />
              {site.phone}
            </a>
            <span className="h-3 w-px bg-white/15" />
            <a
              href={site.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-white"
            >
              <WhatsAppIcon className="h-3.5 w-3.5 text-sun-400" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div
        className={`border-b bg-white/95 backdrop-blur-md ${
          scrolled
            ? "border-navy-900/8 shadow-[0_8px_24px_-16px_rgba(11,18,32,0.2)]"
            : "border-navy-900/6"
        }`}
      >
        <div className="mx-auto flex h-[72px] max-w-7xl items-center gap-4 px-6 sm:h-20 sm:px-8">
          <div className="shrink-0">
            <Brand size="nav" />
          </div>

          <nav className="hidden h-full flex-1 items-center justify-center lg:flex">
            {primary.map((link) => {
              const active = isActive(pathname, link.href);
              const enabled = canNavigate(link.href);
              return (
                <NavItem
                  key={link.href}
                  href={link.href}
                  className={`relative flex h-full items-center px-2.5 text-[13px] font-medium whitespace-nowrap xl:px-3.5 ${
                    active && enabled
                      ? "text-navy-900"
                      : enabled
                        ? "text-navy-500 hover:text-navy-900"
                        : "text-navy-400"
                  }`}
                >
                  {link.label}
                  {active && enabled && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-x-2 bottom-0 h-[2px] bg-sun-500"
                      transition={{ type: "spring", stiffness: 500, damping: 35 }}
                    />
                  )}
                </NavItem>
              );
            })}

            <div
              className="relative flex h-full"
              onMouseEnter={() => setMoreOpen(true)}
              onMouseLeave={() => setMoreOpen(false)}
            >
              <button
                type="button"
                className="flex items-center gap-1 px-2.5 text-[13px] font-medium whitespace-nowrap text-navy-400 xl:px-3.5"
                aria-expanded={moreOpen}
              >
                Company
                <ChevronDownIcon
                  className={`h-3.5 w-3.5 transition-transform ${moreOpen ? "rotate-180" : ""}`}
                />
              </button>
              <AnimatePresence>
                {moreOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.16 }}
                    className="absolute left-1/2 top-full z-50 w-72 -translate-x-1/2 pt-1"
                  >
                    <div className="rounded-xl border border-navy-900/8 bg-white p-1.5 shadow-[0_20px_40px_-18px_rgba(11,18,32,0.3)]">
                      {companyItems.map((item) => {
                        const Icon = item.icon;
                        const enabled = canNavigate(item.href);
                        return (
                          <NavItem
                            key={item.href}
                            href={item.href}
                            className={`flex items-start gap-3 rounded-lg px-3 py-2.5 ${
                              enabled ? "hover:bg-navy-50" : "text-navy-400"
                            }`}
                          >
                            <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-navy-900 text-sun-400">
                              <Icon className="h-4 w-4" />
                            </span>
                            <span>
                              <span className="block text-[13px] font-semibold text-navy-900">
                                {item.label}
                                {!enabled && (
                                  <span className="ml-2 text-[10px] font-medium uppercase tracking-wider text-navy-400">
                                    Soon
                                  </span>
                                )}
                              </span>
                              <span className="mt-0.5 block text-[12px] text-navy-500">
                                {item.desc}
                              </span>
                            </span>
                          </NavItem>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          <div className="ml-auto flex shrink-0 items-center gap-2 sm:gap-3">
            <a
              href={site.phoneHref}
              className="hidden items-center gap-2 text-[13px] font-semibold text-navy-800 hover:text-sun-700 xl:flex"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-md bg-sun-50 text-sun-700">
                <PhoneIcon className="h-3.5 w-3.5" />
              </span>
              {site.phone}
            </a>
            <a
              href={site.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center rounded-md bg-sun-500 px-4 py-2 text-[13px] font-semibold text-white hover:bg-sun-600 lg:inline-flex"
            >
              Get a Quote
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
              aria-expanded={open}
              className="flex h-9 w-9 items-center justify-center rounded-md border border-navy-900/10 text-navy-800 lg:hidden"
            >
              <span className="relative block h-3.5 w-4.5">
                <span
                  className={`absolute left-0 top-0 h-0.5 w-4.5 bg-current transition-transform duration-300 ${
                    open ? "translate-y-[6px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`absolute left-0 top-[6px] h-0.5 w-4.5 bg-current transition-opacity duration-300 ${
                    open ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute left-0 top-3 h-0.5 w-4.5 bg-current transition-transform duration-300 ${
                    open ? "-translate-y-[6px] -rotate-45" : ""
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="overflow-hidden border-b border-navy-900/8 bg-white lg:hidden"
          >
            <nav className="mx-auto flex max-w-7xl flex-col px-6 py-3 sm:px-8">
              {navLinks.map((link) => {
                const active = isActive(pathname, link.href);
                const enabled = canNavigate(link.href);
                return (
                  <NavItem
                    key={link.href}
                    href={link.href}
                    className={`rounded-md px-3 py-2.5 text-sm font-medium ${
                      active && enabled
                        ? "bg-sun-50 text-sun-800"
                        : enabled
                          ? "text-navy-700"
                          : "text-navy-400"
                    }`}
                  >
                    {link.label}
                    {!enabled && (
                      <span className="ml-2 text-[10px] uppercase tracking-wider text-navy-400">
                        Soon
                      </span>
                    )}
                  </NavItem>
                );
              })}
              <div className="mt-2 grid grid-cols-2 gap-3 border-t border-navy-900/8 pt-3">
                <a
                  href={site.phoneHref}
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-navy-900/10 px-4 py-2.5 text-sm font-semibold text-navy-800"
                >
                  <PhoneIcon className="h-4 w-4" />
                  Call Us
                </a>
                <a
                  href={site.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-md bg-sun-500 px-4 py-2.5 text-sm font-semibold text-white"
                >
                  Get a Quote
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

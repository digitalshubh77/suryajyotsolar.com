"use client";

import { partnerBrands } from "@/lib/content";

const track = [...partnerBrands, ...partnerBrands];

export function Marquee() {
  return (
    <div className="border-y border-navy-900/6 bg-white py-8">
      <p className="mb-6 text-center text-[10px] font-semibold uppercase tracking-[0.22em] text-navy-400">
        Trusted equipment partners
      </p>
      <div className="group relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent sm:w-28" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent sm:w-28" />
        <div className="flex w-max animate-marquee items-center group-hover:[animation-play-state:paused]">
          {track.map((brand, i) => (
            <div
              key={`${brand.name}-${i}`}
              className="flex h-[72px] w-[200px] shrink-0 items-center justify-center px-4"
            >
              <div className="flex h-14 w-full items-center justify-center rounded-xl border border-navy-900/8 bg-navy-50/50 px-4">
                {/* Regular img: local SVGs render reliably (next/image is weaker for SVG). */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="h-9 w-auto max-w-[168px] object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

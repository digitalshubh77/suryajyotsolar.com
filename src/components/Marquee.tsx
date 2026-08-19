import Image from "next/image";
import { partnerBrands } from "@/lib/content";

const track = [...partnerBrands, ...partnerBrands];

export function Marquee() {
  return (
    <div className="border-y border-navy-900/6 bg-white py-7">
      <p className="mb-5 text-center text-[10px] font-semibold uppercase tracking-[0.22em] text-navy-400">
        Trusted equipment partners
      </p>
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent sm:w-28" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent sm:w-28" />
        <div className="flex w-max animate-marquee items-center">
          {track.map((brand, i) => (
            <div
              key={`${brand.name}-${i}`}
              className="flex h-10 items-center whitespace-nowrap px-8"
            >
              <span className="mr-8 h-px w-6 bg-navy-900/15" />
              {brand.logo ? (
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  width={130}
                  height={40}
                  className="h-7 w-auto object-contain opacity-70 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
                />
              ) : (
                <span className="text-[13px] font-semibold tracking-[0.06em] text-navy-500">
                  {brand.name}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

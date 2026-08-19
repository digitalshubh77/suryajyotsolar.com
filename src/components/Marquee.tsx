import { panelBrands, inverterBrands, batteryBrands } from "@/lib/content";

const brands = [...panelBrands, ...inverterBrands, ...batteryBrands];

export function Marquee() {
  const track = [...brands, ...brands];

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
              key={`${brand}-${i}`}
              className="flex items-center whitespace-nowrap px-8 text-[13px] font-semibold tracking-[0.06em] text-navy-500"
            >
              <span className="mr-8 h-px w-6 bg-navy-900/15" />
              {brand}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

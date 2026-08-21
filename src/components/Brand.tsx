import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/content";

const sizes = {
  nav: {
    width: 200,
    height: 120,
    className: "h-[52px] w-auto max-w-[160px] object-contain sm:h-[58px] sm:max-w-[190px]",
  },
  footer: {
    width: 280,
    height: 168,
    className: "h-[88px] w-auto max-w-[220px] object-contain sm:h-[104px] sm:max-w-[260px]",
  },
} as const;

export function Brand({
  variant = "light",
  size = "nav",
  showTagline = true,
}: {
  variant?: "light" | "dark";
  size?: "nav" | "footer";
  showTagline?: boolean;
}) {
  const dims = sizes[size];

  return (
    <Link
      href="/"
      className="group flex min-w-0 shrink-0 items-center"
      aria-label={site.name}
    >
      <Image
        src="/logo.png"
        alt={site.name}
        width={dims.width}
        height={dims.height}
        priority={size === "nav"}
        className={`${dims.className} ${
          variant === "dark" ? "brightness-110" : ""
        }`}
      />
      {showTagline ? <span className="sr-only">{site.tagline}</span> : null}
    </Link>
  );
}

import Link from "next/link";
import { site } from "@/lib/content";
import { LogoMark } from "./LogoMark";

export function Brand({
  variant = "light",
  showTagline = true,
}: {
  variant?: "light" | "dark";
  showTagline?: boolean;
}) {
  const dark = variant === "dark";

  return (
    <Link href="/" className="group flex min-w-0 items-center gap-2.5">
      <LogoMark className="h-9 w-9 shrink-0 sm:h-10 sm:w-10" />
      <span className="min-w-0 leading-tight">
        <span
          className={`block truncate font-display text-[14px] font-semibold tracking-tight sm:text-[15px] ${
            dark ? "text-white" : "text-navy-900"
          }`}
        >
          {site.name}
        </span>
        {showTagline && (
          <span
            className={`hidden truncate text-[10px] font-medium uppercase tracking-[0.16em] sm:block ${
              dark ? "text-navy-300" : "text-navy-400"
            }`}
          >
            {site.tagline}
          </span>
        )}
      </span>
    </Link>
  );
}

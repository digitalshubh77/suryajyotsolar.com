export function WaveDivider({
  className = "text-white",
  flip = false,
}: {
  /** Tailwind text-color class — the wave is filled with `currentColor`, so match it to the section that follows. */
  className?: string;
  flip?: boolean;
}) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none block w-full overflow-hidden leading-[0] ${className} ${
        flip ? "-scale-y-100" : ""
      }`}
      style={{ marginBottom: "-1px" }}
    >
      <svg
        viewBox="0 0 1440 90"
        preserveAspectRatio="none"
        className="h-[45px] w-full sm:h-[70px]"
      >
        <path
          fill="currentColor"
          d="M0,32 C240,90 480,0 720,24 C960,48 1200,96 1440,40 L1440,90 L0,90 Z"
        />
      </svg>
    </div>
  );
}

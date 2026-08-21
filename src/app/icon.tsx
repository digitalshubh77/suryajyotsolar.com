import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

/** Browser tab favicon — simplified sun + panels for clarity at 32px. */
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0B1220",
          borderRadius: 8,
          border: "1.5px solid #C9963A",
        }}
      >
        <svg width="26" height="26" viewBox="0 0 64 64" fill="none">
          <g stroke="#E8B84A" strokeWidth="3.5" strokeLinecap="round">
            <path d="M32 6v7" />
            <path d="M48 14 43 19" />
            <path d="M54 30h-7" />
            <path d="M16 14 21 19" />
            <path d="M10 30h7" />
          </g>
          <circle cx="32" cy="28" r="9.5" fill="#E8B84A" />
          <path d="M11 41.5 32 35l21 6.5v5.5L32 41 11 47.5V41.5Z" fill="#F0D9A0" />
          <path d="M11 49 32 42.5l21 6.5v5L32 48 11 54.5V49Z" fill="#C9963A" />
        </svg>
      </div>
    ),
    { ...size },
  );
}

import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/** Apple touch icon — full brand mark at high resolution. */
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 180,
          height: 180,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0B1220",
          borderRadius: 40,
          border: "4px solid #C9963A",
        }}
      >
        <svg width="140" height="140" viewBox="0 0 64 64" fill="none">
          <g stroke="#E8B84A" strokeWidth="2.8" strokeLinecap="round">
            <path d="M32 7v6" />
            <path d="M47 14.5 42.8 18.7" />
            <path d="M53 30h-6" />
            <path d="M17 14.5 21.2 18.7" />
            <path d="M11 30h6" />
            <path d="M47 45.5 42.8 41.3" />
            <path d="M17 45.5 21.2 41.3" />
          </g>
          <circle cx="32" cy="28" r="9" fill="#E8B84A" />
          <circle cx="29.2" cy="25.4" r="2.6" fill="#FFF3C9" opacity="0.65" />
          <path d="M12 41.5 32 35.5l20 6v5.2L32 40.7 12 46.7V41.5Z" fill="#F0D9A0" />
          <path d="M12 48.2 32 42.2l20 6v5L32 47.2 12 53.2v-5Z" fill="#C9963A" />
          <path d="M12 54.5 32 48.5l20 6V58L32 52.5 12 58.5v-4Z" fill="#B8862A" />
        </svg>
      </div>
    ),
    { ...size },
  );
}

import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

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
        }}
      >
        <svg
          width="148"
          height="148"
          viewBox="0 0 64 64"
          fill="none"
        >
          <g stroke="#E8B84A" strokeWidth="2.4" strokeLinecap="round">
            <path d="M32 8.2v4.8" />
            <path d="M46.3 14.7 42.9 18" />
            <path d="M51.8 28h-4.8" />
            <path d="M46.3 41.3 42.9 38" />
            <path d="M17.7 14.7 21.1 18" />
            <path d="M12.2 28h4.8" />
            <path d="M17.7 41.3 21.1 38" />
          </g>
          <circle cx="32" cy="28" r="8.2" fill="#E8B84A" />
          <path
            d="M13 42.5 32 37l19 5.5v4.2L32 41.3 13 46.7V42.5Z"
            fill="#E9D09A"
          />
          <path
            d="M13 48.4 32 42.8l19 5.6v4.1L32 47.1 13 52.5V48.4Z"
            fill="#C9963A"
          />
          <path
            d="M13 54.2 32 48.6l19 5.6V58L32 52.9 13 58v-3.8Z"
            fill="#B8862A"
          />
        </svg>
      </div>
    ),
    { ...size }
  );
}

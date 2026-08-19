import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

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
        }}
      >
        <svg width="28" height="28" viewBox="0 0 64 64" fill="none">
          <g stroke="#E8B84A" strokeWidth="3" strokeLinecap="round">
            <path d="M32 8.2v5.2" />
            <path d="M46.3 14.7 42.6 18.3" />
            <path d="M51.8 28h-5.2" />
            <path d="M17.7 14.7 21.4 18.3" />
            <path d="M12.2 28h5.2" />
          </g>
          <circle cx="32" cy="27" r="8.5" fill="#E8B84A" />
          <path d="M12 42 32 36l20 6v5L32 41 12 47V42Z" fill="#E9D09A" />
          <path d="M12 49 32 43l20 6v5L32 48 12 54V49Z" fill="#C9963A" />
        </svg>
      </div>
    ),
    { ...size }
  );
}

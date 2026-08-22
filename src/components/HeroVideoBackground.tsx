"use client";

import { useEffect, useRef, useState } from "react";

/** Pixabay medium download for video-14609 (requested hero background). */
export const HERO_VIDEO_PIXABAY =
  "https://pixabay.com/videos/download/video-14609_medium.mp4";

const LOCAL_PIXABAY = "/videos/hero-solar.mp4";
const LOCAL_FALLBACK = "/videos/hero-bg.mp4";

/**
 * Full-bleed muted looping video behind the hero.
 * Order: local Pixabay file → bundled solar clip → remote Pixabay URL.
 */
export function HeroVideoBackground() {
  const videoRef = useRef<HTMLVideoElement>(null);
  // Start with the file that ships in the repo so video always shows.
  const [src, setSrc] = useState(LOCAL_FALLBACK);
  const tried = useRef<Set<string>>(new Set([LOCAL_FALLBACK]));

  useEffect(() => {
    // If the user dropped the exact Pixabay download, prefer it.
    let cancelled = false;
    fetch(LOCAL_PIXABAY, { method: "HEAD" })
      .then((res) => {
        if (!cancelled && res.ok) {
          tried.current.add(LOCAL_PIXABAY);
          setSrc(LOCAL_PIXABAY);
        }
      })
      .catch(() => undefined);
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    el.muted = true;
    el.defaultMuted = true;
    el.setAttribute("muted", "");
    const play = () => {
      void el.play().catch(() => undefined);
    };
    play();
    el.addEventListener("loadeddata", play);
    el.addEventListener("canplay", play);
    return () => {
      el.removeEventListener("loadeddata", play);
      el.removeEventListener("canplay", play);
    };
  }, [src]);

  function handleError() {
    const order = [LOCAL_PIXABAY, LOCAL_FALLBACK, HERO_VIDEO_PIXABAY];
    const next = order.find((u) => !tried.current.has(u));
    if (!next) return;
    tried.current.add(next);
    setSrc(next);
  }

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <video
        ref={videoRef}
        key={src}
        className="absolute inset-0 h-full w-full scale-[1.04] object-cover"
        src={src}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        onError={handleError}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-900/92 via-navy-900/70 to-navy-900/25 lg:via-navy-900/55 lg:to-navy-900/15" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-transparent to-navy-900/25" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_88%_18%,rgba(252,168,24,0.16),transparent_38%)]" />
    </div>
  );
}

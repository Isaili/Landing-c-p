"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { HeroSceneFallback } from "./hero-scene-fallback";

const HeroScene = dynamic(() => import("./hero-scene"), {
  ssr: false,
  loading: () => <HeroSceneFallback />,
});

const reducedMotionQuery = "(prefers-reduced-motion: reduce)";

function supportsWebGL() {
  try {
    const canvas = document.createElement("canvas");
    return !!(canvas.getContext("webgl2") || canvas.getContext("webgl"));
  } catch {
    return false;
  }
}

let webglCache: boolean | null = null;

function subscribe(onChange: () => void) {
  const mq = window.matchMedia(reducedMotionQuery);
  mq.addEventListener("change", onChange);
  return () => mq.removeEventListener("change", onChange);
}

function getCanUse3D() {
  if (window.matchMedia(reducedMotionQuery).matches) return false;
  webglCache ??= supportsWebGL();
  return webglCache;
}

/** Carga la escena 3D solo en el cliente, si hay WebGL y no se pidió reducir movimiento */
export function HeroSceneLoader() {
  const canUse3D = useSyncExternalStore(subscribe, getCanUse3D, () => false);
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  // Pausa la animación cuando el hero sale de pantalla
  useEffect(() => {
    const el = ref.current;
    if (!el || !canUse3D) return;
    const observer = new IntersectionObserver(([entry]) =>
      setInView(entry.isIntersecting),
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [canUse3D]);

  return (
    <div ref={ref} className="pointer-events-none absolute inset-0">
      {canUse3D ? <HeroScene active={inView} /> : <HeroSceneFallback />}
    </div>
  );
}

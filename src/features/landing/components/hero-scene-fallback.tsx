/** Granos estáticos: se usan sin WebGL, con "reducir movimiento" o mientras carga la escena 3D */
const grains = [
  { kind: "bean", top: "8%", left: "10%", size: 46, rotate: -25 },
  { kind: "pepper", top: "18%", left: "82%", size: 22, rotate: 0 },
  { kind: "bean", top: "70%", left: "6%", size: 38, rotate: 30 },
  { kind: "pepper", top: "84%", left: "28%", size: 18, rotate: 0 },
  { kind: "bean", top: "62%", left: "86%", size: 44, rotate: -60 },
  { kind: "pepper", top: "40%", left: "4%", size: 16, rotate: 0 },
  { kind: "bean", top: "4%", left: "60%", size: 30, rotate: 15 },
] as const;

export function HeroSceneFallback() {
  return (
    <div aria-hidden="true" className="absolute inset-0">
      {grains.map((g, i) => (
        <svg
          key={i}
          viewBox="0 0 40 52"
          className="absolute drop-shadow-md"
          style={{
            top: g.top,
            left: g.left,
            width: g.size,
            transform: `rotate(${g.rotate}deg)`,
          }}
        >
          {g.kind === "bean" ? (
            <>
              <ellipse cx="20" cy="26" rx="18" ry="24" fill="#5a3220" />
              <path
                d="M17 5c5 6 6 13 3 20s-3 14 1 21"
                fill="none"
                stroke="#2b1a12"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </>
          ) : (
            <circle cx="20" cy="26" r="18" fill="#2b1a12" />
          )}
        </svg>
      ))}
    </div>
  );
}

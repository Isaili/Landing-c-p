import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "Grano y Grano: compra y vende café y pimienta con números claros";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "linear-gradient(135deg, #fbf7f0 0%, #f3eadb 100%)",
          color: "#3b2418",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div style={{ width: 56, height: 72, borderRadius: "50%", background: "#3b2418", transform: "rotate(-20deg)" }} />
          <div style={{ width: 32, height: 32, borderRadius: "50%", background: "#2f5d3a", marginTop: 30, marginLeft: -16 }} />
          <div style={{ fontSize: 44, fontWeight: 700 }}>Grano y Grano</div>
        </div>
        <div style={{ fontSize: 76, fontWeight: 700, lineHeight: 1.05, maxWidth: 950 }}>
          Compra y vende café y pimienta con números claros
        </div>
        <div style={{ display: "flex", gap: 24, fontSize: 30, color: "#2f5d3a" }}>
          Gratis para empezar · Sin tarjeta · Hecho en Chiapas
        </div>
      </div>
    ),
    size,
  );
}

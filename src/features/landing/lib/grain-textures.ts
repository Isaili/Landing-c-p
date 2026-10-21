import * as THREE from "three";

/**
 * Texturas procedurales para los granos 3D (sin descargar imágenes).
 * Se generan una sola vez en un <canvas>, con ruido fractal "tileable"
 * para que no se note la costura al envolver la esfera.
 */

type Rand = () => number;

export function seededRandom(seed: number): Rand {
  let s = seed % 2147483647;
  if (s <= 0) s += 2147483646;
  return () => {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

/** Ruido de valor periódico: `cells` celdas por lado, se repite sin costuras */
function valueNoise(cells: number, rand: Rand) {
  const lattice = Float32Array.from({ length: cells * cells }, rand);
  const at = (x: number, y: number) =>
    lattice[((y % cells) + cells) % cells * cells + (((x % cells) + cells) % cells)];
  const fade = (t: number) => t * t * (3 - 2 * t);
  return (u: number, v: number) => {
    const x = u * cells;
    const y = v * cells;
    const x0 = Math.floor(x);
    const y0 = Math.floor(y);
    const tx = fade(x - x0);
    const ty = fade(y - y0);
    const a = at(x0, y0) + (at(x0 + 1, y0) - at(x0, y0)) * tx;
    const b = at(x0, y0 + 1) + (at(x0 + 1, y0 + 1) - at(x0, y0 + 1)) * tx;
    return a + (b - a) * ty;
  };
}

/** Ruido fractal (fBm) normalizado a 0–1. `ridged` genera arrugas. */
function fbmField(
  size: number,
  rand: Rand,
  { baseCells = 4, octaves = 5, stretch = 1, ridged = false } = {},
) {
  const layers = Array.from({ length: octaves }, (_, o) =>
    valueNoise(baseCells * 2 ** o, rand),
  );
  const out = new Float32Array(size * size);
  let min = Infinity;
  let max = -Infinity;
  for (let j = 0; j < size; j++) {
    for (let i = 0; i < size; i++) {
      const u = i / size;
      // `stretch` alarga el patrón en vertical (vetas a lo largo del grano)
      const v = (j / size) * stretch;
      let sum = 0;
      let amp = 1;
      for (const n of layers) {
        let value = n(u, v);
        if (ridged) value = 1 - Math.abs(value * 2 - 1);
        sum += value * amp;
        amp *= 0.5;
      }
      out[j * size + i] = sum;
      if (sum < min) min = sum;
      if (sum > max) max = sum;
    }
  }
  for (let k = 0; k < out.length; k++) out[k] = (out[k] - min) / (max - min);
  return out;
}

function toTexture(
  size: number,
  pixel: (k: number) => [number, number, number],
  srgb: boolean,
) {
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = size;
  const ctx = canvas.getContext("2d")!;
  const img = ctx.createImageData(size, size);
  for (let k = 0; k < size * size; k++) {
    const [r, g, b] = pixel(k);
    img.data[k * 4] = r;
    img.data[k * 4 + 1] = g;
    img.data[k * 4 + 2] = b;
    img.data[k * 4 + 3] = 255;
  }
  ctx.putImageData(img, 0, 0);
  const tex = new THREE.CanvasTexture(canvas);
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.colorSpace = srgb ? THREE.SRGBColorSpace : THREE.NoColorSpace;
  tex.anisotropy = 4;
  return tex;
}

const mix = (a: number[], b: number[], t: number) =>
  a.map((c, i) => c + (b[i] - c) * t) as [number, number, number];

/** Paleta de 3 colores interpolada por un valor 0–1 */
function ramp(stops: [number[], number[], number[]], t: number) {
  return t < 0.5 ? mix(stops[0], stops[1], t * 2) : mix(stops[1], stops[2], (t - 0.5) * 2);
}

export interface GrainMaps {
  map: THREE.Texture;
  bumpMap: THREE.Texture;
  roughnessMap: THREE.Texture;
}

// Los granos miden ~60–100 px en pantalla: 256 px de textura sobra y se genera rápido en celulares
const SIZE = 256;

/** Café tostado: café medio con manchas más oscuras y zonas aceitosas */
export function roastedBeanMaps(): GrainMaps {
  const rand = seededRandom(7);
  const tone = fbmField(SIZE, rand, { baseCells: 3, octaves: 5, stretch: 1.6 });
  const grain = fbmField(SIZE, rand, { baseCells: 24, octaves: 3 });
  const oil = fbmField(SIZE, rand, { baseCells: 5, octaves: 3 });
  const stops: [number[], number[], number[]] = [
    [26, 14, 8],
    [54, 30, 16],
    [86, 50, 27],
  ];
  return {
    map: toTexture(SIZE, (k) => ramp(stops, tone[k] * 0.8 + grain[k] * 0.2), true),
    bumpMap: toTexture(SIZE, (k) => {
      const v = (grain[k] * 0.7 + tone[k] * 0.3) * 255;
      return [v, v, v];
    }, false),
    // Más oscuro = más brillante (aceite del tueste)
    roughnessMap: toTexture(SIZE, (k) => {
      const v = (0.35 + oil[k] * 0.5) * 255;
      return [v, v, v];
    }, false),
  };
}

/** Café verde (oro): verde grisáceo, mate, con vetas finas */
export function greenBeanMaps(): GrainMaps {
  const rand = seededRandom(19);
  const tone = fbmField(SIZE, rand, { baseCells: 3, octaves: 5, stretch: 2 });
  const fine = fbmField(SIZE, rand, { baseCells: 32, octaves: 2 });
  const stops: [number[], number[], number[]] = [
    [118, 124, 86],
    [158, 162, 118],
    [190, 188, 146],
  ];
  return {
    map: toTexture(SIZE, (k) => ramp(stops, tone[k] * 0.75 + fine[k] * 0.25), true),
    bumpMap: toTexture(SIZE, (k) => {
      const v = fine[k] * 255;
      return [v, v, v];
    }, false),
    roughnessMap: toTexture(SIZE, (k) => {
      const v = (0.7 + tone[k] * 0.25) * 255;
      return [v, v, v];
    }, false),
  };
}

/** Pimienta gorda seca: café rojizo oscuro con superficie muy arrugada */
export function pepperMaps(): GrainMaps {
  const rand = seededRandom(31);
  const tone = fbmField(SIZE, rand, { baseCells: 4, octaves: 4 });
  const wrinkles = fbmField(SIZE, rand, { baseCells: 18, octaves: 4, ridged: true });
  const stops: [number[], number[], number[]] = [
    [34, 22, 16],
    [62, 42, 30],
    [94, 66, 48],
  ];
  return {
    map: toTexture(SIZE, (k) => ramp(stops, tone[k] * 0.6 + wrinkles[k] * 0.4), true),
    bumpMap: toTexture(SIZE, (k) => {
      const v = wrinkles[k] * 255;
      return [v, v, v];
    }, false),
    roughnessMap: toTexture(SIZE, (k) => {
      const v = (0.75 + wrinkles[k] * 0.2) * 255;
      return [v, v, v];
    }, false),
  };
}

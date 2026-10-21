"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, Lightformer } from "@react-three/drei";
import * as THREE from "three";
import {
  greenBeanMaps,
  pepperMaps,
  roastedBeanMaps,
  seededRandom,
} from "../lib/grain-textures";

const smoothstep = (a: number, b: number, x: number) => {
  const t = Math.min(1, Math.max(0, (x - a) / (b - a)));
  return t * t * (3 - 2 * t);
};

/**
 * Grano de café: ovalado, con el dorso redondo, la cara plana y la ranura
 * central en "S". La ranura se oscurece con colores por vértice.
 * `seed` deforma ligeramente la forma para que no todos los granos sean iguales.
 */
function createCoffeeBeanGeometry(seed: number) {
  const rand = seededRandom(seed);
  const wobble = [rand() * 6, rand() * 6, rand() * 6];
  const asym = 0.9 + rand() * 0.2;

  const geo = new THREE.SphereGeometry(1, 128, 96);
  const pos = geo.attributes.position;
  const colors = new Float32Array(pos.count * 3);
  const v = new THREE.Vector3();

  for (let i = 0; i < pos.count; i++) {
    v.fromBufferAttribute(pos, i);
    const { y } = v;
    let { x, z } = v;

    // Irregularidad orgánica suave
    const n =
      1 +
      0.018 * Math.sin(x * 5 + wobble[0]) * Math.cos(y * 4 + wobble[1]) +
      0.012 * Math.sin(z * 7 + wobble[2]);

    x *= 0.76 * n * (x > 0 ? asym : 1);
    z *= 0.56 * n;
    const yy = y * n;

    // Cara plana: se aplana el frente (z > 0) con transición suave
    const front = smoothstep(-0.05, 0.35, v.z);
    z *= 1 - 0.42 * front;

    // Ranura en "S", más profunda al centro y que se desvanece en las puntas
    const grooveX = 0.075 * Math.sin(yy * 2.6 + wobble[0] * 0.2);
    const d = x - grooveX;
    const along = Math.max(0, 1 - Math.pow(Math.abs(yy) / 0.92, 3));
    const groove = Math.exp(-(d * d) / 0.0028) * along * front;
    z -= 0.26 * groove;
    // Los bordes de la ranura se levantan un poco
    z += 0.025 * Math.exp(-((Math.abs(d) - 0.09) ** 2) / 0.002) * along * front;

    pos.setXYZ(i, x, yy, z);

    const shade = 1 - 0.7 * groove;
    colors.set([shade, shade * 0.97, shade * 0.95], i * 3);
  }

  geo.setAttribute("color", new THREE.BufferAttribute(colors, 3));
  geo.computeVertexNormals();
  return geo;
}

/** Pimienta gorda: esfera ligeramente irregular con arrugas y una pequeña corona */
function createPepperGeometry() {
  const geo = new THREE.SphereGeometry(1, 112, 84);
  const pos = geo.attributes.position;
  const v = new THREE.Vector3();
  for (let i = 0; i < pos.count; i++) {
    v.fromBufferAttribute(pos, i).normalize();
    let r =
      1 +
      0.035 * Math.sin(v.x * 6.3) * Math.sin(v.y * 5.1 + 1) * Math.sin(v.z * 5.7 + 2) +
      0.012 * Math.sin(v.x * 21 + v.y * 17) * Math.sin(v.z * 19);
    // Corona del cáliz en el polo superior
    const pole = smoothstep(0.86, 0.97, v.y);
    r -= 0.07 * pole;
    r += 0.035 * Math.exp(-((v.y - 0.88) ** 2) / 0.0008);
    v.multiplyScalar(r);
    pos.setXYZ(i, v.x, v.y * 0.96, v.z);
  }
  geo.computeVertexNormals();
  return geo;
}

type Kind = "roasted" | "green" | "pepper";

interface Grain {
  kind: Kind;
  variant: number;
  position: [number, number, number];
  rotation: [number, number, number];
  scale: number;
  speed: number;
}

function createGrains(count: number): Grain[] {
  const rand = seededRandom(42);
  const kinds: Kind[] = ["roasted", "pepper", "roasted", "green", "pepper", "roasted"];
  return Array.from({ length: count }, (_, i) => {
    // En un anillo alrededor del teléfono, dejando libre el centro
    const angle = (i / count) * Math.PI * 2 + rand() * 0.45;
    const radius = 2.7 + rand() * 1.5;
    const kind = kinds[i % kinds.length];
    const depth = -1.8 + rand() * 3;
    return {
      kind,
      variant: i % 3,
      position: [Math.cos(angle) * radius * 1.05, Math.sin(angle) * radius * 0.95, depth],
      rotation: [rand() * Math.PI * 2, rand() * Math.PI * 2, rand() * Math.PI * 2],
      scale: kind === "pepper" ? 0.17 + rand() * 0.05 : 0.36 + rand() * 0.12,
      speed: 0.6 + rand() * 1,
    };
  });
}

function useGrainAssets() {
  const assets = useMemo(() => {
    const roasted = roastedBeanMaps();
    const green = greenBeanMaps();
    const pepper = pepperMaps();
    for (const t of [roasted.map, roasted.bumpMap, roasted.roughnessMap, green.map, green.bumpMap, green.roughnessMap]) {
      t.repeat.set(2, 1);
    }
    return {
      beans: [11, 23, 37].map(createCoffeeBeanGeometry),
      pepper: createPepperGeometry(),
      materials: {
        roasted: new THREE.MeshPhysicalMaterial({
          ...roasted,
          vertexColors: true,
          bumpScale: 3,
          roughness: 1,
          clearcoat: 0.45,
          clearcoatRoughness: 0.35,
          sheen: 0.3,
          sheenColor: new THREE.Color("#c48a5a"),
        }),
        green: new THREE.MeshStandardMaterial({
          ...green,
          vertexColors: true,
          bumpScale: 2,
          roughness: 1,
        }),
        pepper: new THREE.MeshStandardMaterial({
          ...pepper,
          bumpScale: 4,
          roughness: 1,
        }),
      } satisfies Record<Kind, THREE.Material>,
    };
  }, []);

  // Libera memoria de la GPU al desmontar
  useEffect(
    () => () => {
      assets.beans.forEach((g) => g.dispose());
      assets.pepper.dispose();
      Object.values(assets.materials).forEach((m) => {
        for (const key of ["map", "bumpMap", "roughnessMap"] as const) m[key]?.dispose();
        m.dispose();
      });
    },
    [assets],
  );

  return assets;
}

function Grains({ count }: { count: number }) {
  const group = useRef<THREE.Group>(null);
  const grains = useMemo(() => createGrains(count), [count]);
  const { beans, pepper, materials } = useGrainAssets();

  // Paralaje suave siguiendo el puntero
  useFrame((state, delta) => {
    if (!group.current) return;
    const k = Math.min(1, delta * 2);
    group.current.rotation.y += (state.pointer.x * 0.22 - group.current.rotation.y) * k;
    group.current.rotation.x += (-state.pointer.y * 0.14 - group.current.rotation.x) * k;
  });

  return (
    <group ref={group}>
      {grains.map((g, i) => (
        <Float
          key={i}
          speed={g.speed}
          rotationIntensity={0.7}
          floatIntensity={0.8}
          floatingRange={[-0.12, 0.12]}
        >
          <mesh
            geometry={g.kind === "pepper" ? pepper : beans[g.variant]}
            material={materials[g.kind]}
            position={g.position}
            rotation={g.rotation}
            scale={g.scale}
          />
        </Float>
      ))}
    </group>
  );
}

export default function HeroScene({ active }: { active: boolean }) {
  // Menos granos en pantallas chicas para cuidar la batería
  // (este componente solo se renderiza en el cliente, así que window existe)
  const [count] = useState(() => (window.innerWidth < 768 ? 8 : 14));

  return (
    <Canvas
      dpr={[1, 1.75]}
      frameloop={active ? "always" : "never"}
      camera={{ position: [0, 0, 9], fov: 40 }}
      gl={{ antialias: true, alpha: true, powerPreference: "low-power" }}
      aria-hidden="true"
    >
      <ambientLight intensity={0.25} />
      <directionalLight position={[3, 5, 5]} intensity={2.6} color="#fff1e0" />
      <directionalLight position={[-5, -2, -3]} intensity={1.1} color="#ffcf9e" />

      {/* Reflejos de estudio generados localmente, sin descargar mapas HDR */}
      <Environment resolution={256} frames={1}>
        <Lightformer form="rect" intensity={2.2} position={[0, 5, 2]} scale={[10, 3, 1]} rotation-x={Math.PI / 2} />
        <Lightformer form="rect" intensity={1.4} position={[-6, 1, 2]} scale={[3, 8, 1]} rotation-y={Math.PI / 2} />
        <Lightformer form="rect" intensity={0.9} color="#ffd8b0" position={[6, -1, 1]} scale={[3, 6, 1]} rotation-y={-Math.PI / 2} />
      </Environment>

      <Grains count={count} />
    </Canvas>
  );
}

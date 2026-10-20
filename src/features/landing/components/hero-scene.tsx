"use client";

import { useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

/** Grano de café: elipsoide con una cara plana y la ranura en "S" */
function createCoffeeBeanGeometry() {
  const geo = new THREE.SphereGeometry(1, 40, 28);
  const pos = geo.attributes.position;
  const v = new THREE.Vector3();
  for (let i = 0; i < pos.count; i++) {
    v.fromBufferAttribute(pos, i);
    let { x, y, z } = v;
    x *= 0.72;
    z *= 0.52;
    if (z > 0) {
      // Cara plana con ranura central ligeramente curva
      z *= 0.55;
      const grooveX = 0.07 * Math.sin(y * 2.2);
      const d = x - grooveX;
      z -= 0.16 * Math.exp(-(d * d) / 0.006) * (1 - Math.abs(y) * 0.6);
    }
    pos.setXYZ(i, x, y, z);
  }
  geo.computeVertexNormals();
  return geo;
}

/** Grano de pimienta: esfera con superficie rugosa */
function createPepperGeometry() {
  const geo = new THREE.IcosahedronGeometry(1, 4);
  const pos = geo.attributes.position;
  const v = new THREE.Vector3();
  for (let i = 0; i < pos.count; i++) {
    v.fromBufferAttribute(pos, i);
    const n =
      Math.sin(v.x * 9) * Math.sin(v.y * 11) * Math.sin(v.z * 10) * 0.06 +
      Math.sin(v.x * 23 + v.y * 17) * 0.015;
    v.multiplyScalar(1 + n);
    pos.setXYZ(i, v.x, v.y, v.z);
  }
  geo.computeVertexNormals();
  return geo;
}

type Kind = "roasted" | "green" | "pepper";

interface Grain {
  kind: Kind;
  position: [number, number, number];
  rotation: [number, number, number];
  scale: number;
  speed: number;
}

/** Generador pseudoaleatorio determinista para que la escena sea estable */
function seeded(seed: number) {
  let s = seed;
  return () => {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

function createGrains(count: number): Grain[] {
  const rand = seeded(42);
  const kinds: Kind[] = ["roasted", "roasted", "green", "pepper", "pepper"];
  return Array.from({ length: count }, (_, i) => {
    // Distribuidos en un anillo alrededor del teléfono, dejando libre el centro
    const angle = (i / count) * Math.PI * 2 + rand() * 0.5;
    const radius = 2.6 + rand() * 1.6;
    const kind = kinds[i % kinds.length];
    return {
      kind,
      position: [
        Math.cos(angle) * radius * 1.1,
        Math.sin(angle) * radius * 0.95,
        -1.5 + rand() * 2.5,
      ],
      rotation: [rand() * Math.PI, rand() * Math.PI, rand() * Math.PI],
      scale: kind === "pepper" ? 0.22 + rand() * 0.08 : 0.4 + rand() * 0.15,
      speed: 0.8 + rand() * 1.2,
    };
  });
}

function Grains({ count }: { count: number }) {
  const group = useRef<THREE.Group>(null);
  const grains = useMemo(() => createGrains(count), [count]);
  const geometries = useMemo(
    () => ({ bean: createCoffeeBeanGeometry(), pepper: createPepperGeometry() }),
    [],
  );
  const materials = useMemo(
    () => ({
      roasted: new THREE.MeshStandardMaterial({ color: "#5a3220", roughness: 0.42, metalness: 0.05 }),
      green: new THREE.MeshStandardMaterial({ color: "#a3ad6c", roughness: 0.6 }),
      pepper: new THREE.MeshStandardMaterial({ color: "#2b1a12", roughness: 0.85 }),
    }),
    [],
  );

  // Paralaje suave siguiendo el puntero
  useFrame((state, delta) => {
    if (!group.current) return;
    const k = Math.min(1, delta * 2);
    group.current.rotation.y += (state.pointer.x * 0.25 - group.current.rotation.y) * k;
    group.current.rotation.x += (-state.pointer.y * 0.15 - group.current.rotation.x) * k;
  });

  return (
    <group ref={group}>
      {grains.map((g, i) => (
        <Float
          key={i}
          speed={g.speed}
          rotationIntensity={0.8}
          floatIntensity={0.9}
          floatingRange={[-0.15, 0.15]}
        >
          <mesh
            geometry={g.kind === "pepper" ? geometries.pepper : geometries.bean}
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
  const [count] = useState(() => (window.innerWidth < 768 ? 9 : 15));

  return (
    <Canvas
      dpr={[1, 1.5]}
      frameloop={active ? "always" : "never"}
      camera={{ position: [0, 0, 9], fov: 40 }}
      gl={{ antialias: true, alpha: true, powerPreference: "low-power" }}
      aria-hidden="true"
    >
      <ambientLight intensity={0.9} />
      <directionalLight position={[4, 6, 5]} intensity={2.2} color="#fff4e6" />
      <directionalLight position={[-5, -2, 2]} intensity={0.6} color="#c8743a" />
      <Grains count={count} />
    </Canvas>
  );
}

"use client";
import { Canvas } from "@react-three/fiber";
import { Float, RoundedBox } from "@react-three/drei";
import { CardFormData } from "@/lib/types";

function CardMesh({ data }: { data: CardFormData }) {
  return (
    <Float speed={2} rotationIntensity={0.6} floatIntensity={0.8}>
      <RoundedBox args={[3.4, 2.1, 0.08]} radius={0.08} smoothness={8}>
        <meshStandardMaterial color={data.primaryColor} metalness={0.4} roughness={0.25} />
      </RoundedBox>
    </Float>
  );
}

export function NfcCard3D({ data }: { data: CardFormData }) {
  return (
    <div className="h-[380px] w-full rounded-3xl border border-white/15 bg-gradient-to-br from-white/20 to-white/5 p-3">
      <Canvas camera={{ position: [0, 0, 5], fov: 52 }}>
        <ambientLight intensity={1.1} />
        <directionalLight position={[5, 5, 5]} intensity={1.3} />
        <CardMesh data={data} />
      </Canvas>
      <div className="-mt-16 px-4 pb-4 text-sm">
        <p className="font-semibold">{data.fullName || "Nome Completo"}</p>
        <p className="text-white/70">{data.role || "Cargo"} · {data.company || "Empresa"}</p>
      </div>
    </div>
  );
}

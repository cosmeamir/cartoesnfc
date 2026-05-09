import { BadgeCheck, Layers3, Rocket, ShieldCheck, Users, Wifi, type LucideIcon } from "lucide-react";
import { Customizer } from "@/components/customizer/Customizer";

const steps: { icon: LucideIcon; title: string }[] = [
  { icon: Rocket, title: "Personalize" },
  { icon: Layers3, title: "Receba o cartão" },
  { icon: Wifi, title: "Aproxime e partilhe" }
];
const benefits: { icon: LucideIcon; title: string }[] = [
  { icon: ShieldCheck, title: "Sem papel" },
  { icon: BadgeCheck, title: "Partilha instantânea" },
  { icon: Users, title: "Ideal para equipas" }
];

export function HomeSections() {
  return (
    <>
      <section className="section pt-36"><div className="mx-auto max-w-7xl px-6 text-center"><h1 className="mx-auto max-w-4xl text-4xl font-bold md:text-6xl">O Cartão NFC Inteligente para Empresas e Profissionais</h1><p className="mx-auto mt-6 max-w-2xl text-slate-300">Plataforma premium com personalização em tempo real, perfil digital inteligente e gestão empresarial.</p><div className="mt-8 flex justify-center gap-4"><button className="rounded-full bg-techBlue px-6 py-3">Começar Agora</button><button className="rounded-full border border-white/30 px-6 py-3">Ver Demonstração</button></div></div></section>
      <section className="section">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 md:grid-cols-3">
          {steps.map(({ icon: Icon, title }) => (
            <article key={title} className="glass rounded-2xl p-6"><Icon className="mb-4 text-techBlue" /><h3 className="text-xl font-semibold">{title}</h3></article>
          ))}
        </div>
      </section>
      <section className="section"><div className="mx-auto grid max-w-7xl gap-4 px-6 md:grid-cols-3">{benefits.map(({ icon: Icon, title }) => <article key={title} className="rounded-2xl border border-white/15 p-6"><Icon className="mb-3 text-techBlue"/><p>{title}</p></article>)}</div></section>
      <Customizer />
    </>
  );
}

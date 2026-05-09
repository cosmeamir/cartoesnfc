"use client";
import { motion } from "framer-motion";

const items = ["Início", "Como Funciona", "Personalizar", "Empresas", "Preços", "Contactos"];

export function Header() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <p className="text-lg font-semibold">Cartão<span className="text-techBlue">NFC Pro</span></p>
        <nav className="hidden gap-6 md:flex text-sm text-slate-200">
          {items.map((item) => <a key={item} href="#" className="hover:text-techBlue">{item}</a>)}
        </nav>
        <motion.button whileHover={{ scale: 1.05 }} className="rounded-full bg-techBlue px-5 py-2 text-sm font-medium">Criar Meu Cartão</motion.button>
      </div>
    </header>
  );
}

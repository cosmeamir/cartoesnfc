"use client";
import { useState } from "react";
import { NfcCard3D } from "@/components/3d/NfcCard3D";
import { CardFormData } from "@/lib/types";

const defaults: CardFormData = {
  fullName: "",
  role: "",
  company: "",
  phone: "",
  email: "",
  website: "",
  whatsapp: "",
  instagram: "",
  linkedin: "",
  address: "",
  primaryColor: "#2D7DFF",
  secondaryColor: "#0A0A12",
  textColor: "#FFFFFF",
  template: "Modern Blue"
};

export function Customizer() {
  const [data, setData] = useState<CardFormData>(defaults);

  return (
    <section className="section" id="personalizar">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-2">
        <div className="glass rounded-3xl p-6">
          <h3 className="mb-5 text-2xl font-semibold">Personalizador NFC em Tempo Real</h3>
          <div className="grid gap-3 sm:grid-cols-2">
            {(["fullName","role","company","phone","email","website","whatsapp","instagram","linkedin","address"] as const).map((field) => (
              <input key={field} placeholder={field} className="rounded-xl border border-white/20 bg-black/20 p-3 text-sm" onChange={(e)=>setData({...data,[field]:e.target.value})} />
            ))}
            <input type="color" value={data.primaryColor} onChange={(e)=>setData({...data,primaryColor:e.target.value})} />
            <select className="rounded-xl bg-black/30 p-3" onChange={(e)=>setData({...data,template:e.target.value as CardFormData['template']})}>
              {["Minimalista","Black Premium","Corporate","Modern Blue","White Elegant"].map((t)=><option key={t}>{t}</option>)}
            </select>
          </div>
        </div>
        <NfcCard3D data={data} />
      </div>
    </section>
  );
}

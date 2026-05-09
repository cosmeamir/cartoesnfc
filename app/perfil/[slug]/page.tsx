import { Mail, MapPin, Phone } from "lucide-react";

export default function ProfilePage({ params }: { params: { slug: string } }) {
  return (
    <main className="mx-auto min-h-screen max-w-md px-5 py-12">
      <div className="glass rounded-3xl p-6 text-center">
        <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300" className="mx-auto h-24 w-24 rounded-full object-cover" />
        <h1 className="mt-4 text-2xl font-semibold">Perfil {params.slug}</h1>
        <p className="text-white/70">Diretora Comercial · Empresa X</p>
        <div className="mt-6 space-y-2 text-left text-sm">
          <p className="flex items-center gap-2"><Phone size={16}/> +351 900 000 000</p>
          <p className="flex items-center gap-2"><Mail size={16}/> contacto@empresa.pt</p>
          <p className="flex items-center gap-2"><MapPin size={16}/> Lisboa, Portugal</p>
        </div>
      </div>
    </main>
  );
}

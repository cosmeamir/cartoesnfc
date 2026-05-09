export default function AdminPage() {
  return (
    <main className="min-h-screen bg-slate-950 p-8 text-white">
      <h1 className="mb-6 text-3xl font-bold">Dashboard Administrativo</h1>
      <div className="grid gap-4 md:grid-cols-4">
        {[
          ["Pedidos", "128"],
          ["Clientes", "76"],
          ["Cartões aprovados", "54"],
          ["Utilizadores", "32"]
        ].map(([label, value]) => (
          <div key={label} className="glass rounded-2xl p-5">
            <p className="text-sm text-slate-300">{label}</p>
            <p className="text-3xl font-semibold">{value}</p>
          </div>
        ))}
      </div>
    </main>
  );
}

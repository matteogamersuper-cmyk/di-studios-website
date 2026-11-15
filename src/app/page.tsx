import { ArrowRight, Menu} from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen">
      <header className="flex items-center justify-between p-6">
        <h1 className="text-2xl font-bold">DI Studios</h1>

        <nav className="flex items-center gap-5">
          <ArrowRight size={22} />
          <button aria-label="Apri menu">
            <Menu size={26} />
          </button>
        </nav>
      </header>

      <section className="flex min-h-[80vh] flex-col items-center justify-center gap-6">
        <h2 className="text-6xl font-bold tracking-tight">
          DI STUDIOS.
        </h2>

        <p className="text-lg text-gray-500">
          Studios di Bot Discord
        </p>

        <button className="flex items-center gap-2 rounded-full bg-black px-6 py-3 text-white">
          Scopri di più
          <ArrowRight size={18} />
        </button>
      </section>
    </main>
  );
}
import { ArrowRight, Menu} from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen">
      <header className="flex items-center justify-between p-6">
        <h1 className="text-2xl font-bold">DI Studios</h1>
      </header>

      <section className="flex min-h-[80vh] flex-col items-center justify-center gap-6">
        <h2 className="text-6xl font-bold tracking-tight">
          Contatti
        </h2>
        <p className="text-lg text-gray-500">
          https://discord.gg/F2atRwMmAW
        </p>
      </section>
 

    </main>
  );
}
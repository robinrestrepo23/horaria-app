import Link from "next/link";

export default function HomePage() {
  return (
    <section className="text-center space-y-6 py-20">
      <h1 className="text-4xl font-bold text-blue-700">HorarIA</h1>
      <p className="text-lg text-gray-600">
        Genera tu horario académico automáticamente usando Inteligencia
        Artificial.
      </p>
      <Link
        href="/schedule"
        className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition"
      >
        Comenzar
      </Link>
    </section>
  );
}

"use client";
import Link from "next/link";
import Image from "next/image";

export function Navbar() {
  return (
    <nav className="bg-white shadow-sm border-b border-gray-200">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/horaria.png" // ✅ la ruta dentro de /public
            alt="Horaria logo"
            width={80}
            height={80}
            priority
          />
        </Link>
        <div className="space-x-6">
          <Link href="/schedule" className="hover:text-blue-600 transition">
            Hacer Horario
          </Link>
          <Link href="/results" className="hover:text-blue-600 transition">
            Resultados
          </Link>
        </div>
      </div>
    </nav>
  );
}

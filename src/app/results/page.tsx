"use client";
import { useEffect, useState } from "react";

export default function ResultadosPage() {
  const [horario, setHorario] = useState<any[]>([]);

  // Simulación de carga desde la API de FastAPI
  useEffect(() => {
    async function fetchHorario() {
      const response = await fetch("http://localhost:8000/api/generar-horario");
      const data = await response.json();
      setHorario(data.horario || []);
    }
    fetchHorario().catch(() =>
      setHorario([
        { materia: "Simulación de IA", dia: "Lunes", hora: "8:00 - 10:00" },
        {
          materia: "Matemáticas Discretas",
          dia: "Martes",
          hora: "10:00 - 12:00",
        },
      ])
    );
  }, []);

  return (
    <section className="space-y-8">
      <h2 className="text-3xl font-bold text-center text-blue-700">
        Horario Generado
      </h2>

      <div className="bg-white p-6 rounded-2xl shadow-md">
        <table className="w-full border-collapse text-center">
          <thead>
            <tr className="bg-blue-100 text-blue-800">
              <th className="p-2 border">Materia</th>
              <th className="p-2 border">Día</th>
              <th className="p-2 border">Hora</th>
            </tr>
          </thead>
          <tbody>
            {horario.map((item, i) => (
              <tr key={i} className="hover:bg-gray-50 transition">
                <td className="p-2 border">{item.materia}</td>
                <td className="p-2 border">{item.dia}</td>
                <td className="p-2 border">{item.hora}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

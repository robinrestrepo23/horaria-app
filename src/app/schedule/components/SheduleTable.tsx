"use client";

export default function ScheduleTable() {
  const exampleHorario = [
    { materia: "Programación I", dia: "Lunes", hora: "8:00 - 10:00" },
    { materia: "Cálculo II", dia: "Martes", hora: "10:00 - 12:00" },
    { materia: "Bases de Datos", dia: "Jueves", hora: "8:00 - 10:00" },
  ];

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md">
      <h3 className="text-xl font-semibold mb-4 text-gray-800">
        Vista previa del horario generado
      </h3>
      <table className="w-full border-collapse text-center">
        <thead>
          <tr className="bg-blue-100 text-blue-800">
            <th className="p-2 border">Materia</th>
            <th className="p-2 border">Día</th>
            <th className="p-2 border">Hora</th>
          </tr>
        </thead>
        <tbody>
          {exampleHorario.map((item, i) => (
            <tr key={i} className="hover:bg-gray-50 transition">
              <td className="p-2 border">{item.materia}</td>
              <td className="p-2 border">{item.dia}</td>
              <td className="p-2 border">{item.hora}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

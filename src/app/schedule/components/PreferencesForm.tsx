"use client";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

export default function PreferencesForm() {
  const [preferences, setPreferences] = useState({
    dias: "",
    horaInicio: "",
    horaFin: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!preferences.dias || !preferences.horaFin || !preferences.horaInicio) {
      alert("Por favor completa todas las preferencias.");
    } else {
      alert("Preferencias guardadas con éxito.");
      console.log("Preferencias guardadas:", preferences);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-2xl shadow-md space-y-4"
    >
      <h3 className="text-xl font-semibold text-gray-800">
        Selecciona tus preferencias
      </h3>

      <div className="grid md:grid-cols-3 gap-4">
        <Input
          label="Días preferidos"
          placeholder="Ej: Lunes, Miércoles, Viernes"
          value={preferences.dias}
          onChange={(e) =>
            setPreferences({ ...preferences, dias: e.target.value })
          }
        />
        <Input
          label="Hora de inicio"
          type="time"
          value={preferences.horaInicio}
          onChange={(e) =>
            setPreferences({ ...preferences, horaInicio: e.target.value })
          }
        />
        <Input
          label="Hora de fin"
          type="time"
          value={preferences.horaFin}
          onChange={(e) =>
            setPreferences({ ...preferences, horaFin: e.target.value })
          }
        />
      </div>

      <Button type="submit">Guardar preferencias</Button>
    </form>
  );
}

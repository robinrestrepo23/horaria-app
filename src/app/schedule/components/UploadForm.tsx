"use client";
import { useState } from "react";
import { Button } from "@/components/ui/Button";

export default function UploadForm() {
  const [file, setFile] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return alert("Por favor selecciona tu carga académica.");
    console.log("Archivo subido:", file.name);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-2xl shadow-md space-y-4"
    >
      <h3 className="text-xl font-semibold text-gray-800">
        Sube tu carga académica
      </h3>
      <input
        type="file"
        accept=".pdf,.csv,.xlsx"
        onChange={(e) => setFile(e.target.files?.[0] ?? null)}
        className="block w-full text-sm text-gray-600 border rounded-lg p-2"
      />
      <Button type="submit">Subir archivo</Button>
    </form>
  );
}

import React, { useState } from "react";

const API_BASE = process.env.REACT_APP_API_BASE || "http://localhost:5001";

function Ia() {
  const [muscle, setMuscle] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const groupMuscles = [
    "Pecho",
    "Espalda",
    "Bíceps",
    "Tríceps",
    "Hombros",
    "Cuádriceps",
    "Isquiotibiales",
    "Glúteos",
    "Gemelos",
    "Abdominales",
    "Core",
  ];

  const askForExercise = async () => {
    setError("");
    setAnswer("");
    const msg = muscle.trim();
    if (!msg) {
      setError("Introduce un grupo muscular o elige uno de la lista.");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE}/openai`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message:
            `Sugiere UN ejercicio efectivo y seguro para entrenar ${msg}. Devuélvelo con:\n` +
            `- nombre del ejercicio,\n` +
            `- músculos principales,\n` +
            `- técnica básica (3-4 pasos),\n` +
            `- recomendaciones de series y repeticiones para nivel principiante,\n` +
            `- una advertencia de seguridad breve.`,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.err || "Error al obtener recomendación");
      setAnswer(data.answer || "No se recibió respuesta.");
    } catch (e) {
      console.error(e);
      setError(e.message || "Ocurrió un error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        maxWidth: 700,
        margin: "24px auto",
        background: "white",
        borderRadius: 8,
        padding: 16,
        boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
      }}
    >
      <h3>¿Te sugiero un ejercicio?💡</h3>

      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 12 }}>
        <input
          type="text"
          placeholder="Escribe un grupo muscular (ej: Espalda)"
          value={muscle}
          onChange={(e) => setMuscle(e.target.value)}
          style={{ flex: 1, minWidth: 240, padding: "8px 10px" }}
        />
        <select
          value={muscle}
          onChange={(e) => setMuscle(e.target.value)}
          style={{ padding: "8px 10px" }}
        >
          <option value="">Elige grupo muscular...</option>
          {groupMuscles.map((m) => (
            <option key={m} value={m}>
              {m}
            </option>
          ))}
        </select>
        <button
          onClick={askForExercise}
          disabled={loading}
          style={{
            padding: "8px 14px",
            borderRadius: 6,
            backgroundColor: "#6BC9FF",
            boxShadow: "3px 3px 0 0",
          }}
        >
          {loading ? "Consultando..." : "Sugerir ejercicio"}
        </button>
      </div>

      {error && (
        <div style={{ color: "red", marginBottom: 10 }}>
          {error}
        </div>
      )}

      {answer && (
        <div
          style={{
            whiteSpace: "pre-wrap",
            textAlign: "left",
            border: "1px solid #eee",
            borderRadius: 6,
            padding: 12,
            background: "#fafafa",
          }}
        >
          {answer}
        </div>
      )}
    </div>
  );
}

export default Ia;
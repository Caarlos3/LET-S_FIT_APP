import React, { useState, useEffect } from "react";

const API_URL = "http://localhost:5001";

export default function PersonalInfo() {
  const [datos, setDatos] = useState({
    peso: "",
    altura: "",
    edad: "",
  });

  const [editable, setEditable] = useState(false);

  // Estado para edición antes de guardar
  const [datosEdicion, setDatosEdicion] = useState({
    peso: "",
    altura: "",
    edad: "",
  });

  // Cargar datos guardados al montar
  useEffect(() => {
    fetch(`${API_URL}/personal_info`)
      .then((res) => res.json())
      .then((data) => {
        if (data && (data.peso || data.altura || data.edad)) {
          setDatos({
            peso: data.peso ?? "",
            altura: data.altura ?? "",
            edad: data.edad ?? "",
          });
        }
      })
      .catch((err) => console.error("Error al cargar datos:", err));
  }, []);

  const handleChange = (campo, valor) => {
    setDatosEdicion((prev) => ({ ...prev, [campo]: valor }));
  };

  const modoEdicion = () => {
    setEditable(true);
    setDatosEdicion(datos);
  };

  const guardarCambios = async () => {
    try {
      const response = await fetch(`${API_URL}/personal_info`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          
          peso: datosEdicion.peso === "" ? "" : Number(datosEdicion.peso),
          altura: datosEdicion.altura === "" ? "" : Number(datosEdicion.altura),
          edad: datosEdicion.edad === "" ? "" : Number(datosEdicion.edad),
        }),
      });

      if (!response.ok) {
        const err = await response.json().catch(() => ({}));
        throw new Error(err.err || "No se pudo guardar la información");
      }

      const saved = await response.json();
      setDatos({
        peso: saved.peso ?? "",
        altura: saved.altura ?? "",
        edad: saved.edad ?? "",
      });
      setEditable(false);
      
    } catch (e) {
      console.error(e);
      alert(e.message || "Error al guardar");
    }
  };

  const cancelarCambios = () => {
    setEditable(false);
    setDatosEdicion(datos);
  };

  return (
    <div
      style={{ display: "flex", justifyContent: "center", paddingTop: "40px" }}
    >
      <div
        style={{
          width: "300px",
          backgroundColor: "white",
          borderRadius: "8px",
          padding: "20px",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
          textAlign: "center",
        }}
      >
        <h2>Información Personal</h2>

        <div
          style={{
            marginBottom: "10px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <label>Peso (kg): </label>
          {editable ? (
            <input
              style={{ width: "60px", marginLeft: "10px" }}
              type="number"
              value={datosEdicion.peso}
              onChange={(e) => handleChange("peso", e.target.value)}
            />
          ) : (
            <span>{datos.peso || "-"}</span>
          )}
        </div>

        <div
          style={{
            marginBottom: "10px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <label>Altura (cm): </label>
          {editable ? (
            <input
              style={{ width: "60px", marginLeft: "10px" }}
              type="number"
              value={datosEdicion.altura}
              onChange={(e) => handleChange("altura", e.target.value)}
            />
          ) : (
            <span>{datos.altura || "-"}</span>
          )}
        </div>

        <div
          style={{
            marginBottom: "10px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <label>Edad: </label>
          {editable ? (
            <input
              style={{ width: "60px", marginLeft: "10px" }}
              type="number"
              value={datosEdicion.edad}
              onChange={(e) => handleChange("edad", e.target.value)}
            />
          ) : (
            <span>{datos.edad || "-"}</span>
          )}
        </div>

        {editable ? (
          <>
            <button
              style={{
                borderRadius: "20px",
                backgroundColor: "#6BC9FF",
                boxShadow: "3px 3px 0 0",
                marginRight: "10px",
              }}
              onClick={guardarCambios}
            >
              Guardar
            </button>
            <button
              style={{
                borderRadius: "20px",
                backgroundColor: "#6BC9FF",
                boxShadow: "3px 3px 0 0",
              }}
              onClick={cancelarCambios}
            >
              Cancelar
            </button>
          </>
        ) : (
          <button
            style={{
              borderRadius: "20px",
              backgroundColor: "#6BC9FF",
              boxShadow: "3px 3px 0 0",
            }}
            onClick={modoEdicion}
          >
            Editar
          </button>
        )}
      </div>
    </div>
  );
}

import React, { useState } from "react";

export default function PersonalInfo() {
  const [datos, setDatos] = useState({
    peso: "",
    altura: "",
    edad: "",
  });

  const [editable, setEditable] = useState(false);

  // Manejo de datos antes de guardar los cambios

  const [datosEdicion, setDatosEdicion] = useState({
    peso: "",
    altura: "",
    edad: "",
  });

  const handleChange = (campo, valor) => {
    setDatosEdicion((prev) => ({ ...prev, [campo]: valor }));
  };

  const modoEdicion = () => {
    setEditable(true);
    setDatosEdicion(datos);
  };

  const guardarCambios = () => {
    setDatos(datosEdicion);
    setEditable(false);
  };

  const cancelarCambios = () => {
    setEditable(false);
    setDatosEdicion(datos);
  };

  return (
    <div
      style={{ display: "flex",
               justifyContent: "center", 
               paddingTop: "40px",
             }}
    >
      <div style={{
        width: "300px",
        backgroundColor: "white",
        borderRadius: "8px",
        padding: "20px",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        textAlign: "center"
      }}>
        <h2>Información Personal</h2>
        <div style={{ marginBottom: "10px", display: "flex", justifyContent: "space-between" }}>
          <label>Peso (kg): </label>
          {editable ? (
            <input
              style={{ width: "60px", marginLeft: "10px" }}
              type="number"
              value={datosEdicion.peso}
              onChange={(e) => handleChange("peso", e.target.value)}
            />
          ) : (
            <span>{datos.peso}</span>
          )}
        </div>
        <div style={{ marginBottom: "10px", display: "flex", justifyContent: "space-between" }}>
          <label>Altura (cm): </label>
          {editable ? (
            <input
              style={{ width: "60px", marginLeft: "10px" }}
              type="number"
              value={datosEdicion.altura}
              onChange={(e) => handleChange("altura", e.target.value)}
            />
          ) : (
            <span> {datos.altura}</span>
          )}
        </div>
        <div style={{ marginBottom: "10px", display: "flex", justifyContent: "space-between" }}>
          <label>Edad: </label>
          {editable ? (
            <input
              style={{ width: "60px", marginLeft: "10px" }}
              type="number"
              value={datosEdicion.edad}
              onChange={(e) => handleChange("edad", e.target.value)}
            />
          ) : (
            <span>{datos.edad}</span>
          )}
        </div>

        {editable ? (
          <>
            <button style={{borderRadius: '20px', backgroundColor: '#6BC9FF', boxShadow: '3px 3px 0 0', marginRight: '10px'}} onClick={guardarCambios}>Guardar</button>
            <button style={{borderRadius: '20px', backgroundColor: '#6BC9FF', boxShadow: '3px 3px 0 0'}} onClick={cancelarCambios}>Cancelar</button>
          </>
        ) : (
          <button style={{borderRadius: '20px', backgroundColor: '#6BC9FF', boxShadow: '3px 3px 0 0'}} onClick={modoEdicion}>Editar</button>
        )}
      </div>
    </div>
  );
}

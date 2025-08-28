import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const DIAS = [
  "L",
  "M",
  "X",
  "J",
  "V",
  "S",
  "D",
];
const TIEMPO = [30, 40, 50, 60, 70, 80, 90, 100, 110, 120];



export default function Grafic() {
  const [data, setData] = useState(DIAS.map((dia) => ({ dia, minutos: 0 })));

  const [diaSelected, setDiaSelected] = useState(DIAS[0]);
  const [minutosSelected, setMinutosSelected] = useState(TIEMPO[0]);

  const añadirTiempo = (e) => {
    e.preventDefault();

    setData((prevData) =>
      prevData.map((item) =>
        item.dia === diaSelected
          ? { ...item, minutos: item.minutos + minutosSelected }
          : item
      )
    );
  };

  const reset = () => {
    setData(DIAS.map((dia) => ({ dia, minutos: 0 })));
  };

  return (
    <div style={{ display: 'flex', alignItems:'center', paddingLeft:'100px', paddingRight: '100px', paddingTop:'50px'}}>

      <div
        style={{
            width: "100%",
            height: "200px",
            backgroundColor: "white",
            borderRadius: "8px",
            padding: "10px",
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
            
            
        }}
      >
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="dia" />
           
            <Tooltip
              formatter={(value) => [`${value} min`, "Tiempo"]}
            />
            <Bar dataKey="minutos" fill="#6BC9FF" />
          </BarChart>
        </ResponsiveContainer>
        <form onSubmit={añadirTiempo}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "20px",
            gap: "10px",
          }}>
          {/* Select de día */}
          <select
            value={diaSelected}
            onChange={(e) => setDiaSelected(e.target.value)}
          >
            {DIAS.map((dia) => (
              <option key={dia} value={dia}>
                {dia}
              </option>
            ))}
          </select>
  
          {/* Select de tiempo */}
          <select
            value={minutosSelected}
            onChange={(e) => setMinutosSelected(parseInt(e.target.value))}
          >
            {TIEMPO.map((tiempo) => (
              <option key={tiempo} value={tiempo}>
                {tiempo} min
              </option>
            ))}
          </select>
  
          {/* Botones */}
          <button style={{borderRadius: '20px', backgroundColor: '#6BC9FF',boxShadow:'3px 3px 0 0'}} type="submit">Añadir</button>
          <button style={{borderRadius: '20px', backgroundColor: '#6BC9FF', boxShadow: '3px 3px 0 0'}} type="button" onClick={reset}>
            Reset
          </button>
        </form>
      </div>
    </div>
  );
}

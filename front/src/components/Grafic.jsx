import React, { useState, useEffect, useRef } from "react";
import * as echarts from "echarts";

const API_BASE = "http://localhost:5001";
function weekRecord(week, year) {
  const simple = new Date(year, 0, 1 + (week - 1) * 7);
  const weekDay = simple.getDay();

  let ISOweekStart = new Date(simple);
  if (weekDay <= 4) {
    ISOweekStart.setDate(simple.getDate() - simple.getDay() + 1);
  } else {
    ISOweekStart.setDate(simple.getDate() + 8 - simple.getDay());
  }

  const ISOweekEnd = new Date(ISOweekStart);
  ISOweekEnd.setDate(ISOweekStart.getDate() + 6);

  return {
    start: ISOweekStart.toISOString().split("T")[0],
    end: ISOweekEnd.toISOString().split("T")[0],
  };
}

function GymWeek() {
  const [year, setYear] = useState(new Date().getFullYear());
  const [week, setWeek] = useState(3);
  const [actualWeek, setActualWeek] = useState(
    weekRecord(3, new Date().getFullYear())
  );
  const [weekData, setWeekData] = useState([0, 0, 0, 0, 0, 0, 0]);

  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  const chartRef = useRef(null);
  const chartControl = useRef(null);

  const days = ["L", "M", "X", "J", "V", "S", "D"];
  const daysName = [
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
    "Domingo",
  ];

  useEffect(() => {
    setActualWeek(weekRecord(week, year));
  }, [week, year]);

  useEffect(() => {
    if (chartRef.current) {
      chartControl.current = echarts.init(chartRef.current);
      updateChart();
      const onResize = () =>
        chartControl.current && chartControl.current.resize();
      window.addEventListener("resize", onResize);
      return () => {
        window.removeEventListener("resize", onResize);
        chartControl.current && chartControl.current.dispose();
      };
    }
  }, []);

  useEffect(() => {
    updateChart();
  }, [weekData, actualWeek]);

  const updateChart = () => {
    if (!chartControl.current) return;
    const totalMinutes = weekData.reduce((a, b) => a + b, 0);
    const option = {
      title: {
        text: `Semana ${week} (${actualWeek.start} al ${actualWeek.end})`,
        subtext: `Total: ${totalMinutes} min`,
        left: "center",
      },
      tooltip: { trigger: "axis" },
      grid: { left: 40, right: 20, bottom: 30, top: 80 },
      xAxis: { type: "category", data: daysName },
      yAxis: { type: "value", min: 0 },
      series: [
        {
          data: weekData,
          type: "bar",
          itemStyle: { color: "rgb(107, 201, 255)" },
          label: { show: true, position: "top" },
        },
      ],
    };
    chartControl.current.setOption(option);
  };

  const handleInputChange = (i, value) => {
    const n = parseInt(value);
    const safe = Number.isFinite(n) && n >= 0 ? n : 0;
    const newData = [...weekData];
    newData[i] = safe;
    setWeekData(newData);
  };

  const saveWeek = async () => {
    setError("");
    setSaving(true);
    try {
      const res = await fetch(`${API_BASE}/gym/weeks`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          year,
          week,
          start: actualWeek.start,
          end: actualWeek.end,
          data: weekData,
        }),
      });
      const payload = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(payload.err || "Error al guardar la semana");
      alert(
        `Semana guardada correctamente. Total: ${payload.total_minutes} min`
      );
    } catch (e) {
      console.error(e);
      setError(e.message || "No se pudo guardar la semana");
    } finally {
      setSaving(false);
    }
  };

  const loadWeek = async () => {
    setError("");
    setLoading(true);
    try {
      const res = await fetch(
        `${API_BASE}/gym/weeks?year=${year}&week=${week}`
      );
      const list = await res.json();
      if (!res.ok) throw new Error(list?.err || "Error al cargar");
      if (Array.isArray(list) && list.length) {
        const record = list[0];
        if (Array.isArray(record.data) && record.data.length === 7) {
          setWeekData(record.data);
        } else {
          throw new Error("El registro está corrupto o incompleto");
        }
      } else {
        alert("No hay registro para esa semana");
      }
    } catch (e) {
      console.error(e);
      setError(e.message || "No se pudo cargar la semana");
    } finally {
      setLoading(false);
    }
  };

  const totalMinutes = weekData.reduce((a, b) => a + b, 0);
  const avgPerDay = Math.round((totalMinutes / 7) * 10) / 10;

  return (
    <div
      style={{ display: "flex", justifyContent: "center", paddingTop: "40px" }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "white",
          borderRadius: "8px",
          padding: "20px",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
          textAlign: "center",
          width: "min(900px, 95vw)",
        }}
      >
        <h2>REGISTRO SEMANAL</h2>

        {/* Selector de año/semana */}
        <div style={{ marginBottom: "10px" }}>
          <label style={{ marginRight: 6 }}>Año:</label>
          <input
            style={{ width: "80px", marginRight: "16px" }}
            type="number"
            value={year}
            onChange={(e) =>
              setYear(parseInt(e.target.value) || new Date().getFullYear())
            }
            min="1970"
          />
          <label style={{ marginRight: 6 }}>Semana:</label>
          <input
            style={{ width: "80px" }}
            type="number"
            value={week}
            onChange={(e) => {
              const v = parseInt(e.target.value);
              setWeek(Number.isFinite(v) ? Math.min(53, Math.max(1, v)) : 1);
            }}
            min="1"
            max="53"
          />
        </div>

        <h6 style={{ marginTop: 0 }}>
          Semana {week}: {actualWeek.start} al {actualWeek.end} — Total:{" "}
          {totalMinutes} min (Promedio: {avgPerDay} min/día)
        </h6>

        {/* Inputs diarios */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "8px 16px",
            marginBottom: "10px",
          }}
        >
          {daysName.map((dayName, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center" }}>
              <label style={{ width: 22 }}>{days[i]}:</label>
              <input
                style={{ width: "60px", margin: "5px" }}
                type="number"
                min="0"
                value={weekData[i]}
                onChange={(e) => handleInputChange(i, e.target.value)}
              />
            </div>
          ))}
        </div>

        {/* Acciones */}
        <div style={{ marginBottom: 10 }}>
          <button
            onClick={saveWeek}
            disabled={saving}
            style={{
              marginRight: 8,
              padding: "6px 12px",
              borderRadius: "20px",
              backgroundColor: "#6BC9FF",
              boxShadow: "3px 3px 0 0",
            }}
          >
            {saving ? "Guardando..." : "Guardar semana"}
          </button>
          <button
            onClick={loadWeek}
            disabled={loading}
            style={{
              padding: "6px 12px",
              borderRadius: "20px",
              backgroundColor: "#6BC9FF",
              boxShadow: "3px 3px 0 0",
            }}
          >
            {loading ? "Cargando..." : "Cargar semana"}
          </button>
        </div>

        {error && <div style={{ color: "red", marginBottom: 10 }}>{error}</div>}

        {/* Gráfica */}
        <div
          ref={chartRef}
          style={{
            width: "100%",
            height: "320px",
            border: "1px solid #ddd",
            borderRadius: 6,
            
          }}
        />
      </div>
    </div>
  );
}

export default GymWeek;

import React, { useState, useEffect, useRef } from "react";
import * as echarts from "echarts";



function weekRecord(week, year) {
  const simple = new Date(year, 0, 1 + (week - 1) * 7);
  const weekDay = simple.getDay();

  let ISOweekStart = new Date(simple);
  if (weekDay <= 4){
    ISOweekStart.setDate(simple.getDate() - simple.getDay() + 1);
  }
  else{
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
    chartControl.current = echarts.init(chartRef.current, "dark");
    updateChart();
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
      textStyle: { color: "#fff" },
    },
    xAxis: { type: "category", data: daysName },
    yAxis: { type: "value" },
    series: [{ data: weekData, type: "bar" }],
  };
  chartControl.current.setOption(option);

};

const handleInputChange = (i, value) => {
  const newData = [...weekData];
  newData[i] = parseInt(value) || 0;
  setWeekData(newData);
};

return (
  <div>
    <h2>REGISTRO SEMANAL</h2>

    {/* Selector de año */}

    <div>
      <label htmlFor="">Año:</label>
      <input type="number" value={year} onChange={(e) => setYear(parseInt(e.target.value))} />
      <label htmlFor="">Semana:</label>
      <input type="number" value={week} onChange={(e) => setWeek(parseInt(e.target.value))} min="1" max="53" />

    </div>

    <h3>
      Semana {week}: {actualWeek.start} al {actualWeek.end}
    </h3>

    {/* Inputs diarios*/}
    <div>
    {daysName.map((dayName, i) => (
    <div key={i}>
      <label>{days[i]}:</label>
      <input
        type="number"
        value={weekData[i] || ""}
        onChange={(e) => handleInputChange(i, e.target.value)}
      />
    </div>
  ))}
    </div>

    {/* Gráfica */}
    <div
    ref={chartRef}
    style={{width: "100%", height:"300px", border: "1px solid black"}}
    >
    </div>
  </div>
);
};

export default GymWeek;
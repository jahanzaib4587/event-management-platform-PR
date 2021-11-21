import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "A",
    uv: 400,
    pv: 240,
    amt: 2400,
  },
  {
    name: "B",
    uv: 300,
    pv: 138,
    amt: 2210,
  },
  {
    name: "C",
    uv: 200,
    pv: 980,
    amt: 2290,
  },
  {
    name: "D",
    uv: 270,
    pv: 308,
    amt: 2000,
  },
  {
    name: "E",
    uv: 190,
    pv: 480,
    amt: 2181,
  },
  {
    name: "F",
    uv: 230,
    pv: 380,
    amt: 2500,
  },
  {
    name: "G",
    uv: 340,
    pv: 430,
    amt: 2100,
  },
];
const CounterGraph = () => {
  return (
    <div
      style={{
        width: "354px",
        height: "167px",
        background: "#3B3C40",
        borderRadius: "15px",
        marginBottom: "20px",
        display: "flex",
        flexDirection: "column",
        paddingTop: "10px",
        paddingBottom: "5px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingInline: "30px",
        }}
      >
        <h3 style={{ color: "#E5E5E5" }}>View Count</h3>
        <p style={{ color: "#E5E5E5" }}>2378 watching</p>
      </div>
      <LineChart width={317} height={105} data={data}>
        <CartesianGrid strokeDasharray="2 2" />
        <XAxis dataKey="name" interval="preserveStartEnd" />
        <YAxis interval="preserveStartEnd" />
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      </LineChart>
    </div>
  );
};

export default CounterGraph;

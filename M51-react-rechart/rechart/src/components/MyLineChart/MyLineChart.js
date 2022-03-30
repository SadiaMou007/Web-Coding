import React from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const MyLineChart = () => {
  const data = [
    {
      name: "Supplier A",
      price: 4000,
      sales: 2400,
      amt: 2400,
    },
    {
      name: "Supplier B",
      price: 3000,
      sales: 1390,
      amt: 2210,
    },
    {
      name: "Supplier C",
      price: 2000,
      sales: 2500,
      amt: 2290,
    },
    {
      name: "Supplier D",
      price: 2780,
      sales: 390,
      amt: 2000,
    },
    {
      name: "Supplier E",
      price: 1890,
      sales: 480,
      amt: 2181,
    },
    {
      name: "Supplier F",
      price: 2390,
      sales: 380,
      amt: 2500,
    },
    {
      name: "Supplier G",
      price: 3490,
      sales: 430,
      amt: 2100,
    },
  ];
  return (
    <div className="grid grid-cols-1">
      <div className="border-4 p-4 m-4">
        <LineChart width={800} height={450} data={data}>
          <Line dataKey={"price"} stroke="#8804d8"></Line>
          <Line dataKey={"sales"} stroke="#834a12"></Line>

          <XAxis dataKey={"name"}></XAxis>
          <YAxis></YAxis>

          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <Tooltip></Tooltip>
        </LineChart>
      </div>
    </div>
  );
};

export default MyLineChart;

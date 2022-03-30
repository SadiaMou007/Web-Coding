import axios from "axios";
import React, { useEffect, useState } from "react";
import { Bar, BarChart, Tooltip, XAxis, YAxis } from "recharts";

const MyBarChart = () => {
  const [phones, setPhones] = useState([]);
  useEffect(() => {
    axios
      .get("https://openapi.programming-hero.com/api/phones?search=iphone")
      .then((data) => {
        const loadedData = data.data.data;

        const phoneData = loadedData.map((phone) => {
          const p = phone.slug.split("-");
          const ph = {
            name: p[0],
            value: p[1],
          };
          return ph;
        });
        setPhones(phoneData);
      });
  }, []);
  return (
    <BarChart width={400} height={400} data={phones}>
      <Bar dataKey="value" fill="#8884d8" />
      <XAxis dataKey={"name"}></XAxis>
      <YAxis></YAxis>
      <Tooltip></Tooltip>
    </BarChart>
  );
};

export default MyBarChart;

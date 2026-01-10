"use client";
import {
  LineChart,
  ResponsiveContainer,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import Image from "next/image";

const data = [
  {
    name: "Jan",
    revenu: 4000,
    dépense: 2400,
  },
  {
    name: "Fév",
    revenu: 3000,
    dépense: 1398,
  },
  {
    name: "Mar",
    revenu: 2000,
    dépense: 6800,
  },
  {
    name: "Avr",
    revenu: 2780,
    dépense: 3908,
  },
  {
    name: "Mai",
    revenu: 1890,
    dépense: 4800,
  },
  {
    name: "Jun",
    revenu: 2390,
    dépense: 3800,
  },
  {
    name: "Jui",
    revenu: 7490,
    dépense: 5300,
  },
  {
    name: "Août",
    revenu: 6490,
    dépense: 4300,
  },
  {
    name: "Sep",
    revenu: 3490,
    dépense: 5300,
  },
  {
    name: "Oct",
    revenu: 3490,
    dépense: 4300,
  },
  {
    name: "Nov",
    revenu: 4490,
    dépense: 2300,
  },
  {
    name: "Déc",
    revenu: 5490,
    dépense: 4300,
  },
];

const FinanceChart = () => {
  return (
    <div className="bg-white rounded-lg h-full p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Finance</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={data}
          barSize={20}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#ddd" />
          <XAxis
            dataKey="name"
            axisLine={false}
            tick={{ fill: "#d1d5db" }}
            tickLine={false}
            tickMargin={10}
          />
          <YAxis
            axisLine={false}
            tick={{ fill: "#d1d5db" }}
            tickLine={false}
            tickMargin={20}
          />
          <Tooltip />
          <Legend
            align="center"
            verticalAlign="top"
            wrapperStyle={{ paddingTop: "10px", paddingBottom: "30px" }}
          />
          <Line
            type="monotone"
            dataKey="revenu"
            stroke="#C3EBFA"
            strokeWidth={5}
          />
          <Line
            type="monotone"
            dataKey="dépense"
            stroke="#CFCEFF"
            strokeWidth={5}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default FinanceChart;

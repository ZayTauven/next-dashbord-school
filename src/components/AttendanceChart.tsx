"use client";
import Image from "next/image";
import {
  BarChart,
  ResponsiveContainer,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  {
    name: "Lun",
    présent: 55,
    abscent: 67,
  },
  {
    name: "Mar",
    présent: 80,
    abscent: 90,
  },
  {
    name: "Mer",
    présent: 67,
    abscent: 83,
  },
  {
    name: "Jeu",
    présent: 90,
    abscent: 95,
  },
  {
    name: "Ven",
    présent: 56,
    abscent: 75,
  },
];

const AttendanceChart = () => {
  return (
    <div className="bg-white rounded-lg h-full p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Présence</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>
      <ResponsiveContainer width="100%" height="90%">
        <BarChart width={500} height={300} data={data} barSize={20}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ddd" />
          <XAxis
            dataKey="name"
            axisLine={false}
            tick={{ fill: "#d1d5db" }}
            tickLine={false}
          />
          <YAxis axisLine={false} tick={{ fill: "#d1d5db" }} tickLine={false} />
          <Tooltip
            contentStyle={{ borderRadius: "10px", borderColor: "lightgray" }}
          />
          <Legend
            align="left"
            verticalAlign="top"
            wrapperStyle={{ paddingTop: "20px", paddingBottom: "40px" }}
          />
          <Bar
            dataKey="présent"
            fill="#FAE27C"
            radius={[10, 10, 0, 0]}
            legendType="circle"
          />
          <Bar
            dataKey="abscent"
            fill="#C3EBFA"
            radius={[10, 10, 0, 0]}
            legendType="circle"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AttendanceChart;

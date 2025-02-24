import React, { useState } from "react";
import {
  Bar,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  ComposedChart,
} from "recharts";
import Card from "../ui/Card";
import { Select } from "../ui/Buttons";
import { earningsData } from "../../data/Analytics";

const EarningChart = () => {
  const [selectedInterval, setSelectedInterval] = useState("1min");

  return (
    <Card>
      {/* Header Section */}
      <div className="flex justify-between items-center border-b-1 border-dashed border-[#8957FF]/50 pb-3">
        <h3 className="text-xl font-semibold text-base-content">Earnings</h3>
        <Select
          options={[
            { value: "1d", label: "1 Day" },
            { value: "1w", label: "1 Week" },
            { value: "1m", label: "1 Month" },
            { value: "3m", label: "3 Months" },
            { value: "6m", label: "6 Months" },
          ]}
          value={selectedInterval}
          onChange={(e) => setSelectedInterval(e.target.value)}
          className="text-sm"
        />
      </div>

      {/* Chart Section */}
      <div className="mt-5 w-full h-[200px] md:h-[350px]">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={earningsData}>
            <CartesianGrid strokeDasharray="2 2" opacity={0.2} />
            <XAxis dataKey="month" stroke="#999" tick={{ fontSize: 12 }} />
            <YAxis stroke="#999" tick={{ fontSize: 12 }} />
            <Tooltip cursor={{ fill: "#8957FF" }} tick={{ fontSize: 5 }} />

            {/* Bar Chart - Earnings */}
            <Bar
              dataKey="earnings"
              fill="#8957FF"
              radius={[4, 4, 0, 0]}
              name="Earnings"
            />

            {/* Line Chart - Expenses */}
            <Line
              type="monotone"
              dataKey="expenses"
              stroke="#FFD700"
              strokeWidth={2}
              dot={{ r: 4 }}
              name="Expenses"
            />

            {/* Dashed Line Chart - Profit Trend */}
            <Line
              type="monotone"
              dataKey="profitTrend"
              stroke="#1EAB92"
              strokeWidth={2}
              strokeDasharray="5 5"
              dot={{ r: 4 }}
              name="Profit Trend"
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};

export default EarningChart;

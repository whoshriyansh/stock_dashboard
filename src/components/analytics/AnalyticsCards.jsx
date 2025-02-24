import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { summaryData } from "../../data/Analytics";
import { TrendDown, TrendUp } from "@phosphor-icons/react";

const AnalyticCard = ({
  title,
  amount,
  currency,
  percentageChange,
  trend,
  history,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const ChartData = history.map((value, index) => ({
    name: `Day ${index + 1}`,
    value,
  }));

  return (
    <div className="bg-card border-1 border-[#8957FF]/10 shadow-md py-2 text-primary-text rounded-lg px-4 space-y-5">
      <div className="border-b-1 w-full border-[#8957FF]/30 border-dashed">
        <h2 className="text-primary-text font-bold text-xl md:text-2xl ">
          {title}
        </h2>
      </div>
      <div className="flex justify-between w-full">
        <div className="flex flex-col items-start gap-1">
          <h3 className="text-secondary-text font-bold text-sm md:text-base">
            {amount} {currency}
          </h3>
          <p
            className={`text-xs flex items-center gap-1  ${
              trend === "up" ? "text-primary-green" : "text-primary-red"
            }`}
          >
            {trend === "up" ? <TrendUp size={16} /> : <TrendDown size={16} />}
            {percentageChange}%
          </p>
        </div>
        <div
          className="w-3/4"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <ResponsiveContainer width="100%" height={50}>
            <BarChart data={ChartData}>
              <XAxis hide />
              <YAxis hide />
              <Bar
                dataKey="value"
                fill={isHovered ? "#8957FF" : "#C0C0C0"}
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

const AnalyticsCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
      {summaryData.map((item, index) => (
        <AnalyticCard key={index} {...item} />
      ))}
    </div>
  );
};

export default AnalyticsCards;

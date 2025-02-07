import React, { useEffect, useRef, useState } from "react";
import { createChart } from "lightweight-charts";
import { Icon } from "@iconify/react";
import Card from "./Card";

const companies = [
  { symbol: "AAPL", name: "Apple", logo: "simple-icons:apple" },
  { symbol: "MSFT", name: "Microsoft", logo: "logos:microsoft-icon" },
  { symbol: "GOOGL", name: "Google", logo: "logos:google-icon" },
  { symbol: "AMZN", name: "Amazon", logo: "fontisto:amazon" },
  { symbol: "META", name: "Meta", logo: "logos:meta-icon" },
];

const intervals = ["1min", "5min", "15min", "30min", "1h"];

const Chart = () => {
  const chartRef = useRef();
  const [data, setData] = useState([]);
  const [selectedCompany, setSelectedCompany] = useState(companies[0]);
  const [selectedInterval, setSelectedInterval] = useState("1min");
  const [companyInfo, setCompanyInfo] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.twelvedata.com/time_series?symbol=${selectedCompany.symbol}&interval=${selectedInterval}&apikey=0ed240b9ac774eb0b6935f3886a5896f`
        );
        const result = await response.json();
        if (result.values) {
          const formattedData = result.values
            .map((entry) => ({
              time: Math.floor(new Date(entry.datetime).getTime() / 1000),
              open: parseFloat(entry.open),
              high: parseFloat(entry.high),
              low: parseFloat(entry.low),
              close: parseFloat(entry.close),
            }))
            .reverse();

          setData(formattedData);
          const lastClose = formattedData[formattedData.length - 1].close;
          const prevClose = formattedData[formattedData.length - 2].close;
          const change = ((lastClose - prevClose) / prevClose) * 100;
          setCompanyInfo({ lastClose, change });
        }
      } catch (error) {
        console.error("Error fetching stock data:", error);
      }
    };
    fetchData();
  }, [selectedCompany, selectedInterval]);

  useEffect(() => {
    if (!data.length) return;

    const chart = createChart(chartRef.current, {
      width: chartRef.current.clientWidth || 800,
      height: 350,
      layout: { background: { color: "#1e1e1e" }, textColor: "#fff" },
    });

    const candlestickSeries = chart.addCandlestickSeries();
    candlestickSeries.setData(data);

    return () => chart.remove();
  }, [data]);

  return (
    <Card>
      <div className="flex justify-between items-center border-b-1 border-secondary">
        <div className="flex items-center gap-2">
          <Icon icon={selectedCompany.logo} className="text-4xl" />
          <h3 className="text-2xl font-medium">{selectedCompany.name}</h3>
        </div>
        <div className="flex flex-col items-end">
          <h3>
            Last close:{" "}
            {companyInfo && (
              <span
                style={{
                  color: companyInfo.change >= 0 ? "green" : "red",
                }}
              >
                $ {companyInfo.lastClose.toFixed(2)}
              </span>
            )}
          </h3>
          <h3>
            Percentage Change:{" "}
            {companyInfo && (
              <span
                style={{
                  color: companyInfo.change >= 0 ? "green" : "red",
                }}
              >
                {companyInfo.change.toFixed(2)}%
              </span>
            )}
          </h3>
        </div>
      </div>

      <div className="flex justify-between mt-2">
        {/* Company Select Dropdown */}
        <div>
          <select
            className="border-1 border-white/80 px-3 py-2 rounded-full bg-primary text-white text-xs outline-none focus:ring-2 focus:ring-gray-500 "
            onChange={(e) => {
              const company = companies.find(
                (c) => c.symbol === e.target.value
              );
              setSelectedCompany(company);
            }}
            value={selectedCompany.symbol}
          >
            {companies.map((company) => (
              <option
                key={company.symbol}
                value={company.symbol}
                className="bg-transparent text-white hover:bg-gray-700 cursor-pointer"
              >
                {company.name}
              </option>
            ))}
          </select>
        </div>

        {/* Interval Buttons */}
        <div className="flex gap-2 items-center">
          {intervals.map((interval) => (
            <button
              key={interval}
              onClick={() => setSelectedInterval(interval)}
              className="bg-transparent border border-white/60 rounded-xl px-3 py-1 text-xs hover:bg-white hover:text-primary duration-200"
            >
              {interval}
            </button>
          ))}
        </div>
      </div>

      {/* Chart Container */}
      <div
        ref={chartRef}
        className="mt-5"
        style={{ width: "100%", height: "300px" }}
      />
    </Card>
  );
};

export default Chart;

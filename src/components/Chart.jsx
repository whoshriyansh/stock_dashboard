import React, { useEffect, useRef, useState } from "react";
import { createChart } from "lightweight-charts";
import { Icon } from "@iconify/react";
import Card from "./Card";

const companies = [
  { symbol: "AAPL", name: "Apple", logo: "simple-icons:apple" },
  { symbol: "MSFT", name: "Microsoft", logo: "logos:microsoft-icon" },
  { symbol: "GOOGL", name: "logos:google-icon" },
  { symbol: "AMZN", name: "fontisto:amazon" },
  { symbol: "META", name: "logos:meta-icon" },
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
          `https://api.twelvedata.com/time_series?symbol=${
            selectedCompany.symbol
          }&interval=${selectedInterval}&apikey=${
            import.meta.env.VITE_API_KEY_TWELVE
          }`
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
      layout: {
        background: { color: "transparent" },
        textColor: "var(--text-primary)",
      },
    });

    const candlestickSeries = chart.addCandlestickSeries();
    candlestickSeries.setData(data);

    return () => chart.remove();
  }, [data]);

  return (
    <Card className="p-4 bg-base-200 shadow-lg rounded-xl">
      {/* Header Section */}
      <div className="flex justify-between items-center border-b border-secondary pb-3">
        <div className="flex items-center gap-3">
          <Icon icon={selectedCompany.logo} className="text-5xl text-primary" />
          <h3 className="text-xl font-semibold text-base-content">
            {selectedCompany.name}
          </h3>
        </div>
        <div className="text-right text-sm text-text-base-content">
          {companyInfo ? (
            <>
              <p>
                Last Close:{" "}
                <span
                  className={
                    companyInfo.change >= 0 ? "text-success" : "text-error"
                  }
                >
                  ${companyInfo.lastClose.toFixed(2)}
                </span>
              </p>
              <p>
                Change:{" "}
                <span
                  className={
                    companyInfo.change >= 0 ? "text-success" : "text-error"
                  }
                >
                  {companyInfo.change.toFixed(2)}%
                </span>
              </p>
            </>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>

      {/* Controls Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-4 gap-3">
        {/* Company Select Dropdown */}
        <select
          className="select select-bordered w-full md:w-52 text-sm bg-primary text-base-content"
          onChange={(e) => {
            const company = companies.find((c) => c.symbol === e.target.value);
            setSelectedCompany(company);
          }}
          value={selectedCompany.symbol}
        >
          {companies.map((company) => (
            <option key={company.symbol} value={company.symbol}>
              {company.name}
            </option>
          ))}
        </select>

        {/* Interval Buttons */}
        <div className="flex flex-wrap gap-2">
          {intervals.map((interval) => (
            <button
              key={interval}
              onClick={() => setSelectedInterval(interval)}
              className={`btn btn-sm ${
                selectedInterval === interval
                  ? "btn-primary"
                  : "btn-outline btn-primary"
              }`}
            >
              {interval}
            </button>
          ))}
        </div>
      </div>

      {/* Chart Container */}
      <div className="relative mt-5 w-full h-[350px] overflow-hidden rounded-lg bg-base-100 shadow-md">
        <div ref={chartRef} className="absolute inset-0" />
      </div>
    </Card>
  );
};

export default Chart;

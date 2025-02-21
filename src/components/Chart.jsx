import React, { useEffect, useRef, useState } from "react";
import { createChart } from "lightweight-charts";
import { Icon } from "@iconify/react";
import Card from "./ui/Card";
import { Select } from "./ui/Buttons";

const companies = [
  { symbol: "AAPL", name: "Apple" },
  { symbol: "MSFT", name: "Microsoft" },
  { symbol: "GOOGL", name: "Google" },
  { symbol: "AMZN", name: "Amazon" },
  { symbol: "META", name: "Meta" },
];

const intervals = ["1min", "5min", "15min", "30min", "1h"];

const Chart = () => {
  const chartRef = useRef();
  const [data, setData] = useState([]);
  const [selectedCompany, setSelectedCompany] = useState(companies[0]);
  const [selectedInterval, setSelectedInterval] = useState("1min");
  // const [companyInfo, setCompanyInfo] = useState(null);

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
          // const lastClose = formattedData[formattedData.length - 1].close;
          // const prevClose = formattedData[formattedData.length - 2].close;
          // const change = ((lastClose - prevClose) / prevClose) * 100;
          // setCompanyInfo({ lastClose, change });
        }
      } catch (error) {
        console.error("Error fetching stock data:", error);
      }
    };
    fetchData();
  }, [selectedCompany, selectedInterval]);

  useEffect(() => {
    if (!data.length) return;

    // Function to create/update the chart
    const updateChart = () => {
      const rootStyles = getComputedStyle(document.documentElement);
      const primaryTextRGB = rootStyles
        .getPropertyValue("--primary-text")
        .trim();
      const textColor = primaryTextRGB ? `rgb(${primaryTextRGB})` : "#ffffff"; // Convert RGB values to proper format

      // Create Chart
      const chart = createChart(chartRef.current, {
        width: chartRef.current.clientWidth || 800,
        height: 350,
        layout: {
          background: { color: "transparent" },
          textColor: textColor, // Correctly formatted dynamic text color
        },
        grid: {
          vertLines: { color: "rgba(137, 87, 255, 0.2)" },
          horzLines: { color: "rgba(137, 87, 255, 0.2)" },
        },
      });

      // Candlestick Series with Dynamic Colors
      const candlestickSeries = chart.addCandlestickSeries({
        upColor: "#8957FF",
        downColor: "#FFD700",
        borderUpColor: "#8957FF",
        borderDownColor: "#FFD700",
        wickUpColor: "#8957FF",
        wickDownColor: "#FFD700",
      });

      candlestickSeries.setData(data);
      return chart;
    };

    let chart = updateChart();

    // Observe theme changes and update chart
    const observer = new MutationObserver(() => {
      chart.remove();
      chart = updateChart();
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"], // Detects theme switch
    });

    return () => {
      observer.disconnect();
      chart.remove();
    };
  }, [data]);

  return (
    <Card>
      {/* Header Section */}
      <div className="flex justify-between items-center border-b-1 border-dashed border-[#8957FF]/50 pb-3">
        <div className="flex items-center gap-3">
          <Icon icon={selectedCompany.logo} className="text-5xl text-primary" />
          <h3 className="text-xl font-semibold text-base-content">
            {selectedCompany.name}
          </h3>
        </div>

        {/* Time Interval Dropdown */}
        <Select
          options={[
            { value: "5m", label: "5 Minutes" },
            { value: "1h", label: "1 Hour" },
            { value: "5h", label: "5 Hours" },
            { value: "1d", label: "1 Day" },
            { value: "1w", label: "1 Week" },
          ]}
          value={selectedInterval}
          onChange={(e) => setSelectedInterval(e.target.value)}
          className="text-sm"
        />
      </div>

      {/* Company Select Dropdown */}
      <Select
        options={companies.map((company) => ({
          value: company.symbol,
          label: company.name,
        }))}
        value={selectedCompany.symbol}
        onChange={(e) => {
          const company = companies.find((c) => c.symbol === e.target.value);
          setSelectedCompany(company);
        }}
        className="w-full mt-5 text-sm"
      />

      {/* Chart Container */}
      <div className="relative mt-5 w-full h-[350px] overflow-hidden bg-card">
        <div ref={chartRef} className="absolute inset-0" />
      </div>
    </Card>
  );
};

export default Chart;

{
  /* <div className="text-right text-sm text-text-base-content">
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
        </div> */
}

import React, { useEffect, useState } from "react";
import * as d3 from "d3";
import { Icon } from "@iconify/react";

import { fetchQuote } from "../service/stock-api"; // Import fetchQuote

const TOP_COMPANIES = [
  // { symbol: "ABNB", icon: "simple-icons:airbnb" }, // Airbnb
  { symbol: "META", icon: "simple-icons:meta" }, // Meta
  { symbol: "GOOGL", icon: "simple-icons:google" }, // Google
  { symbol: "AMZN", icon: "simple-icons:amazon" }, // Amazon
  { symbol: "NVDA", icon: "simple-icons:nvidia" }, // Nvidia
];

const Card = ({ children }) => {
  return (
    <div
      className={`w-full h-full rounded-xl p-2 bg-primary flex flex-col items-start gap-3`}
    >
      {children}
    </div>
  );
};

const Portfolio = () => {
  const [stockData, setStockData] = useState([]);

  useEffect(() => {
    const fetchStockQuotes = async () => {
      try {
        const results = await Promise.all(
          TOP_COMPANIES.map(async ({ symbol, icon }) => {
            const quote = await fetchQuote(symbol);
            return {
              symbol,
              icon,
              price: quote.c, // Current Price
              prevClose: quote.pc, // Previous Close
              change: quote.c - quote.pc, // Change in Price
              percentChange: ((quote.c - quote.pc) / quote.pc) * 100, // % Change
              open: quote.o, // Opening Price
              close: quote.c, // Closing Price
            };
          })
        );
        setStockData(results);
      } catch (error) {
        console.error("Error fetching stock data:", error);
      }
    };

    fetchStockQuotes();
  }, []);

  return (
    <div className="flex overflow-x-auto space-x-2 h-full w-full">
      {stockData.map(
        ({ symbol, icon, price, percentChange, open, close, prevClose }) => (
          <Card key={symbol}>
            <div className="w-full flex items-center justify-between">
              <span className="flex items-center gap-2">
                <Icon icon={icon} className="text-4xl" />
                <h4 className="text-2xl font-semibold">{symbol}</h4>
              </span>
            </div>

            {/* <p className="text-gray-500 flex w-full gap-12 items-center justify-between text-sm">
              Price:{" "}
              <span className="font-semibold text-white text-base">
                ${price.toFixed(2)}
              </span>
            </p>

            <p className="text-gray-500 flex w-full gap-12 items-center justify-between text-sm">
              Prev Close:{" "}
              <span className="font-semibold text-white text-base">
                ${prevClose.toFixed(2)}
              </span>
            </p> */}

            <p className="text-gray-500 flex w-full gap-12 items-center justify-between text-sm">
              Change:{" "}
              <span
                className={
                  percentChange >= 0
                    ? "text-green-600 font-bold text-base"
                    : "text-red-600 font-bold text-base"
                }
              >
                {percentChange.toFixed(2)}%
              </span>
            </p>
          </Card>
        )
      )}
    </div>
  );
};

const TrendLine = ({ open, close }) => {
  const ref = React.useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    const width = 100,
      height = 50;

    const data = [
      { time: 0, value: open },
      { time: 1, value: (open + close) / 2 }, // Midpoint for curvy effect
      { time: 2, value: close },
    ];

    // Create an SVG
    const svg = d3
      .select(ref.current)
      .attr("width", width)
      .attr("height", height);

    svg.selectAll("*").remove(); // Clear previous chart

    // Set scales
    const xScale = d3
      .scaleLinear()
      .domain([0, 2])
      .range([5, width - 5]);
    const yScale = d3
      .scaleLinear()
      .domain([Math.min(open, close), Math.max(open, close)])
      .range([height - 5, 5]);

    // Define curvy line
    const line = d3
      .line()
      .x((d) => xScale(d.time))
      .y((d) => yScale(d.value))
      .curve(d3.curveCatmullRom); // Curvy smooth effect

    // Set color based on trend
    const color = close >= open ? "green" : "red";

    // Append path
    svg
      .append("path")
      .datum(data)
      .attr("d", line)
      .attr("fill", "none")
      .attr("stroke", color)
      .attr("stroke-width", 2);
  }, [open, close]);

  return <svg ref={ref} className="mt-2" />;
};

export default Portfolio;

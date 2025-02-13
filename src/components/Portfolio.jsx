import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";

import { fetchQuote } from "../service/stock-api"; // Import fetchQuote

const TOP_COMPANIES = [
  { symbol: "META", icon: "simple-icons:meta" }, // Meta
  { symbol: "GOOGL", icon: "simple-icons:google" }, // Google
  { symbol: "AMZN", icon: "simple-icons:amazon" }, // Amazon
  { symbol: "NVDA", icon: "simple-icons:nvidia" }, // Nvidia
];

const Card = ({ children }) => {
  return (
    <div className="w-full h-full card bg-base-300 shadow-md p-4">
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
    <div className="flex overflow-x-auto space-x-4 h-full w-full p-4">
      {stockData.map(
        ({ symbol, icon, price, percentChange, open, close, prevClose }) => (
          <Card key={symbol}>
            <div className="w-full flex items-center justify-between">
              <span className="flex items-center gap-2">
                <Icon icon={icon} className="text-4xl text-primary" />
                <h4 className="text-xl font-semibold text-base-content">
                  {symbol}
                </h4>
              </span>
            </div>

            <p className="text-base-content flex w-full gap-6 items-center justify-between text-sm">
              Price:
              <span className="font-semibold text-primary text-base">
                ${price.toFixed(2)}
              </span>
            </p>

            <p className="text-base-content flex w-full gap-6 items-center justify-between text-sm">
              Prev Close:
              <span className="font-semibold text-secondary text-base">
                ${prevClose.toFixed(2)}
              </span>
            </p>

            <p className="text-base-content flex w-full gap-6 items-center justify-between text-sm">
              Change:
              <span
                className={
                  percentChange >= 0
                    ? "text-success font-bold text-base"
                    : "text-error font-bold text-base"
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

export default Portfolio;

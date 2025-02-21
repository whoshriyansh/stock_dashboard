import React, { useEffect, useState } from "react";
import { fetchStockDetails } from "../service/stock-api";
import { Button } from "./ui/Buttons";

const StockDetails = ({ stockSymbol }) => {
  const [stockData, setStockData] = useState(null);

  useEffect(() => {
    const getStockDetails = async () => {
      try {
        const data = await fetchStockDetails(stockSymbol);
        setStockData(data);
      } catch (error) {
        console.error("Error fetching stock details:", error);
      }
    };

    getStockDetails();
  }, [stockSymbol]);

  if (!stockData) return <p className="text-center mt-4">Loading...</p>;

  return (
    <div className="mt-4 rounded-md">
      <div className="flex items-center gap-2">
        <img src={stockData.logo} alt={stockData.name} className="h-20 w-20" />
        <h2 className="text-2xl font-semibold flex flex-col">
          {stockData.name}
          <span className="text-sm text-gray-500">
            {stockData.finnhubIndustry}
          </span>
        </h2>
      </div>

      <div className="flex flex-col space-y-4 mt-2">
        <p className="text-sm flex justify-between border-b-1 border-[#8957FF]/30 border-dashed py-1">
          <strong>Country:</strong> {stockData.country}
        </p>
        <p className="text-sm flex justify-between border-b-1 border-[#8957FF]/30 border-dashed py-1">
          <strong>Currency:</strong> {stockData.currency}
        </p>
        <p className="text-sm flex justify-between border-b-1 border-[#8957FF]/30 border-dashed py-1">
          <strong>Phone No:</strong> {stockData.phone}
        </p>
        <p className="text-sm flex justify-between border-b-1 border-[#8957FF]/30 border-dashed py-1">
          <strong>Ticker:</strong> {stockData.ticker}
        </p>
        <p className="text-sm flex justify-between border-b-1 border-[#8957FF]/30 border-dashed py-1">
          <strong>Exchange:</strong> {stockData.exchange}
        </p>
        <p className="text-sm flex justify-between border-b-1 border-[#8957FF]/30 border-dashed py-1">
          <strong>Market Cap:</strong> ${stockData.marketCapitalization}B
        </p>
        <p className="text-sm flex justify-between border-b-1 border-[#8957FF]/30 border-dashed py-1">
          <strong>IPO Date:</strong> {stockData.ipo}
        </p>

        <Button variant="pur_border">
          <a
            href={stockData.weburl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-sm rounded-lg"
          >
            Visit Company Website
          </a>
        </Button>
      </div>
    </div>
  );
};

export default StockDetails;

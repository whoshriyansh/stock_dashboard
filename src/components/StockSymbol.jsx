import React, { useEffect, useState } from "react";
import { fetchStockDetails } from "../service/stock-api";
import Card from "./ui/Card";
import { Button } from "./ui/Buttons";
import { FastForward, Rewind } from "@phosphor-icons/react";

const famousCompanies = [
  "AAPL",
  "MSFT",
  "GOOGL",
  "AMZN",
  "TSLA",
  "NVDA",
  "META",
  "BRK.A",
  "V",
  "JNJ",
  //   "WMT",
  //   "JPM",
  //   "UNH",
  //   "XOM",
  //   "PG",
  //   "HD",
  //   "MA",
  //   "CVX",
  //   "ABBV",
  //   "NFLX",
];

const StockDetailsTable = () => {
  const [stocks, setStocks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 7;

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const details = await Promise.all(
          famousCompanies.map((symbol) => fetchStockDetails(symbol))
        );
        setStocks(details);
      } catch (error) {
        console.error("Error fetching stock details:", error);
      }
    };
    fetchDetails();
  }, []);

  // Pagination logic
  const totalPages = Math.ceil(stocks.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const currentStocks = stocks.slice(startIndex, startIndex + rowsPerPage);

  return (
    <Card>
      <h2 className="text-2xl font-bold mb-4 text-primary-text">Portfolio</h2>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-primary-purple rounded-lg text-white">
            <tr className="text-sm">
              <th className="py-3 px-4 text-left">Symbol</th>
              <th className="py-3 px-4 text-left">Market Cap (Bill)</th>
              <th className="py-3 px-4 text-left">Industry</th>
              <th className="py-3 px-4 text-left">IPO Date</th>
              <th className="py-3 px-4 text-left">Currency</th>
              <th className="py-3 px-4 text-left">Website Link</th>
            </tr>
          </thead>

          <tbody>
            {currentStocks.map((stock) => (
              <tr
                key={stock.ticker}
                className="text-sm  border-b-1 border-[#8957FF]/50 border-dashed"
              >
                <td className="py-3 px-4">
                  <span className="flex gap-4 items-center text-base-content">
                    <img src={stock.logo} alt="" className="h-8" />
                    <span>{stock.ticker}</span>
                    <span className="font-extralight text-text-base-content">
                      {stock.name}
                    </span>
                  </span>
                </td>
                <td className="py-3 px-4">
                  $ {stock.marketCapitalization.toFixed()}
                </td>
                <td className="py-3 px-4">{stock.finnhubIndustry}</td>
                <td className="py-3 px-4">{stock.ipo}</td>
                <td className="py-3 px-4">{stock.currency}</td>
                <td className="py-3 px-4">
                  <Button variant="purple">
                    <a
                      href={stock.weburl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Website
                    </a>
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-end items-center space-x-4 mt-2">
        <Button
          variant="pur_border"
          className={` text-xs font-medium ${
            currentPage === 1
              ? "bg-primary-purple text-white cursor-not-allowed"
              : ""
          }`}
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          <Rewind size={18} weight="bold" />
        </Button>
        <span className="text-primary-text text-sm">{`Page ${currentPage} of ${totalPages}`}</span>
        <Button
          variant="pur_border"
          className={` text-xs font-medium ${
            currentPage === totalPages
              ? "bg-primary-purple cursor-not-allowed text-white"
              : ""
          }`}
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
        >
          <FastForward size={18} weight="bold" />
        </Button>
      </div>
    </Card>
  );
};

export default StockDetailsTable;

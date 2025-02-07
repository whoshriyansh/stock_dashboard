import React, { useEffect, useState } from "react";
import { fetchStockDetails } from "../service/stock-api";
import Card from "./Card";

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
  const rowsPerPage = 3;

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
      <h2 className="text-xl font-semibold mb-4">Portfolio</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
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
              <tr key={stock.ticker} className="text-sm">
                <td className="py-3 px-4">
                  <span className="flex gap-4 items-center">
                    <img src={stock.logo} alt="" className="h-8" />
                    <span>{stock.ticker}</span>
                    <span className="font-extralight text-white/80">
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
                  <a
                    href={stock.weburl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-500   border-white/60 rounded-xl px-3 py-1 text-xs hover:bg-white hover:text-primary duration-200"
                  >
                    Website
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-end items-center space-x-4">
        <button
          className={`border border-white/60 rounded-xl px-3 py-1 text-xs hover:bg-white hover:text-primary duration-200 ${
            currentPage === 1
              ? "bg-transparent cursor-not-allowed"
              : "bg-white text-secondary"
          }`}
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        <span className="text-gray-700">{`Page ${currentPage} of ${totalPages}`}</span>
        <button
          className={`border border-white/60 rounded-xl px-3 py-1 text-xs hover:bg-white hover:text-primary duration-200 ${
            currentPage === totalPages
              ? "bg-transparent cursor-not-allowed"
              : "bg-white text-secondary"
          }`}
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </Card>
  );
};

export default StockDetailsTable;

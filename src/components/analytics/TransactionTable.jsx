import React, { useState } from "react";
import { transactionHistory } from "../../data/Analytics";
import Card from "../ui/Card";
import { Button, Select } from "../ui/Buttons";
import { FastForward, Rewind } from "@phosphor-icons/react";

const getStatusBadge = (status) => {
  let color = "bg-gray-200 text-gray-600"; // Default color

  if (status === "Successful") color = "bg-[#1EAB92]/10 text-primary-green";
  if (status === "Pending") color = "bg-[#FFD700]/10 text-primary-yellow";
  if (status === "Canceled") color = "bg-[#FB8181]/10 text-primary-red";

  return (
    <span className={`px-4 py-2 rounded-full text-xs font-medium ${color}`}>
      {status}
    </span>
  );
};

const TransactionTable = () => {
  const [selectedInterval, setSelectedInterval] = useState("1min");
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 6;

  return (
    <Card>
      <div className="flex justify-between items-center border-b-1 border-dashed border-[#8957FF]/50 pb-3">
        <h3 className="text-xl font-semibold text-base-content">
          Transaction History
        </h3>
        <div className="hidden md:flex gap-4">
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
      </div>
      {/* Header */}

      {/* Table */}
      <div className="overflow-x-auto mt-4">
        <table className="w-full border-collapse ">
          <thead>
            <tr className="text-sm md:text-lg bg-background">
              <th className="p-3 text-left">Title</th>
              <th className="p-3 text-left">Date</th>
              <th className="p-3 text-left">History</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-left">Transaction</th>
            </tr>
          </thead>
          <tbody>
            {transactionHistory.map((item, index) => (
              <tr
                key={index}
                className="border-b-1 border-dashed border-[#8957FF]/20 text-xs md:text-sm"
              >
                <td className="p-3 flex items-center gap-2">{item.title}</td>
                <td className="p-3">{item.date}</td>
                <td className="p-3">{item.history}</td>
                <td className="p-3">{getStatusBadge(item.status)}</td>
                <td className="p-3">
                  <div>{item.amount}</div>
                  <div className="text-gray-500 text-xs">{item.value}</div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
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
      </div>
    </Card>
  );
};

export default TransactionTable;

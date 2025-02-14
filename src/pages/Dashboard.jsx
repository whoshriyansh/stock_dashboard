import React, { useState } from "react";
import { mockMarketMoversData } from "../constants/mock";
import Portfolio from "../components/Portfolio";
import StockProfile from "../components/StockProfile";
import StockSymbolTable from "../components/StockSymbol";
import Chart from "../components/Chart";

const Dashboard = () => {
  // Extract only necessary values Market mover Cards
  const filteredData = mockMarketMoversData.values.map(
    ({ symbol, last, percent_change }) => ({
      symbol,
      last,
      percent_change,
    })
  );

  return (
    <div className={`w-full flex flex-col gap-4 px-4 py-2`}>
      <Portfolio data={filteredData} />
      <Chart />
      <StockProfile />
      <StockSymbolTable />
    </div>
  );
};

export default Dashboard;

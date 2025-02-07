import React from "react";
import Card from "../components/Card";
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
    <div
      className={`h-screen grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 grid-rows-8 md:grid-rows-7 xl:grid-rows-8 auto-rows-fr gap-2`}
    >
      <div className="col-span-1 md:col-span-2 xl:col-span-3 row-span-1 flex justify-start items-center">
        <Portfolio data={filteredData} />
      </div>

      <div className="md:col-span-2 row-span-5">
        <Chart />
      </div>
      <div className="row-span-2 xl:row-span-5 col-span-2 lg:col-span-1">
        <StockProfile />
      </div>
      <div className="row-span-1 xl:row-span-3 col-span-2 xl:col-span-3">
        <StockSymbolTable />
      </div>
    </div>
  );
};

export default Dashboard;

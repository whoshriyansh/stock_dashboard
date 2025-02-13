import React, { useState } from "react";
import Card from "../components/Card";
import { mockMarketMoversData } from "../constants/mock";
import Portfolio from "../components/Portfolio";
import StockProfile from "../components/StockProfile";
import StockSymbolTable from "../components/StockSymbol";
import Chart from "../components/Chart";
import Overlays from "../components/Overlays";

const Dashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => setIsModalOpen(false);

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
      {/* <Overlays isModalOpen={isModalOpen} closeModal={closeModal} />

      <button onClick={() => setIsModalOpen(true)}>Toggle Modal</button> */}
    </div>
  );
};

export default Dashboard;

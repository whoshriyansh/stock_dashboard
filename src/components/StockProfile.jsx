import React, { useState } from "react";
import Card from "./Card";
import Search from "./Search";
import StockDetails from "./StockDetails";

const StockProfile = () => {
  const [selectedStock, setSelectedStock] = useState("JNJ");

  return (
    <Card>
      <Search onStockSelect={setSelectedStock} />
      {selectedStock && <StockDetails stockSymbol={selectedStock} />}
    </Card>
  );
};

export default StockProfile;

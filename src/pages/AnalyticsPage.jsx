import React from "react";
import AnalyticsCards from "../components/analytics/AnalyticsCards";
import EarningChart from "../components/analytics/EarningChart";
import TransactionTable from "../components/analytics/TransactionTable";

const AnalyticsPage = () => {
  return (
    <div className={`w-full flex flex-col gap-6 px-2 md:px-4 py-2`}>
      <AnalyticsCards />
      <EarningChart />
      <TransactionTable />
    </div>
  );
};

export default AnalyticsPage;

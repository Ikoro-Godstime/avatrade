import React from "react";
import Layout from "../components/Layout/Layout";
import Welcome from "../components/dashboard/Welcome";
import Prices from "../components/dashboard/Prices";
import TradingViews from "../components/dashboard/TradingViews";
import ChartGrid from "../components/dashboard/ChartGrid";

const Dashboard = () => {
  return (
    <>
      <Layout>
        <Welcome />
        <ChartGrid />
        <Prices />
        <TradingViews />
      </Layout>
    </>
  );
};

export default Dashboard;

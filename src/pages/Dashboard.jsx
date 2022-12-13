import React, { lazy, Suspense } from "react";
import Layout from "../components/Layout/Layout";
import Welcome from "../components/dashboard/Welcome";
// import Prices from "../components/dashboard/Prices";
import TradingViews from "../components/dashboard/TradingViews";
import ChartGrid from "../components/dashboard/ChartGrid";
import { Skeleton } from "@mui/material";

const Prices = lazy(() => import("../components/dashboard/Prices"));

const Dashboard = () => {
  return (
    <>
      <Layout>
        <Welcome />
        <ChartGrid />
        <Suspense fallback={<Skeleton variant="text" />}>
          <Prices />
        </Suspense>
        <TradingViews />
      </Layout>
    </>
  );
};

export default Dashboard;

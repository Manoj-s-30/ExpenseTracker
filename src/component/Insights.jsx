import { Typography } from "@mui/material";
import React from "react";
import CardForInsights from "./comp/CardForInsights";
import { PaymentMethodCard } from "./Insights/PaymentMethodCard";
import PaymentChart from "./Insights/PaymentChart";

export const Insights = () => {
  return (
    <div>
      <div style={{ margin: "15px" }}>
        <PaymentMethodCard />
      </div>
      <PaymentChart />
    </div>
  );
};

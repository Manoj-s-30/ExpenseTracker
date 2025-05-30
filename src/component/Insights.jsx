import { Button, ButtonGroup, Card, Paper, Typography } from "@mui/material";
import React, { useContext } from "react";
import CardForInsights from "./comp/CardForInsights";
import { PaymentMethodCard } from "./Insights/PaymentMethodCard";
import PaymentLineChart from "./Insights/PaymentLineChart";
import PaymentPieChart from "./Insights/PaymentPieChart";
import UserContext from "../context/userContext";
import dataNotFound from "../images/NODataFound.png";

export const Insights = () => {
  const { expenseList } = useContext(UserContext);

  return (
    <div
      style={{
        margin: "5px",
      }}
    >
      {/* <div style={{ margin: "15px" }}> */}
      <div>
        <PaymentMethodCard />
      </div>
      {expenseList.length === 0 ? (
        <div
          style={{
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <img
            src={dataNotFound}
            alt="NODataFound"
            style={{ width: "300px", objectFit: "cover" }}
          />
        </div>
      ) : (
        <div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <Typography
              variant="h5"
              sx={{
                display: "flex",
                flexDirection: "column",
                // margin: "20px",
                width: "100%",
                padding: "5px",
              }}
            >
              Spending Trends Over Time
            </Typography>
            {/* <div style={{ padding: "0px 10px" }}>
              <ButtonGroup variant="contained" aria-label="Basic button group">
                <Button>Daily</Button>
                <Button>Monthly</Button>
                <Button>Yearly</Button>
              </ButtonGroup>
            </div> */}
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Card
              sx={{
                margin: "10px",
                padding: "20px",
                backgroundColor: "#deb3ad",
                width: "50%",
                height: "350px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "30px",
              }}
            >
              <PaymentLineChart />
            </Card>
          </div>
        </div>
      )}
    </div>
  );
};

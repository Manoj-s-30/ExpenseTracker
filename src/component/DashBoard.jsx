import React from "react";
import { Header } from "./Header";
import { AccountBalance } from "./AccountBalance";
import { ExpenseLists } from "./ExpenseLists";
import SectionPage from "./SectionPage";

export const DashBoard = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div
        style={{
          flex: 3,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div style={{ width: "40%" }}>
          <SectionPage />
        </div>
        <div style={{ width: "60%" }}>
          <AccountBalance />
          <ExpenseLists />
        </div>
      </div>
    </div>
  );
};

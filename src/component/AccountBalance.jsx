import React, { useContext, useEffect, useState } from "react";
import AmountTextField from "./comp/AmountTextField";
import { Stack, Typography } from "@mui/material";
import UserContext from "../context/userContext";
import EditNoteRoundedIcon from "@mui/icons-material/EditNoteRounded";

export const AccountBalance = () => {
  const { income, setIncome, balance, setBalance, expense, expenseList } =
    useContext(UserContext);
  const [showInputField, setShowInputField] = useState(false);

  const handleChange = (e) => {
    let inputValue = e.target.value;
    setIncome(inputValue);
  };
  useEffect(() => {
    if (income.length > 0) {
      localStorage.setItem("InputValue", JSON.stringify(income));
    }
  }, [income, setIncome, balance]);
  useEffect(() => {
    let getIncome = localStorage.getItem("InputValue");
    if (getIncome) {
      setIncome(JSON.parse(getIncome));
      console.log("incomefromlocalstorge", income);
    }
  }, []);
  let totalExp = expenseList
    .map((ele) => Number(ele.amount))
    .reduce((acc, inc) => acc + inc, 0);
  useEffect(() => {
    setBalance(Number(income) - totalExp);
  }, [expenseList, income]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        gap: "15%",
        padding: "15px 30px",
        margin: "10px",
      }}
    >
      <div>
        <Typography variant="h4" color="#3B0404" sx={{ fontWeight: "bold" }}>
          {" "}
          {income}{" "}
        </Typography>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <Typography variant="h5" color="#B95C50">
            Income
          </Typography>
        </div>
      </div>
      <div>
        <Typography variant="h4" color="#3B0404" sx={{ fontWeight: "bold" }}>
          {" "}
          {balance}{" "}
        </Typography>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <Typography variant="h5" color="#B95C50">
            Balance
          </Typography>
        </div>
      </div>
    </div>
  );
};

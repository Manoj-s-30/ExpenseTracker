import { Box, Button, FormControl, FormLabel, TextField } from "@mui/material";
import React, { useContext } from "react";
import UserContext from "../context/userContext";
import PopoverTable from "./comp/PopoverTable";

export const AddFixedExpenseForm = () => {
  const {
    setFixedExpenseList,
    setAncholEl,
    anchorEl,
    expenseData,
    setExpenseData,
    showFixedExpenseForm,
    setShowFixedExpenseForm,
    fixedExpenseList,
  } = useContext(UserContext);

  const HandleCloseClick = () => {
    setShowFixedExpenseForm(false);
    setAncholEl(null);
  };
  const HandleChange = (e) => {
    let { name, value } = e.target;
    setExpenseData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = () => {
    setShowFixedExpenseForm(false);
    const arrCat = {
      category: expenseData.category,
      amount: expenseData.amount,
    };

    setFixedExpenseList((prev) => [...prev, arrCat]);
  };
  console.log("fixedExp", fixedExpenseList);
  return (
    <PopoverTable
      open={showFixedExpenseForm}
      onClose={HandleCloseClick}
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
    >
      <Box sx={{ p: 2, display: "flex", flexDirection: "column", gap: 2 }}>
        <FormControl>
          <FormLabel component="legend" sx={{ paddingBottom: "5px" }}>
            Enter Category
          </FormLabel>
          <TextField
            value={expenseData.Category}
            onChange={HandleChange}
            size="small"
            type="text"
            name="category"
          />
          <FormLabel component="legend" sx={{ paddingBottom: "5px" }}>
            Enter Amount
          </FormLabel>
          <TextField
            value={expenseData.Amount}
            onChange={HandleChange}
            size="small"
            type="number"
            name="amount"
          />
        </FormControl>
      </Box>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          padding: "20px",
          gap: "5px",
        }}
      >
        <Button onClick={HandleCloseClick} variant="contained" color="primary">
          Close
        </Button>
        <Button onClick={handleSubmit} variant="contained" color="primary">
          Confirm
        </Button>
      </div>
    </PopoverTable>
  );
};

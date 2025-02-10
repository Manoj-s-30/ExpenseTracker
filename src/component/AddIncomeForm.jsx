import { Box, Button, FormControl, FormLabel, TextField } from "@mui/material";
import React, { useContext } from "react";
import UserContext from "../context/userContext";
import PopoverTable from "./comp/PopoverTable";

export const AddIncomeForm = () => {
  const {
    showIncomeForm,
    setShowIncomeForm,
    income,
    setIncome,
    setAncholEl,
    anchorEl,
  } = useContext(UserContext);

  const HandleCloseClick = () => {
    setShowIncomeForm(false);
    setAncholEl(null);
  };
  const HandleChange = (e) => {
    setIncome(e.target.value);
  };
  const handleSubmit = () => {
    setShowIncomeForm(false);
  };

  return (
    <PopoverTable
      open={showIncomeForm}
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
            Enter Income/Savings
          </FormLabel>
          <TextField
            value={income}
            onChange={HandleChange}
            size="small"
            type="number"
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
          Add Income
        </Button>
      </div>
    </PopoverTable>
  );
};

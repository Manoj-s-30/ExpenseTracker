import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import UserContext from "../context/userContext";
import PopoverTable from "./comp/PopoverTable";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import dayjs from "dayjs";
import { SnackBarComponent } from "./comp/SnackBarComponent";
import { FlashOffRounded } from "@mui/icons-material";
import { CheckValidation } from "../utils/Utils";

const ExpenseForm = () => {
  const {
    showExpenseForm,
    setShowExpenseForm,
    setAncholEl,
    anchorEl,
    expenseData,
    setExpenseData,
    expenseList,
    setExpenseList,
    balance,
    setBalance,
    setShowSnackBar,
    showSnackBar,
  } = useContext(UserContext);
  const [s, setS] = useState(false);
  const [ValidationError, setValidationError] = useState(false);

  const HandleCloseClick = (e) => {
    setAncholEl(null);
    setShowExpenseForm(false);
  };

  const handleDateChange = (value) => {
    setExpenseData((prev) => ({
      ...prev,
      date: dayjs(value),
    }));
  };
  const HandleInputChange = (e) => {
    let { name, value } = e.target;

    setExpenseData((prev) => ({
      ...prev,
      [name]: value,
      id: Date.now(),
    }));
  };
  useEffect(() => {}, [balance, setBalance, setShowSnackBar]);

  useEffect(() => {
    const storedExpenses = localStorage.getItem("ExpenseArray");
    if (storedExpenses) {
      setExpenseList(JSON.parse(storedExpenses));
    }
  }, []);

  useEffect(() => {
    if (expenseList.length > 0) {
      localStorage.setItem("ExpenseArray", JSON.stringify(expenseList));
    }
  }, [expenseList]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!CheckValidation(expenseData, setValidationError)) return;

    let newBalance = balance - parseFloat(expenseData.amount);
    if (newBalance < 0) {
      setS(true);
      return;
    }
    setExpenseList((prev) => [...prev, expenseData]);
    setExpenseData({
      id: Date.now(),
      date: dayjs(),
      category: "",
      amount: 0,
      payment: "Cash",
      notes: "",
    });
    HandleCloseClick();
  };
  console.log("error", ValidationError);
  return (
    <PopoverTable
      open={showExpenseForm}
      onClose={HandleCloseClick}
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
    >
      <Box sx={{ p: 2, display: "flex", flexDirection: "column", gap: 2 }}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={["DatePicker"]}>
            <DatePicker
              value={expenseData.date ? dayjs(expenseData.date) : null}
              onChange={handleDateChange}
            />
          </DemoContainer>
        </LocalizationProvider>
        <FormControl component="fieldset">
          <FormLabel component="legend">Payment</FormLabel>
          <RadioGroup
            name="payment"
            value={expenseData.payment}
            onChange={HandleInputChange}
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
            }}
          >
            <FormControlLabel value="Cash" control={<Radio />} label="Cash" />
            <FormControlLabel value="Bank" control={<Radio />} label="Bank" />
          </RadioGroup>
        </FormControl>
        <TextField
          id="expense-category"
          label="Expense Category"
          variant="outlined"
          size="small"
          value={expenseData.category}
          onChange={HandleInputChange}
          name="category"
          required
        />

        <TextField
          id="expense-amount"
          label="Amount"
          variant="outlined"
          type="number"
          size="small"
          onChange={HandleInputChange}
          value={expenseData.amount}
          name="amount"
          required
        />
        <TextField
          id="expense-notes"
          label="Notes"
          variant="outlined"
          size="small"
          value={expenseData.notes}
          onChange={HandleInputChange}
          name="notes"
          type="text"
        />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Button
            onClick={HandleCloseClick}
            variant="contained"
            color="primary"
          >
            Close
          </Button>
          <Button
            onClick={handleSubmit}
            variant="contained"
            color="primary"
            disabled={ValidationError}
          >
            Add Expense
          </Button>
        </div>
      </Box>

      <SnackBarComponent
        open={s}
        autoHideDuration={1000}
        onClose={() => setS(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        severity="warning"
      >
        Expense is Exceeding your Balance
      </SnackBarComponent>

      <SnackBarComponent
        open={ValidationError}
        autoHideDuration={2000}
        onClose={() => setValidationError(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        severity="error"
      >
        Expense Category and Expense Amount should not be empty
      </SnackBarComponent>
    </PopoverTable>
  );
};

export default ExpenseForm;

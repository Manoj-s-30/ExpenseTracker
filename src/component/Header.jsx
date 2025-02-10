import {
  Alert,
  AppBar,
  Box,
  Fade,
  Link,
  Popper,
  Snackbar,
  Typography,
} from "@mui/material";
import React, { useContext, useState } from "react";
import { NavigationLink } from "./comp/NavigationLink";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import UserContext from "../context/userContext";
import ExpenseForm from "./ExpenseForm";
import { AddIncomeForm } from "./AddIncomeForm";
import { SnackBarComponent } from "./comp/SnackBarComponent";
import Logo from "../images/Logo.png";

export const Header = () => {
  const {
    setShowExpenseForm,
    setAncholEl,
    income,
    setShowIncomeForm,
    showIncomeForm,
    showSnackBar,
    setShowSnackBar,
  } = useContext(UserContext);

  const HandleOpenClick = (e, type) => {
    if (type === "expense") {
      if (income > 0) {
        setAncholEl(e.currentTarget);
        setShowExpenseForm(true);
      } else {
        setShowSnackBar(true);
      }
    } else if (type === "income") {
      setShowIncomeForm(true);
      setAncholEl(e.currentTarget);
      console.log(showIncomeForm);
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        sx={{ backgroundColor: "#edbfb7", padding: "5px", boxShadow: "none" }}
        position="static"
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "10px 10px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
              justifyContent: "flex-start",
            }}
          >
            {/* <img src={Logo} height={70} width={70} alt="App_logo" /> */}
            <Typography
              variant="h5"
              sx={{ color: "#3B0404", fontFamily: "'Montserrat', sans-serif" }}
            >
              Expense Tracker
            </Typography>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "15px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <NavigationLink
              component="button"
              variant="body2"
              underline="none"
              ariaDescribedby="id"
              onClick={(e) => HandleOpenClick(e, "income")}
              icon={<AddCircleOutlineOutlinedIcon fontSize="small" />}
            >
              Add Income
            </NavigationLink>

            <NavigationLink
              component="button"
              variant="body2"
              underline="none"
              ariaDescribedby="id"
              onClick={(e) => HandleOpenClick(e, "expense")}
              icon={<AddCircleOutlineOutlinedIcon fontSize="small" />}
            >
              Add Expense
            </NavigationLink>
          </div>
        </div>
        <div style={{ zIndex: 1 }}>
          <ExpenseForm />
        </div>
        <div style={{ zIndex: 1 }}>
          <AddIncomeForm />
        </div>
        <SnackBarComponent
          open={showSnackBar}
          autoHideDuration={3000}
          onClose={() => setShowSnackBar(false)}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          severity="warning"
        >
          Income must be greater than 0 to proceed!
        </SnackBarComponent>
      </AppBar>
    </Box>
  );
};

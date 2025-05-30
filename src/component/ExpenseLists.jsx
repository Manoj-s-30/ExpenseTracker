import React, { useContext, useEffect, useState } from "react";
import UserContext from "../context/userContext";
import {
  Box,
  Card,
  CardContent,
  Chip,
  IconButton,
  ListItem,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import dayjs from "dayjs";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import SortIcon from "@mui/icons-material/Sort";
import { getMonthFromExpenseList, SortList } from "../utils/Utils";
import addbalance from "../images/addbalance.png";
import { NavigationLink } from "./comp/NavigationLink";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import { Balance } from "@mui/icons-material";

export const ExpenseLists = () => {
  const {
    expenseList,
    setExpenseList,
    setAncholEl,
    setShowExpenseForm,
    setShowSnackBar,
    setShowIncomeForm,
    income,
    balance,
    fixedExpenseList,
  } = useContext(UserContext);
  const [sortOrder, setSortOrder] = useState("asc");

  const HandleDeleteClick = (id) => {
    let fileredExpenseList = expenseList.filter((ele) => ele.id !== id);
    localStorage.removeItem("ExpenseArray", JSON.stringify(fileredExpenseList));
    setExpenseList(fileredExpenseList);
  };
  useEffect(() => {}, [expenseList, setExpenseList, income, balance]);
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
    }
  };
  console.log(expenseList);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
        margin: "30px 15px ",
        padding: " 15px",
      }}
    >
      <TableContainer
        component={Paper}
        sx={{
          width: "100%",
          maxWidth: "800px",
          height: "100%",
          maxHeight: "400px",
        }}
      >
        <Table
          stickyHeader
          size="small"
          sx={{
            background: "white",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            borderRadius: "8px",
          }}
        >
          <TableHead>
            <TableRow>
              <TableCell
                align="center"
                sx={{
                  fontWeight: "bold",
                  fontSize: "15px",
                }}
              >
                Category
              </TableCell>
              <TableCell
                align="center"
                sx={{ fontWeight: "bold", fontSize: "15px" }}
              >
                Amount
                <IconButton>
                  <SortIcon />
                </IconButton>
              </TableCell>
              <TableCell
                align="center"
                sx={{ fontWeight: "bold", fontSize: "15px" }}
              >
                Payment Method
              </TableCell>
              <TableCell
                align="center"
                sx={{ fontWeight: "bold", fontSize: "15px" }}
              >
                Date
                <IconButton>
                  <SortIcon />
                </IconButton>
              </TableCell>
              <TableCell
                align="center"
                sx={{ fontWeight: "bold", fontSize: "15px" }}
              >
                Notes
              </TableCell>
              <TableCell
                align="center"
                sx={{ fontWeight: "bold", fontSize: "15px" }}
              >
                Delete
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {expenseList.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} align="center">
                  <Box sx={{ textAlign: "center", padding: "20px" }}>
                    <img
                      src={addbalance}
                      alt="No Expenses"
                      style={{ width: "100px", opacity: 0.5 }}
                    />
                    <p
                      style={{
                        fontSize: "16px",
                        color: "#666",
                        marginTop: "10px",
                      }}
                    >
                      No expenses found. Add your first expense now! 📝
                    </p>
                    {income === 0 ? (
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
                    ) : (
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
                    )}
                  </Box>
                </TableCell>
              </TableRow>
            ) : (
              expenseList.map((ele) => (
                <TableRow key={ele.id}>
                  <TableCell align="center" sx={{ fontWeight: "bold" }}>
                    {ele.category}
                  </TableCell>
                  <TableCell align="center">
                    <Chip
                      label={`₹ ${ele.amount}`}
                      color={ele.amount < 10000 ? "success" : "warning"}
                      variant="outlined"
                    />
                  </TableCell>
                  <TableCell align="center">
                    {ele.payment} {ele.payment === "Cash" ? "💸" : "🏦"}
                  </TableCell>
                  <TableCell align="center">
                    {new Date(ele.date).toLocaleDateString("en-GB")}
                  </TableCell>
                  <TableCell align="center">{ele.notes || "N / A"}</TableCell>
                  <TableCell align="center">
                    <DeleteOutlineOutlinedIcon
                      sx={{ color: "red", cursor: "pointer" }}
                      onClick={() => HandleDeleteClick(ele.id)}
                    />
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

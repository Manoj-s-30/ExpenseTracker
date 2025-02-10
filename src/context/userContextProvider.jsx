import React, { useState } from "react";
import UserContext from "./userContext";
import dayjs from "dayjs";

function UserContextProvider({ children }) {
  const [income, setIncome] = useState(0);
  const [balance, setBalance] = useState(0);
  const [expense, setExpense] = useState(0);
  const [showExpenseForm, setShowExpenseForm] = useState(false);
  const [anchorEl, setAncholEl] = useState(null);
  const [expenseData, setExpenseData] = useState({
    id: null,
    date: dayjs(),
    payment: "Cash",
    category: "",
    amount: 0,
    notes: "",
  });
  const [expenseList, setExpenseList] = useState([]);
  const [showIncomeForm, setShowIncomeForm] = useState(false);
  const [showSnackBar, setShowSnackBar] = useState(false);
  const [splitUpAmount, setSplitUpAmount] = useState([
    {
      paymentMethod: "Cash",
      payMentAmount: 0,
    },
    {
      paymentMethod: "Bank",
      payMentAmount: 0,
    },
  ]);

  return (
    <UserContext.Provider
      value={{
        income,
        setIncome,
        balance,
        setBalance,
        expense,
        setExpense,
        showExpenseForm,
        setShowExpenseForm,
        anchorEl,
        setAncholEl,
        expenseData,
        setExpenseData,
        expenseList,
        setExpenseList,
        setShowIncomeForm,
        showIncomeForm,
        showSnackBar,
        setShowSnackBar,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserContextProvider;

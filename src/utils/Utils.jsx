import { useContext, useEffect } from "react";
import UserContext from "../context/userContext";

export const ageCalculator = () => {
  let currentMonth = new Date().getMonth() + 1;
  let currentYear = new Date().getFullYear();

  let Year = currentYear - Number(userData.dobYear);
  let Month = currentMonth - Number(userData.dobMonth);
  if (Month < 0) {
    Year = Year - 1;
    Month = 12 + Month;
  }
  return ` ${Year} Year ${Month} Months`;
};

export const LoginCredentials = (userData, setIsAuthenticated) => {
  let userNameAPI = "Manoj";
  let userPasswordAPI = "123";

  if (
    userNameAPI === userData?.userName &&
    userPasswordAPI === userData?.userPassword
  ) {
    setIsAuthenticated(true);
  } else {
    setIsAuthenticated(false);
  }
};
export const SortList = (
  value,
  expenseList,
  setExpenseList,
  sortOrder,
  setSortOrder
) => {
  let sortedAmount = [...expenseList].sort((a, b) => {
    if (value === "Amount") {
      return sortOrder === "asc"
        ? Number(a.amount) - Number(b.amount)
        : Number(b.amount) - Number(a.amount);
    } else if (value === "Date") {
      return sortOrder === "asc"
        ? new Date(a?.date?.$d) - new Date(b?.date?.$d)
        : new Date(b?.date?.$d) - new Date(a?.date?.$d);
    }
  });
  setExpenseList(sortedAmount);
  setSortOrder(sortOrder === "asc" ? "dec" : "asc");
  console.log("expenseListfrom sort", expenseList);
};

export const GetPaymentMethodAmount = (byCash, byBank, income, Total) => {
  const incomeNumb = Number(income);
  let SpendPercent = ((Total / incomeNumb) * 100).toFixed(2) + "%";
  return ["₹" + byCash, "₹" + byBank, "₹" + Total, SpendPercent];
};
export const CheckValidation = (expenseData, setValidationError) => {
  let hasError = expenseData.category === "" || expenseData.amount === 0;
  setValidationError(hasError);
  return !hasError;
};

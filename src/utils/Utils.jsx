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
export const SortByAmount = (
  expenseList,
  setExpenseList,
  sortOrder,
  setSortOrder
) => {
  let sortedAmount = [...expenseList].sort((a, b) =>
    sortOrder === "asc"
      ? Number(a.amount) - Number(b.amount)
      : Number(b.amount) - Number(a.amount)
  );
  setExpenseList(sortedAmount);
  setSortOrder(sortOrder === "asc" ? "dec" : "asc");
  console.log("expenseListfrom sort", expenseList);
};

export const GetPaymentMethodAmount = (byCash, byBank, income) => {
  const ByCash = byCash
    .map((ele) => Number(ele.amount))
    .reduce((acc, ini) => acc + ini, 0);
  const ByBank = byBank
    .map((ele) => Number(ele.amount))
    .reduce((acc, ini) => acc + ini, 0);
  const Total = ByCash + ByBank;
  let SpendPercent = ((Total / income) * 100).toFixed(2) + "%";
  return ["₹" + ByCash, "₹" + ByBank, "₹" + Total, SpendPercent];
};

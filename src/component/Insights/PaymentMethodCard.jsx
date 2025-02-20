import React, { useContext, useEffect } from "react";
import UserContext from "../../context/userContext";
import { GetPaymentMethodAmount } from "../../utils/Utils";
import { Box, Typography } from "@mui/material";
import CardForInsights from "../comp/CardForInsights";

export const PaymentMethodCard = () => {
  const { expenseList, setSplitUpAmount, splitUpAmount } =
    useContext(UserContext);
  const amountPaidByCash = expenseList
    .filter((ele) => ele.payment === "Cash")
    .map((ele) => Number(ele.amount))
    .reduce((acc, ini) => acc + ini, 0);
  const amountPaidByBank = expenseList
    .filter((ele) => ele.payment === "Bank")
    .map((ele) => Number(ele.amount))
    .reduce((acc, ini) => acc + ini, 0);
  const Total = amountPaidByCash + amountPaidByBank;
  console.log("cash&bank", amountPaidByBank, amountPaidByCash);
  let x = localStorage.getItem("InputValue");
  let incomeFromLocalStorage = JSON.parse(x);
  console.log("incomeFromLocalStorage", incomeFromLocalStorage);
  let returnvalue = GetPaymentMethodAmount(
    amountPaidByCash,
    amountPaidByBank,
    incomeFromLocalStorage,
    Total
  );

  useEffect(() => {}, [expenseList]);
  const setTitle = (index) => {
    if (index === 0) {
      return "Amount Spend by Cash";
    } else if (index === 1) {
      return "Amount Spend by Bank";
    } else if (index === 2) {
      return "Total spend";
    } else if (index === 3) {
      return "Spent on your income";
    }
  };

  return (
    <div>
      <Typography
        variant="h5"
        sx={{ padding: "10px", display: "flex", justifyContent: "start" }}
      >
        Amount Breakup
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
          margin: "10px 0px",
        }}
      >
        {returnvalue.map((ele, ind) => (
          <CardForInsights
            key={ind}
            body2Typography={setTitle(ind)}
            h5Typography={ele}
          />
        ))}
      </Box>
    </div>
  );
};

// <Box
//   sx={{
//     display: "flex",
//     flexDirection: "row",
//     justifyContent: "space-evenly",
//     alignItems: "flex-start",
//   }}
// >
//   {InsightData.map((ele) => (
//     <Card
//       sx={{
//         width: "150px",
//         height: "100px",
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//       key={ele.id}
//     >
//       <CardContent
//         sx={{
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           justifyContent: "center",
//         }}
//       >
//         <Typography variant="h5" component="div" fontWeight="bold">
//           {ele.amount}
//           {/* data */}
//         </Typography>
//         <Typography variant="body2" color="text.secondary" textAlign="center">
//           {ele.payment}
//           {/* ew5432 */}
//         </Typography>
//       </CardContent>
//     </Card>
//   ))}
// </Box>;

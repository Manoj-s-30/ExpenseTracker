import React, { useContext, useEffect } from "react";
import UserContext from "../../context/userContext";
import { GetPaymentMethodAmount } from "../../utils/Utils";
import { Box } from "@mui/material";
import CardForInsights from "../comp/CardForInsights";

export const PaymentMethodCard = () => {
  const { expenseList, setSplitUpAmount, splitUpAmount, income } =
    useContext(UserContext);
  const amountPaidByCash = expenseList.filter((ele) => ele.payment === "Cash");
  const amountPaidByBank = expenseList.filter((ele) => ele.payment === "Bank");
  let returnvalue = GetPaymentMethodAmount(
    amountPaidByCash,
    amountPaidByBank,
    income
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
      return "Percent spend";
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
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

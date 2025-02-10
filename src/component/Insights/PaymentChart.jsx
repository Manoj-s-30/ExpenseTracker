import { LineChart } from "@mui/x-charts";
import React, { useContext } from "react";
import UserContext from "../../context/userContext";
import dayjs from "dayjs";

function PaymentChart() {
  const { expenseList } = useContext(UserContext);
  let dates = expenseList.map((ele) =>
    dayjs(ele?.date?.$d)?.format("DD-MM-YYYY")
  );
  let amount = expenseList.map((ele) => ele.amount);
  console.log("dates", dates);
  console.log(
    "asdas",
    dates.map((e) => typeof e)
  );
  return (
    <div>
      <LineChart
        xAxis={[{ data: dates ? dates : null }]}
        series={[
          {
            data: amount,
          },
        ]}
        width={500}
        height={300}
      />
    </div>
  );
}

export default PaymentChart;

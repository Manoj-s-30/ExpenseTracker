import React, { useContext, useEffect } from "react";
import UserContext from "../../context/userContext";
import dayjs from "dayjs";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

function PaymentLineChart() {
  const { expenseList } = useContext(UserContext);
  const newExpenseList = [...expenseList];
  let dates = newExpenseList
    .map((ele) => new Date(ele.date))
    .map((ele) => ele.toDateString())
    .sort((a, b) => new Date(a) - new Date(b));

  let amount = newExpenseList.map((ele) => Number(ele.amount));

  let DayMap = dates.map((name, index) => ({
    name: name,
    spendings: amount[index] || 0,
  }));

  console.log("dates", dates);

  const totalFebAmount = newExpenseList
    .filter((item) => {
      const month = dayjs(item.date).month(); // Extract month (0-based)
      return month === 1; // 1 = February
    })
    .reduce((sum, item) => sum + Number(item.amount), 0);
  useEffect(() => {}, [totalFebAmount]);
  console.log("filterdates", totalFebAmount);

  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div>
          <LineChart
            width={730}
            height={250}
            data={DayMap}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="name"
              tickFormatter={(tick) => dayjs(tick).format("DD MMM")}
              stroke="#3B0404"
            />
            <YAxis domain={["auto", "auto"]} stroke="#3B0404" />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="spendings" stroke="#3B0404" />
          </LineChart>
        </div>
      </div>
    </div>
  );
}

export default PaymentLineChart;

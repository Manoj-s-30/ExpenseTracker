import React, { useContext, useEffect, useState } from "react";
import { Pie, PieChart, ResponsiveContainer, Cell, Tooltip } from "recharts";
import UserContext from "../../context/userContext";

function PaymentPieChart() {
  const { expenseList } = useContext(UserContext);
  const [cashCount, setCashCount] = useState(0);
  const [bankCount, setBankCount] = useState(0);

  useEffect(() => {
    if (!expenseList?.length) return;

    let newCashCount = 0;
    let newBankCount = 0;

    expenseList.forEach((ele) => {
      if (ele.payment === "Cash") newCashCount++;
      else if (ele.payment === "Bank") newBankCount++;
    });

    setCashCount(newCashCount);
    setBankCount(newBankCount);
  }, [expenseList]);

  const total = cashCount + bankCount;
  const pieChartData = [
    { name: "Cash", value: cashCount, color: "#FF5733" },
    { name: "Bank", value: bankCount, color: "#3498db" },
  ];

  const renderLabel = ({ name, value }) => {
    const percentage = total ? ((value / total) * 100).toFixed(1) : 0;
    return `${name}: ${percentage}%`;
  };

  return (
    <div style={{ width: "100%" }}>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={pieChartData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={100}
            label={renderLabel}
            labelLine={false}
          >
            {pieChartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip
            formatter={(value, name) => [
              `${value} (${((value / total) * 100).toFixed(1)}%)`,
              name,
            ]}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default PaymentPieChart;

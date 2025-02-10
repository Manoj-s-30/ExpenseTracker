import { Icon, TextField, Typography } from "@mui/material";
import React from "react";

const AmountTextField = ({
  value,
  onChange,
  label,
  disabled,
  variant,
  typography,
  readOnly,
}) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        padding: "5px",
      }}
    >
      <TextField
        sx={{
          width: "160px",
          "& .MuiInputBase-input": {
            color: "#3B0404",
            fontWeight: "bold",
            fontSize: "30px",
          },
          borderRadius: "8px",
        }}
        value={value}
        onChange={onChange}
        label={label}
        disabled={disabled}
        type="number"
        slotProps={{
          input: {
            readOnly: readOnly,
          },
        }}
      />
    </div>
  );
};

export default AmountTextField;
//#F79489
//#F8AFA6
//#FADCD9
//#F9F1F0

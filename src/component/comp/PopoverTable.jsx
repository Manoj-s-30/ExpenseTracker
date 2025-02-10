import { Box, FormControl, Popover, TextField } from "@mui/material";
import React from "react";

const PopoverTable = ({
  anchorEl,
  HandleCloseClick,
  open,
  children,
  anchorOrigin,
}) => {
  return (
    <Popover
      id="Expense-form-popover"
      open={open}
      anchorEl={anchorEl}
      onClose={HandleCloseClick}
      anchorOrigin={anchorOrigin}
    >
      {children}
    </Popover>
  );
};

export default PopoverTable;

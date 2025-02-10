import { Alert, Snackbar } from "@mui/material";
import React from "react";

export const SnackBarComponent = ({
  open,
  autoHideDuration,
  onClose,
  anchorOrigin,
  severity,
  children,
}) => {
  return (
    <div>
      <Snackbar
        open={open}
        autoHideDuration={autoHideDuration}
        onClose={onClose}
        anchorOrigin={anchorOrigin}
      >
        <Alert severity={severity} variant="filled">
          {children}{" "}
        </Alert>
      </Snackbar>
    </div>
  );
};

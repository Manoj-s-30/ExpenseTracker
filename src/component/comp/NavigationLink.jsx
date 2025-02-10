import { Link } from "@mui/material";
import React from "react";

export const NavigationLink = ({
  component,
  variant,
  underline,
  onClick,
  children,
  icon,
  ariaDescribedby,
}) => {
  return (
    <div>
      <Link
        component={component}
        variant={variant}
        underline={underline}
        onClick={onClick}
        aria-describedby={ariaDescribedby}
      >
        <div style={{ display: "flex", flexDirection: "row", gap: "5px" }}>
          <div style={{ color: "#3B0404" }}>{icon}</div>
          <div style={{ color: "#3B0404" }}>{children}</div>
        </div>
      </Link>
    </div>
  );
};

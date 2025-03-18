import React from "react";
import { Tooltip, Button } from "@mui/material";

export const ActionButton = ({
  title,
  label,
  icon,
  onClick,
  variant = "outlined",
}) => {
  return (
    <Tooltip title={title}>
      <Button variant={variant} startIcon={icon} onClick={onClick}>
        {label}
      </Button>
    </Tooltip>
  );
};

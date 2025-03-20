import React from "react";
import PropTypes from "prop-types";
import { Tooltip, Button, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/system";

export const ActionButton = ({
  title,
  label,
  icon,
  onClick,
  variant = "outlined",
}) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Tooltip title={title}>
      <Button
        variant={variant}
        startIcon={isSmallScreen ? null : icon}
        onClick={onClick}
        sx={{
          minWidth: isSmallScreen ? "40px" : "auto",
          padding: isSmallScreen ? "6px" : "8px 16px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {isSmallScreen ? icon : label}
      </Button>
    </Tooltip>
  );
};

ActionButton.propTypes = {
  title: PropTypes.string.isRequired,
  label: PropTypes.string,
  icon: PropTypes.node,
  onClick: PropTypes.func.isRequired,
  variant: PropTypes.oneOf(["text", "outlined", "contained"]),
};

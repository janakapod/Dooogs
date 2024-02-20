import { Box } from "@mui/material";
import React from "react";

interface ContentCenterAreaProps {
  children: React.ReactElement;
}

export const ContentCenterArea = ({ children }: ContentCenterAreaProps) => {
  return (
    <Box
      height="100%"
      width="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      {children}
    </Box>
  );
};

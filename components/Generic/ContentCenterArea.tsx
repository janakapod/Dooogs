import { Box } from "@mui/material";
import React from "react";

interface ContentCenterAreaProps {
  children: React.ReactElement;
}

/**
 * Renders a content center area with the provided children.
 *
 * @param {ContentCenterAreaProps} children - The children to be rendered in the content center area.
 */
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

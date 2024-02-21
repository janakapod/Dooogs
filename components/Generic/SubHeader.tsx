import { Typography } from "@mui/material";

interface SubHeaderProps {
  children: string;
}

/**
 * Renders a sub header with the provided children.
 *
 * @param {SubHeaderProps} children - Content which needs to go inside the sub header.
 * @return {JSX.Element} The sub header component.
 */
export const SubHeader = ({ children }: SubHeaderProps) => (
  <Typography variant="h4" marginBottom={"2rem"}>
    {children}
  </Typography>
);

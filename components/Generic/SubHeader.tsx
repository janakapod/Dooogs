import { Typography } from "@mui/material";

interface SubHeaderProps {
  children: string;
}

export const SubHeader = ({ children }: SubHeaderProps) => (
  <Typography variant="h4" marginBottom={"2rem"}>
    {children}
  </Typography>
);

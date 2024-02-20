import { CircularProgress } from "@mui/material";
import { ContentCenterArea } from "./ContentCenterArea";

export const LoadingIndicator = () => {
  return (
    <ContentCenterArea>
      <CircularProgress color="info" />
    </ContentCenterArea>
  );
};

import { CircularProgress } from "@mui/material";
import { ContentCenterArea } from "./ContentCenterArea";

/**
 * Loading indicator to provide a loader behaviour container
 */
export const LoadingIndicator = () => {
  return (
    <ContentCenterArea>
      <CircularProgress color="info" />
    </ContentCenterArea>
  );
};

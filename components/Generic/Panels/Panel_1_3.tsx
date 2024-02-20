import { CollapsiblePanel } from "./CollapsiblePanel";
import { PanelProps } from "./panel.types";

const drawerWidth = "33.3rem";

export const Panel_1_3 = (allProps: PanelProps) => {
  return <CollapsiblePanel drawerWidth={drawerWidth} {...allProps} />;
};

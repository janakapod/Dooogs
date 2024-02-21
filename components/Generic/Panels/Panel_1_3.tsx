import { CollapsiblePanel } from "./CollapsiblePanel";
import { PanelProps } from "./panel.types";

const drawerWidth = "33.3%";

export const Panel_1_3 = (allProps: PanelProps) => {
  return <CollapsiblePanel drawerWidth={drawerWidth} {...allProps} />;
};

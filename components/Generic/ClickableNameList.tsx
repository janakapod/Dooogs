import { List, ListItemButton, ListItemText } from "@mui/material";

interface ClickableNameListProps {
  selectedName?: string;
  nameList?: string[];
  onClick?: (clickedName: string) => void;
}

/**
 * Renders a list of clickable names with the option to select a name.
 *
 * @param {string} selectedName - The selected name
 * @param {string[]} nameList - The list of names
 * @param {Function} onClick - The function to be called when a name is clicked
 * @return {ReactElement} The rendered list of clickable names
 */
export const ClickableNameList = ({
  selectedName,
  nameList,
  onClick,
}: ClickableNameListProps) => {
  const onClickNameListItem = (clickedName: string) => () => {
    onClick?.(clickedName);
  };

  return (
    <List>
      {nameList?.map((nameListItem, index) => (
        <ListItemButton
          key={index}
          onClick={onClickNameListItem(nameListItem)}
          selected={nameListItem === selectedName}
        >
          <ListItemText primary={nameListItem} />
        </ListItemButton>
      ))}
    </List>
  );
};

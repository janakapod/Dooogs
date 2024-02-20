import { List, ListItemButton, ListItemText } from "@mui/material";

interface ClickableNameListProps {
  selectedName?: string;
  nameList?: string[];
  onClick?: (clickedName: string) => void;
}

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

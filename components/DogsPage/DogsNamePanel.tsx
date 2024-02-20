import { AppDispatch, RootState, setSelectedBreed } from "@/store";
import { StoreSelectedAppDogBreedDetails } from "@/types";
import { Box, Paper } from "@mui/material";
import { useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ClickableNameList, LoadingIndicator } from "../Generic";

interface DogsNamePanelProps {
  triggerDrawerClose?: () => void;
}

export const DogsNamePanel = ({ triggerDrawerClose }: DogsNamePanelProps) => {
  const dispatch = useDispatch<AppDispatch>();

  const allBreeds = useSelector(
      (state: RootState) => state.dogsStore.allBreeds
    ),
    currentlySelectedBreed = useSelector(
      (state: RootState) => state.dogsStore.selectedBreed
    );

  // for rendering purposes of the name list
  const namesOfAllTheBreeds = useMemo(
    () => (allBreeds ? Object.keys(allBreeds) : []),
    [allBreeds]
  );

  // to select or deselect breed
  const onSelectBreed = useCallback(
    (selectedBreed: string) => {
      if (!allBreeds) {
        return;
      }

      const selectedBreedOptions: StoreSelectedAppDogBreedDetails =
        selectedBreed !== currentlySelectedBreed?.breedFullName
          ? {
              ...allBreeds[selectedBreed],
              breedFullName: selectedBreed,
            }
          : undefined;
      dispatch(setSelectedBreed(selectedBreedOptions));
      triggerDrawerClose?.();
    },
    [allBreeds, currentlySelectedBreed]
  );

  if (namesOfAllTheBreeds.length === 0) {
    return (
      <Box height="100vh">
        <LoadingIndicator />
      </Box>
    );
  }

  return (
    <Paper>
      <ClickableNameList
        selectedName={currentlySelectedBreed?.breedFullName}
        nameList={namesOfAllTheBreeds}
        onClick={onSelectBreed}
      />
    </Paper>
  );
};

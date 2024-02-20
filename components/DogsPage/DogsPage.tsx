import { AppDispatch, RootState, fetchAllBreeds } from "@/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Box, Typography } from "@mui/material";
import { ContentCenterArea, Panel_1_3 } from "../Generic";
import { DogsNamePanel } from "./DogsNamePanel";
import { DogImageList } from "./DogImageList";

export const DogsPage = () => {
  const dispatch = useDispatch<AppDispatch>();

  const currentlySelectedBreed = useSelector(
    (state: RootState) => state.dogsStore.selectedBreed
  );

  useEffect(() => {
    // to fetch the initial data on page load
    dispatch(fetchAllBreeds());
  }, []);

  const hasUserSelectedABreed = currentlySelectedBreed !== undefined,
    panelTitle = `Images of Dooogs 🐕  ${
      hasUserSelectedABreed ? "- " + currentlySelectedBreed.breedFullName : ""
    }`;
  const contentSection = currentlySelectedBreed ? (
    <DogImageList />
  ) : (
    <Box height="calc(100vh - 4rem)">
      <ContentCenterArea>
        <Typography variant="h6" color="GrayText">
          Select a breed from left panel to load images of cute 🐶
        </Typography>
      </ContentCenterArea>
    </Box>
  );

  return (
    <Box>
      <Panel_1_3
        panelTitle={panelTitle}
        drawer={DogsNamePanel}
        content={contentSection}
      />
    </Box>
  );
};

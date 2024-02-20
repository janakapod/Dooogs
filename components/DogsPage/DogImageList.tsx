import { DogService } from "@/services/DogService";
import { RootState } from "@/store";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ImageGallery } from "../Generic/ImageGallery";
import { Box } from "@mui/material";
import { LoadingIndicator } from "../Generic";

const maxImageCount = 10;

export const DogImageList = () => {
  const [imageSrcList, setImageSrcList] = useState<string[]>([]);

  const currentlySelectedBreed = useSelector(
    (state: RootState) => state.dogsStore.selectedBreed
  );

  useEffect(() => {
    if (currentlySelectedBreed) {
      DogService.getRandomImageListOfBreed(
        currentlySelectedBreed,
        maxImageCount
      ).then((response) => {
        setImageSrcList(response.data.message);
      });
    } else if (imageSrcList.length > 0) {
      setImageSrcList([]);
    }
  }, [currentlySelectedBreed]);

  const content =
    imageSrcList.length === 0 ? (
      <LoadingIndicator />
    ) : (
      <ImageGallery imageSrcList={imageSrcList} />
    );

  return <Box height="calc(100vh - 4rem)">{content}</Box>;
};

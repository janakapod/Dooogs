import { ImageList } from "@mui/material";
import { ImageGalleryItem } from "./ImageGalleryItem";

interface ImageGalleryProps {
  imageSrcList: string[];
}

/**
 * ImageGallery is to provide gallery like view with the 3 column previews
 */
export const ImageGallery = ({ imageSrcList }: ImageGalleryProps) => {
  return (
    <ImageList cols={3} gap={3}>
      {imageSrcList.map((imageSrc, index) => (
        <ImageGalleryItem key={index} imgSrc={imageSrc} />
      ))}
    </ImageList>
  );
};

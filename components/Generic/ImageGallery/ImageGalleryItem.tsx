import { ImageListItem } from "@mui/material";

interface ImageGalleryItemProps {
  title?: string;
  imgSrc: string;
}

/**
 * ImageGalleryItem is part of ImageGallery to provide an instance of preview
 */
export const ImageGalleryItem = ({ title, imgSrc }: ImageGalleryItemProps) => {
  return (
    <ImageListItem>
      <img
        srcSet={`${imgSrc}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
        src={`${imgSrc}?w=164&h=164&fit=crop&auto=format`}
        alt={title}
        loading="lazy"
      />
    </ImageListItem>
  );
};

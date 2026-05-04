import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

type StandardImageListProps = {
  images: string[];
};

export default function StandardImageList({ images }: StandardImageListProps) {
  return (
    <ImageList cols={4}>
      {images.map((item) => (
        <ImageListItem key={item}>
          <img
            srcSet={`${item}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            src={`${item}?w=164&h=164&fit=crop&auto=format`}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

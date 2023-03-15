import React from "react";
import { Grid, Box } from "@mui/material";
import PictureReel from "@/components/ui/picture-reel/PictureReel";

const InstaPhotos = () => {
  return (
    <Box container className="w-full h-full flex flex-wrap mt-10 sm:mt-28 xl:mt-32">
      <PictureReel imageUrl="/assets/img/insta-photo1.jpg" />
      <PictureReel imageUrl="/assets/img/insta-photo2.jpg" />

      <PictureReel imageUrl="/assets/img/insta-photo3.jpg" />

      <PictureReel imageUrl="/assets/img/insta-photo4.jpg" />

      <PictureReel imageUrl="/assets/img/insta-photo5.jpg" />

      <PictureReel imageUrl="/assets/img/insta-photo6.jpg" />
    </Box>
  );
};

export default InstaPhotos;

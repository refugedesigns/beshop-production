import React, { useState } from "react";
import { Box, Typography, Container } from "@mui/material";
import StyledTitle from "../ui/styled-text/StyledTitle";
import PromotionVideo from "../ui/promotion/PromotionVideo";

const PromoSection = () => {
  const [playing, setPlaying] = useState(false)
  return (
    <Box className="mt-20 md:mt-32 mx-4 flex flex-col items-center">
      <Box className="space-y-4">
        <StyledTitle title="Promotion Video" align="center" />
        <Typography variant="h3" className="font-elegant text-center text-4xl lg:text-5xl">Welcome To GoShop</Typography>
        <Typography variant="body1" className="font-elegant text-center text-gray-500 max-w-md">
          Today we can offer our customers exclusive products of 108 brands
          marked &ldquo;only in GoShop&quot;.
        </Typography>
      </Box>
      <Container maxWidth="lg" className="h-[400px] lg:h-[500px] w-full mt-6">
        <PromotionVideo
          title="Promotion Video"
          thumbnail="/assets/img/promo-video-img.jpg"
          videoUrl="https://www.youtube.com/embed/K1yp7Q1hH1c"
          classes="relative w-full h-full"
          playing={playing}
          setPlaying={() => setPlaying(true)}
        />
      </Container>
    </Box>
  );
};

export default PromoSection;

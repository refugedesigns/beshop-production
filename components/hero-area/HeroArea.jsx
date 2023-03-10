import React from "react";

import { Box, Container, Button, Typography } from "@mui/material";

const HeroArea = () => {
  return (
    <Box
      component="section"
      className='bg-[url("/assets/img/main-bg.jpg")] bg-cover bg-center flex flex-col h-[100vh]'
    >
      <Container className="flex flex-col items-start mt-[300px] md:mt-[180px] lg:mt-[280px]">
        <Box className="">
          <Typography
            variant="h2"
            className="font-styling text-style-color pl-2 text-5xl md:text-6xl"
          >
            Professional
          </Typography>
          <Typography
            variant="h2"
            className="font-elegant text-left md:text-8xl  md:mt-4 md:max-w-md lg:max-w-4xl"
          >
            Beauty & Care
          </Typography>
          <Box className="mt-6 max-w-md md:max-w-lg pl-3 md:mt-12">
            <Typography
              variant="body"
              className="font-elegant md:text-xl md:text-gray-500"
            >
              Nourish your skin with toxin-free cosmetic products. With the
              offers that you can&apos;t refuse.
            </Typography>
          </Box>
        </Box>
        <Box className="mt-6 pl-3 md:mt-12">
          <Button
            disableElevation
            variant="contained"
            className="rounded-none bg-black text-white flex justify-center w-[200px]"
          >
            Shop Now
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default HeroArea;

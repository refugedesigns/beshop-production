import React from "react";
import { useRouter } from "next/router";

import { Box, Container, Typography, CardMedia } from "@mui/material";
import Button from "../../ui/button/Button"
import StyledTitle from "@/components/ui/styled-text/StyledTitle";

const HeroArea = () => {
  const router = useRouter()
  return (
    <Box
      component="section"
      className='bg-[url("/assets/img/main-bg.jpg")] bg-cover bg-center flex flex-col h-[100vh] relative'
    >
      <Container className="flex flex-col items-start mt-[200px] sm:mt-[240px] md:mt-[280px] lg:mt-[150px] xl:mt-[200px]">
        <Box className="z-30">
          <StyledTitle title="Professional" classes="pl-2" />
          <Typography
            variant="h2"
            className="font-elegant text-left md:text-8xl  md:mt-4 md:max-w-md lg:max-w-4xl"
          >
            Beauty & Care
          </Typography>
          <Box className="mt-6 max-w-md md:max-w-lg pl-3 md:mt-12">
            <Typography
              variant="body"
              className="font-elegant md:text-xl lg:text-gray-500 "
            >
              Nourish your skin with toxin-free cosmetic products. With the
              offers that you can&apos;t refuse.
            </Typography>
          </Box>
        </Box>
        <Box className="mt-6 pl-3 md:mt-12">
          <Button onClick={() => router.push("/shop")} title="Shop Now" />
        </Box>
      </Container>
      <CardMedia
        component="img"
        height="800"
        image="/assets/img/main-block-decor.png"
        className="object-contain absolute md:-bottom-40 lg:-bottom-60  w-min hidden sm:block sm:h-[22rem] md:h-[36rem] xl:h-full z-10"
      />
    </Box>
  );
};

export default HeroArea;

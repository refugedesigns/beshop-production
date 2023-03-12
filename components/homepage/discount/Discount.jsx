import React from "react";

import { Box, Container, Typography, Grid } from "@mui/material";
import Button from "@/components/ui/button/Button";
import StyledTitle from "@/components/ui/styled-text/StyledTitle";

export const Discount = () => {
  return (
    <Grid
      container
      className="bg-[url('/assets/img/discount-bg.jpg')] bg-cover bg-no-repeat bg-center h-[500px] md:h-[700px]"
    >
      <Grid sm={6}></Grid>
      <Grid sx={12} sm={6} className="pt-24 px-4 flex flex-col items-end md:items-start lg:max-w-lg">
        <StyledTitle title="Discount" classes="" />
        <Box className="">
          <Typography
            variant="h3"
            className="font-elegant max-w-[16rem] text-right mt-4 md:text-left md:text-6xl lg:text-8xl md:max-w-full"
          >
            Get Your <span className="text-style-color">50% </span>off
          </Typography>
        </Box>
        <Box className="">
          <Typography
            variant="h6"
            className="font-elegant text-[16px] mt-6 text-right md:text-2xl md:text-left md:max-w-md"
          >
            Nourish your skin with toxin-free cosmetic products. With the offers
            that you can&lsquo;t refuse.
          </Typography>
        </Box>
        <Button title="Get Now!" classes="mt-10" />
      </Grid>
      <Grid></Grid>
    </Grid>
  );
};

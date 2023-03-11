import React from "react";

import { Box, Container, Typography } from "@mui/material";
import Button from "@/components/ui/button/Button";
import StyledTitle from "@/components/ui/styled-text/StyledTitle";

export const Discount = () => {
  return (
    <Box className="bg-[url('/assets/img/discount-bg.jpg')] bg-cover bg-no-repeat bg-center h-[500px] md:h-[700px] grid grid-cols-2 lg:grid-cols-5">
      <Container className="pt-24 flex flex-col items-end md:items-start space-y-8 col-start-2 lg:col-start-3 lg:col-span-4 lg:max-w-lg" maxWidth="md">
        <StyledTitle title="Discount" classes="" />
        <Box>
          <Typography
            variant="h3"
            className="font-elegant max-w-[240px] text-right md:text-left md:text-7xl lg:text-8xl md:max-w-full"
          >
            Get Your <span className="text-style-color">50% </span>off
          </Typography>
        </Box>
        <Box className="">
          <Typography
            variant="h6"
            className="font-elegant text-[16px] max-w-[280px] text-right md:text-left md:text-lg md:max-w-md"
          >
            Nourish your skin with toxin-free cosmetic products. With the offers
            that you can&lsquo;t refuse.
          </Typography>
        </Box>
        <Button title="Get Now!" classes="mt-6" />
      </Container>
    </Box>
  );
};

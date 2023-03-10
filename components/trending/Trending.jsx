import React from "react";

import { Box, Container, Stack, Typography } from "@mui/material";
import TrendingButton from "./TrendingButton";
import ProductList from "./ProductList";

const Trending = () => {
  return (
    <Box className="py-20">
      <Container maxWidth="md">
        <Stack spacing={3}>
          <Typography className="font-styling text-5xl -mb-4 text-style-color md:text-6xl" variant="h2" align="center">
            Cosmetics
          </Typography>
          <Typography className="font-elegant text-4xl md:text-5xl" variant="h2" align="center">
            Trending Products
          </Typography>
          <Typography className="text-center flex justify-center font-elegant text-sm md:text-lg md:max-w-lg mx-auto md:text-gray-500" variant="body" align="center">
            Nourish your skin with toxin-free cosmetic products. With the offers
            that you can&#39;t refuse.
          </Typography>
        </Stack>
        <Stack direction={{xs: 'column', md: 'row'}} spacing={{md: 4}} className="mt-4 flex flex-col md:flex-row justify-center items-center">
            <TrendingButton title="Make Up"/>
            <TrendingButton title="SPA"/>
            <TrendingButton title="Perfume" />
            <TrendingButton title="Nails"/>
            <TrendingButton title="Skin care"/>
            <TrendingButton isLastChild title="Hair care"/>
        </Stack>
        <ProductList />
      </Container>
    </Box>
  );
};

export default Trending;

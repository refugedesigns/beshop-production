import React from "react";

import { Box, Container, Stack, Typography } from "@mui/material";
import TrendingButton from "./TrendingButton";
import ProductList from "./ProductList";
import PartnerLogos from "../../ui/partner-logos/PartnerLogos";
import StyledTitle from "@/components/ui/styled-text/StyledTitle";

import TrendingTabs from "./TrendingTabs";

const Trending = ({products}) => {
  return (
    <Box className="py-20">
      <Container maxWidth="xl" className="mb-8">
        <Stack spacing={3}>
          <StyledTitle title="Cosmetics" align="center" classes="-mb-4"/>
          <Typography className="font-elegant text-4xl md:text-5xl" variant="h2" align="center">
            Trending Products
          </Typography>
          <Typography className="text-center flex justify-center font-elegant text-sm md:text-lg md:max-w-lg mx-auto md:text-gray-500" variant="body" align="center">
            Nourish your skin with toxin-free cosmetic products. With the offers
            that you can&#39;t refuse.
          </Typography>
        </Stack>
      </Container>
      <TrendingTabs products={products} />
        <PartnerLogos />
    </Box>
  );
};

export default Trending;

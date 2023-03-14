import React from 'react'

import { Container, Typography, Box } from '@mui/material';
import StyledTitle from '@/components/ui/styled-text/StyledTitle';
import ProductList from "../trending/ProductList"
import SubscribeCard from "@/components/ui/subscribe/SubscribeCard";

const NewArrivals = () => {
  return (
    <Box className="">
      <Container maxWidth="lg">
        <StyledTitle
          title="Cosmetics"
          classes="text-center text-[2.5rem] lg:text-[4rem]"
        />
        <Typography
          variant="h4"
          align="center"
          className="font-elegant text-4xl lg:text-6xl"
        >
          New Arrivals
        </Typography>
        <Typography
          variant="body1"
          align="center"
          className="font-elegant mt-6 max-w-sm mx-auto text-gray-500 lg:max-w-md"
        >
          Nourish your skin with toxin-free cosmetic products. With the offers
          you can&lsquo;t refuse.
        </Typography>
      </Container>
      <ProductList />
      <SubscribeCard />
    </Box>
  );
};

export default NewArrivals
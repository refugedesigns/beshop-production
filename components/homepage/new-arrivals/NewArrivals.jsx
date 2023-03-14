import React from 'react'

import { Container, Typography, Box } from '@mui/material';
import StyledTitle from '@/components/ui/styled-text/StyledTitle';
import ProductList from "../trending/ProductList"

const NewArrivals = () => {
  return (
    <Box>
      <Container maxWidth="lg">
        <StyledTitle title="Cosmetics" />
        <Typography variant="h4" align="center">
          New Arrivals
        </Typography>
        <Typography variant="body1" align="center">
          Nourish your skin with toxin-free cosmetic products. With the offers
          you can&lsquo;t refuse.
        </Typography>
      </Container>
      <ProductList />
    </Box>
  );
}

export default NewArrivals
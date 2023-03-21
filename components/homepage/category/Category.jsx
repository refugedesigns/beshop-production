import React from 'react'

import { Container, Typography, Box, Grid } from '@mui/material';
import CategoryCard from '@/components/ui/category-item/CategoryCard';
import StyledTitle from '@/components/ui/styled-text/StyledTitle';

const Category = () => {
  return (
    <Box className="mt-20 mb-10">
      <Container className="flex flex-col items-center">
        <StyledTitle
          title="Popular Collections"
          classes="text-center text-[2.5rem] lg:text-[3rem]"
        />
        <Typography
          variant="h4"
          className="font-elegant text-[40px] text-center lg:text-6xl mt-1"
        >
          Top Catergories
        </Typography>
        <Typography
          variant="body2"
          component="p"
          className="font-elegant text-center text-[14px] mt-6 text-gray-500 max-w-lg lg:text-lg"
        >
          Nourish your skin with toxin-free cosmetic products. With offers that
          you can&lsquo;t refuse.
        </Typography>
      </Container>
      <Grid container columnSpacing={{ sm: 3 }} className="mt-6">
        <Grid item xs={12} sm={4} m={{ xs: 2, sm: 0 }}>
          <CategoryCard
            imageUrl="/assets/img/top-categories-img1.jpg"
            title="SPA"
          />
        </Grid>
        <Grid item xs={12} sm={4} m={{ xs: 2, sm: 0 }}>
          <CategoryCard
            imageUrl="/assets/img/top-categories-img2.jpg"
            title="Nails"
          />
        </Grid>
        <Grid item xs={12} sm={4} m={{ xs: 2, sm: 0 }}>
          <CategoryCard
            imageUrl="/assets/img/top-categories-img3.jpg"
            title="Perfume"
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Category
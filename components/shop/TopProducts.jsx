import React from "react";
import { Stack, Typography, Divider, Box } from "@mui/material";

import ProductSmall from "../ui/product-small/ProductSmall";

const TopProducts = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Top Products
      </Typography>
      <Divider />
      <Stack spacing={2}>
            <ProductSmall imageUrl="/assets/img/product-img3.jpg" title="Spray Balm With Oat Extract" price="200.95" />
            <ProductSmall imageUrl="/assets/img/product-img4.jpg" title="Hydrogel Patches" price="200.95" />
            <ProductSmall imageUrl="/assets/img/product-img5.jpg" title="Detox body Cream" price="200.95" />
      </Stack>
    </Box>
  );
};

export default TopProducts;

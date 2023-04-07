import React from "react";
import { Box, Typography, Stack, Divider } from "@mui/material";
import ProductSmall from "../product-small/ProductSmall";

const ViewedProducts = () => {
  return (
    <Box className="">
      <Typography variant="h5" className="font-elegant">
        You have viewed
      </Typography>
      <Divider className="mt-2 bg-black h-[0.1rem]" />
      <Stack className="mt-6 space-y-4">
        <ProductSmall
          imageUrl="/assets/img/product-img1.jpg"
          title="Foundation Goshop"
          price="200.95"
        />
        <ProductSmall
          imageUrl="/assets/img/product-img2.jpg"
          title="Lotion For Cleansing"
          price="100.95"
        />
        <ProductSmall
          imageUrl="/assets/img/product-img3.jpg"
          title="Tony Mask"
          price="200.95"
        />
      </Stack>
    </Box>
  );
};

export default ViewedProducts;

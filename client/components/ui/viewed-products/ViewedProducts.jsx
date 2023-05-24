import React from "react";
import { Box, Typography, Stack, Divider } from "@mui/material";
import ProductSmall from "../product-small/ProductSmall";

const ViewedProducts = ({ products }) => {

  return (
    <Box className="">
      <Typography variant="h5" className="font-elegant">
        You have viewed
      </Typography>
      <Divider className="mt-2 bg-black h-[0.1rem]" />
      <Stack className="mt-6 space-y-4">
        {products?.slice(0, 3).map((product) => (
          <ProductSmall
            key={product._id}
            title={product.name}
            price={product.price}
            imageUrl={product.image}
            link={`/shop/${product._id}`}
          />
        ))}
      </Stack>
    </Box>
  );
};

export default ViewedProducts;

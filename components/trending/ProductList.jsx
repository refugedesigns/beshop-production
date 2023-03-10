import { Box, Container } from "@mui/material";
import React from "react";
import Product from "../products/Product";

const ProductList = () => {
  return (
    <Box>
      {Array(10)
        .fill(null)
        .map((_, index) => (
          <Product
            title="Spray Balm With Oat Extract"
            salePrice="$249.95"
            realPrice="$200.95"
            key={index}
          />
        ))}
    </Box>
  );
};

export default ProductList;

import React from "react";

import { Container, Typography, Box } from "@mui/material";
import StyledTitle from "@/components/ui/styled-text/StyledTitle";
import ProductList from "@/components/homepage/trending/ProductList";
import SubscribeCard from "@/components/ui/subscribe/SubscribeCard";

const ProductSlick = ({styleTitle, titleHeading, excerpt, products}) => {
  return (
    <Box>
      <Container maxWidth="lg">
        <StyledTitle
          title={styleTitle}
          classes="text-center text-[2.5rem] lg:text-[4rem]"
        />
        <Typography
          variant="h4"
          align="center"
          className="font-elegant text-4xl lg:text-6xl"
        >
          {titleHeading}
        </Typography>
        <Typography
          variant="body1"
          align="center"
          className="font-elegant mt-6 max-w-sm mx-auto text-gray-500 lg:max-w-md"
        >
          {excerpt}
        </Typography>
      </Container>
      <ProductList products={products} />
      <SubscribeCard />
    </Box>
  );
};

export default ProductSlick;
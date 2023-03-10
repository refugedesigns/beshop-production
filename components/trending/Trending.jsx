import React from "react";

import { Box, Container, Typography } from "@mui/material";

const Trending = () => {
  return (
    <Box>
      <Container maxWidth="md">
        <Box>
          <Typography variant="h2" align="center">
            Cosmetics
          </Typography>
          <Typography variant="h2" align="center">
            Trending Products
          </Typography>
          <Typography variant="body" align="center">
            Nourish your skin with toxin-free cosmetic products. With the offers
            that you can&#39;t refuse.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Trending;

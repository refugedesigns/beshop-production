import React from "react";

import { Box, Container, Button, Typography } from "@mui/material";

const HeroArea = () => {
  return (
    <Box
      component="section"
      className='bg-[url("/assets/img/main-bg.jpg")] bg-cover bg-center flex flex-col h-[100vh] relative'
    >
      <Container maxWidth='xl' className="flex flex-col justify-center absolute top-[30%] max-w-xl bg-green-200">
        <Box>
          <Typography>Professional</Typography>
          <Typography>Beauty & Care</Typography>
          <Typography>
            Nourish your skin with toxin-free cosmetic products. With the offers
            that you can&apos;t refuse.
          </Typography>
        </Box>
        <Button className="justify-start">Shop Now</Button>
      </Container>
    </Box>
  );
};

export default HeroArea;

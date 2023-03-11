import React from "react";

import { Container, CardMedia, Stack,Box } from "@mui/material";

const PartnerLogos = () => {
  return (
    <Container
      className="mt-20 flex-wrap flex justify-center items-center lg:space-x-10 xl:space-x-16"
      maxWidth="lg"
    >
      <CardMedia
        component="img"
        image="/assets/img/main-logo1.svg"
        alt="logo"
        className="object-contain h-20 lg:h-28 w-36 p-1 mb-8"
      />
      <CardMedia
        component="img"
        height="100"
        image="/assets/img/main-logo2.svg"
        alt="logo"
        className="object-contain h-20 lg:h-28 w-36 p-1 mb-8"
      />
      <CardMedia
        component="img"
        height="100"
        image="/assets/img/main-logo3.svg"
        alt="logo"
        className="object-contain h-20 lg:h-28 w-36 p-1 mb-8"
      />
      <CardMedia
        component="img"
        height="100"
        image="/assets/img/main-logo4.svg"
        alt="logo"
        className="object-contain h-20 lg:h-24 w-36 p-1 mb-8"
      />
      <CardMedia
        component="img"
        height="100"
        image="/assets/img/main-logo5.svg"
        alt="logo"
        className="object-contain h-16 lg:h-20 w-36 p-1 mb-8"
      />
    </Container>
  );
};

export default PartnerLogos;

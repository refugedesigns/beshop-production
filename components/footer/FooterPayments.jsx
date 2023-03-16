import React from "react";
import { Stack, Box, Typography, CardMedia } from "@mui/material";
import Image from "next/image";

const FooterPayments = () => {
  return (
    <Box className="flex-1">
      <Typography variant="body2" className="text-stone-500 mb-2 text-center md:text-left">
        Payment methods:
      </Typography>
      <Stack direction="row" justifyContent="space-around" className=" space-x-2 md:space-x-0 md:flex-wrap md:flex-1">
        <CardMedia className="w-12 md:w-1/2 flex md:p-1 lg:w-16">
          <Image
            src="/assets/img/payment1.png"
            alt="payment-card"
            width="0"
            height="0"
            sizes="100vw"
            className="w-full h-auto"
          />
        </CardMedia>
        <CardMedia className="w-12 md:w-1/2 flex md:p-1 lg:w-16">
          <Image
            src="/assets/img/payment2.png"
            alt="payment-card"
            width="0"
            height="0"
            sizes="100vw"
            className="w-full h-auto"
          />
        </CardMedia>
        <CardMedia className="w-12 md:w-1/2 flex md:p-1 lg:w-16">
          <Image
            src="/assets/img/payment3.png"
            alt="payment-card"
            width="0"
            height="0"
            sizes="100vw"
            className="w-full h-auto"
          />
        </CardMedia>
        <CardMedia className="w-12 md:w-1/2 flex md:p-1 lg:w-16">
          <Image
            src="/assets/img/payment4.png"
            alt="payment-card"
            width="0"
            height="0"
            sizes="100vw"
            className="w-full h-auto"
          />
        </CardMedia>
      </Stack>
    </Box>
  );
};

export default FooterPayments;

import React from "react";

import {
  Container,
  Typography,
  TextField,
  Box,
  CardMedia,
} from "@mui/material";
import Button from "../button/Button";
import Image from "next/image";

const SubscribeCard = () => {
  return (
    <Box className="relative h-[600px] mx-auto bg-[#FCECEB] mt-20 sm:max-w-3xl lg:max-w-4xl sm:h-[280px] sm:flex sm:justify-end xl:max-w-6xl">
      <CardMedia className="w-full h-full absolute bg-[url('/assets/img/subscribe-img-decor.png')] bg-auto bg-bottom sm:bg-left-bottom z-10">
        <Image
          src="/assets/img/subscribe-img.png"
          alt="subscribe-bg"
          fill
          className="object-contain object-bottom sm:object-left-bottom lg:ml-20"
        />
      </CardMedia>
      <Box className="pt-20 px-4 sm:flex sm:flex-col sm:items-start z-30 sm:pt-10 md:pr-20 lg:pr-4 xl:pr-40">
        <Box className="z-30 -pl-4">
          <Typography variant="h3" component="h2" className="font-elegant">
            Stay In Touch
          </Typography>
          <Typography variant="body1" className="text-gray-500 mt-2">
            Nourish your skin toxin-free cosmetic products.
          </Typography>
        </Box>
        <Box className="mt-5 space-y-4 flex flex-col sm:flex-row sm:justify-center sm:items-center sm:space-y-0">
          <TextField
            id="outlined-basic"
            label=""
            variant="outlined"
            type="email"
            className="z-30 sm:flex-1 lg:w-80"
            placeholder="Enter your email"
            sx={{
              "& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input": {
                backgroundColor: "white",
                border: "none",
                borderRadius: 0,
                zIndex: 40,
              },
            }}
          />
          <Button title="Subscribe" classes="w-full sm:w-max" />
        </Box>
      </Box>
    </Box>
  );
};

export default SubscribeCard;

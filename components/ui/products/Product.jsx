import React from "react";
import { CardMedia, Box, Typography, Stack, IconButton } from "@mui/material";
import {RiSearch2Line} from "react-icons/ri";
import { AiOutlineHeart } from "react-icons/ai";
import { BsCart4 } from "react-icons/bs";

const Product = ({ title, salePrice, realPrice }) => {
  return (
    <Box className="mx-auto lg:mx-3 hover:cursor-pointer relative">
      <Stack className="absolute z-30 top-0 right-0 font-body">
        <Typography
          className="p-1 px-5 bg-style-color text-white"
          variant="body"
        >
          New
        </Typography>
        <Typography
          className="p-1 px-5 bg-emerald-500 text-white"
          variant="body"
        >
          Sale
        </Typography>
      </Stack>
      <Box className="relative group">
        <CardMedia
          component="img"
          height="500"
          image="/assets/img/product-img1.jpg"
        />
        <Box className="hidden group-hover:block">
          <Stack
            justifyContent="center"
            spacing={6}
            alignItems="center"
            direction="row"
            className="w-min absolute z-30 bottom-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          >
            <IconButton size="large" className="z-50 bg-white">
              <AiOutlineHeart />
            </IconButton>
            <IconButton size="large" className="z-50 bg-style-color text-white">
              <BsCart4 />
            </IconButton>
          </Stack>
          <RiSearch2Line className="h-20 w-20 z-50 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          <Box className="z-20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  min-w-full min-h-full bg-gray-300 bg-opacity-40" />
        </Box>
      </Box>
      <Stack className="flex flex-col justify-center items-center space-y-2 mt-4">
        <Typography className="font-elegant text-lg text-center md:text-2xl" variant="body">
          {title}
        </Typography>
        <Box className="space-x-2 font-body">
          <Typography className="line-through" variant="body">
            {salePrice}
          </Typography>
          <Typography className="font-semibold" variant="body">
            {realPrice}
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
};

export default Product;

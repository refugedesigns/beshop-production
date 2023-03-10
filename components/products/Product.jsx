import React from "react";
import { CardMedia, Box, Typography, Stack, IconButton } from "@mui/material";
import { BiSearch } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { BsCart4 } from "react-icons/bs";

const Product = ({ title, salePrice, realPrice }) => {
  return (
    <Box className="sm:max-w-[20rem] hover:cursor-pointer relative bg-red-200">
      <Stack className="absolute top-0 right-0 font-body">
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
      <CardMedia
        component="img"
        height="500"
        image="/assets/img/product-img1.jpg"
      />
      <Stack className="flex flex-col justify-center items-center mt-4">
        <Typography className="font-elegant text-lg" variant="body">
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
      <Stack
        justifyContent="center"
        spacing={5}
        alignItems="center"
        direction="row"
        className="w-min hidden hover:block  absolute z-10 bottom-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-300"
      >
        <IconButton>
          <AiOutlineHeart />
        </IconButton>
        <IconButton>
          <BsCart4 />
        </IconButton>
      </Stack>
      <BiSearch />
      <Box className="z-40 min-w-full min-h-full bg-green-500" />
    </Box>
  );
};

export default Product;

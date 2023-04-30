import React, {useRef, useEffect} from "react";
import { CardMedia, Box, Typography, Stack, IconButton } from "@mui/material";
import {RiSearch2Line} from "react-icons/ri";
import { AiOutlineHeart } from "react-icons/ai";
import { BsCart4 } from "react-icons/bs";
import Image from "next/image";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  addToCart,
  selectCartItems,
  selectTotalItems,
} from "@/store/cartSlice";

const Product = ({
  title,
  salePrice,
  realPrice,
  productId,
  isNew,
  isSale,
  productImage,
  classes,
  colors,
  inStock,
  link
}) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const currentNumOfItems = useRef()
  const numOfCartItems = useSelector(selectTotalItems);
  

  useEffect(() => {
    currentNumOfItems.current = numOfCartItems
  }, [numOfCartItems])

  const handleAddToCart = async () => {
    if (!inStock) {
      toast.error("This product is out of stock", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return;
    }
    const item = {
      id: productId,
      image: productImage,
      price: realPrice,
      colors: [colors[0]],
      name: title,
      amount: 1,
    }; 

    await new Promise((resolve, reject) => {
      dispatch(addToCart(item));
      resolve()
    });

      const message =
        currentNumOfItems.current === 1
          ? "You added a product to your cart"
          : `You added ${currentNumOfItems.current} products to your cart`;

    toast.success(message, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };
  return (
    <Box className="mx-auto lg:mx- hover:cursor-pointer relative ">
      <Stack className="absolute z-30 top-0 right-0 font-body">
        {isNew && (
          <Typography
            className="p-1 px-5 bg-style-color text-white"
            variant="body"
          >
            New
          </Typography>
        )}
        {isSale && (
          <Typography
            className="p-1 px-5 bg-emerald-500 text-white"
            variant="body"
          >
            Sale
          </Typography>
        )}
      </Stack>
      <Box className="relative group">
        <CardMedia className={`flex-1 ${classes}`}>
          <Image
            src={productImage}
            height="0"
            width="0"
            sizes="100vw"
            className="w-full h-full"
            alt=""
          />
        </CardMedia>
        <Box className="hidden group-hover:block">
          <Stack
            justifyContent="center"
            spacing={6}
            alignItems="center"
            direction="row"
            className="w-min absolute z-30 bottom-8 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          >
            <IconButton size="large" className="z-50 bg-white">
              <AiOutlineHeart />
            </IconButton>
            <IconButton
              onClick={handleAddToCart}
              size="large"
              className="z-50 bg-style-color text-white"
            >
              <BsCart4 />
            </IconButton>
          </Stack>
          <RiSearch2Line
            onClick={() => router.push(link)}
            className="h-20 w-20 z-50 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          />
          <Box className="z-20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  min-w-full min-h-full bg-gray-300 bg-opacity-40" />
        </Box>
      </Box>
      <Stack className="flex flex-col justify-center items-center space-y-2 mt-4">
        <Typography
          className="font-elegant text-lg text-center md:text-2xl"
          variant="body"
        >
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

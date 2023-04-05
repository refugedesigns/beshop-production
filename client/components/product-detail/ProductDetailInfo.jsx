import React, { useState } from "react";
import { Box, Divider, Typography, Stack, Checkbox, IconButton, TextField } from "@mui/material";
import { RiCheckboxBlankFill } from "react-icons/ri";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { BsCart4 } from "react-icons/bs";
import { AiOutlineHeart, AiFillCheckSquare } from "react-icons/ai";
import ContactSocial from "../ui/social/ContactSocial";
import Button from "../ui/button/Button";

const ProductDetailInfo = ({
  title,
  inStock,
  productNumber,
  oldPrice,
  realPrice,
  content,
  colors,
}) => {
    const [checkedColors, setCheckedColors] = useState(colors?.reduce((acc, val) =>{
        acc = false
        return acc
    }))
    const [wishButtonHover, setWishButtonHover] = useState(false)


    const handleCheckColor = (event) => {
        setCheckedColors({
            ...state,
            [event.target.value]: event.target.checked
        })
    }
  return (
    <Box className="my-10 lg:my-20 lg:w-1/2" component="section">
      <Typography variant="h3" className="font-elegant text-4xl">
        {title}
      </Typography>
      <Box className="mt-2">
        {inStock ? (
          <Typography
            variant="body2"
            className="uppercase text-green-500 text-xs"
          >
            In Stock
          </Typography>
        ) : (
          <Typography
            variant="body1"
            className="uppercase text-red-500 text-xs line-through"
          >
            Out Of Stock
          </Typography>
        )}
        <Typography variant="body2" className="text-xs mt-2 text-gray-500">
          SKU: {productNumber}
        </Typography>
      </Box>
      <Stack direction="row" alignItems="end" className="mt-4 space-x-4">
        <Typography
          variant="body1"
          className="text-gray-500 text-lg font-lato line-through"
        >
          ${oldPrice}
        </Typography>
        <Typography variant="body1" className="text-3xl">
          ${realPrice}
        </Typography>
      </Stack>
      <Typography variant="body2" className="mt-6 font-elegant text-gray-500">
        {content}
      </Typography>
      <Box className="my-8">
        <ContactSocial />
      </Box>
      <Divider />
      <Stack direction={{sm: 'row'}} className="mt-12 sm:justify-between sm:align-start">
        <Box>
          <Typography variant="body1" className="pl-2">
            Color:
          </Typography>
          <Box className="sm:mt-4">
            {colors?.map((color, index) => {
              return (
                <Checkbox
                  value={color}
                  key={index}
                  icon={
                    <RiCheckboxBlankFill color={color} className="w-8 h-8" />
                  }
                  checkedIcon={
                    <AiFillCheckSquare color={color} className="w-8 h-8" />
                  }
                  className="m-0 p-0"
                />
              );
            })}
          </Box>
        </Box>
        <Box className="mt-4 mb-8 sm:mt-0">
          <Typography variant="body1" className="pl-2">
            Quantity:
          </Typography>
          <Box className="mt-1">
            <IconButton className="bg-custom-gray border border-solid border-[#eee] rounded-none">
              <IoIosArrowBack className="text-gray-400" />
            </IconButton>
            <TextField
              name="quantity"
              id="quantity"
              aria-label="Quantity"
              size="small"
              className="w-16"
              value="12"
              sx={{
                "& fieldset": {
                  borderRadius: 0,
                  border: "none",
                },
              }}
              inputProps={{
                sx: {
                  textAlign: "center",
                },
              }}
            />
            <IconButton className="bg-custom-gray border border-solid border-[#eee] rounded-none">
              <IoIosArrowForward className="text-gray-400" />
            </IconButton>
          </Box>
        </Box>
      </Stack>
      <Stack direction={{sm: "row"}} className="space-y-2 sm:space-y-0 sm:space-x-4 sm:mt-8">
        <Button
          startIcon={<BsCart4 />}
          title="Cart"
          classes="w-full font-semibold sm:w-max sm:px-14 hover:opacity-80"
        />
        <Button
          startIcon={<AiOutlineHeart className={wishButtonHover ? "text-white": 'text-black'} />}
          title="Wish"
          classes="w-full text-black bg-custom-gray border border-solid border-[#eee] font-semibold sm:w-max sm:px-14 hover:text-white hover:bg-black"
          onMouseOver={() => setWishButtonHover(true)}
          onMouseOut={() => setWishButtonHover(false)}
        />
      </Stack>
    </Box>
  );
};

export default ProductDetailInfo;

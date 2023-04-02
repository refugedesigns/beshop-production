import React, { useState } from "react";
import { Box, Divider, Typography, Stack, Checkbox, IconButton, TextField } from "@mui/material";
import { RiCheckboxBlankFill } from "react-icons/ri";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { BsCart4 } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
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

    const handleCheckColor = (event) => {
        setCheckedColors({
            ...state,
            [event.target.value]: event.target.checked
        })
    }
  return (
    <Box component="section">
      <Typography variant="h3">{title}</Typography>
      <Box>
        {inStock ? (
          <Typography variant="body1">In Stock</Typography>
        ) : (
          <Typography variant="body1">Out Of Stock</Typography>
        )}
        <Typography variant="body1">SKU: {productNumber}</Typography>
      </Box>
      <Stack>
        <Typography variant="body1">{oldPrice}</Typography>
        <Typography variant="h3">{realPrice}</Typography>
      </Stack>
      <Typography variant="body1">{content}</Typography>
      <Box>
        <ContactSocial />
      </Box>
      <Divider />
      <Stack>
        <Box>
            <Typography variant="body1">Color:</Typography>
            <Box>
                {colors?.map((color, index) =>(
                     <Checkbox value={color} key={index} icon={<RiCheckboxBlankFill className={`bg-[${color}]`} />} />
                ))}
            </Box>
        </Box>
        <Box>
            <Typography variant="body1">Quantity:</Typography>
            <Box>
                <IconButton>
                    <IoIosArrowBack />
                </IconButton>
                <TextField 
                name="quantity"
                id="quantity"
                aria-label="Quantity"
                size="small"
                />
                <IconButton>
                    <IoIosArrowForward />
                </IconButton>
            </Box>
        </Box>
      </Stack>
      <Stack>
        <Button startIcon={<BsCart4 />} title="Cart" />
        <Button startIcon={<AiOutlineHeart />} title="Wish" />
      </Stack>
    </Box>
  );
};

export default ProductDetailInfo;

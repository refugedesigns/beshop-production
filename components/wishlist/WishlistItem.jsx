import React from "react";
import {
  TableRow,
  CardMedia,
  Box,
  Typography,
  Button,
} from "@mui/material";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import StyledTableCell from "../profile/StyledTableCell";
import Image from "next/image";

const WishlistItem = ({
  productImage,
  productTitle,
  productNumber,
  productPrice,
  productStatus,
}) => {
  return (
    <TableRow>
      <StyledTableCell className="flex space-x-4 border border-b border-solid border-r-0 border-[#eee] h-32">
        <CardMedia className="w-16">
          <Image
            src={productImage}
            width="0"
            height="0"
            sizes="100vw"
            className="w-full h-auto"
            alt={productTitle}
          />
        </CardMedia>
        <Box className="space-y-3">
          <Typography
            component="p"
            variant="body1"
            className="whitespace-nowrap font-elegant text-2xl"
          >
            {productTitle}
          </Typography>
          <Typography
            component="p"
            variant="body2"
            className="whitespace-nowrap text-xs text-gray-500"
          >
            SKU: {productNumber}
          </Typography>
        </Box>
      </StyledTableCell>
      <StyledTableCell className="border border-b border-solid border-r-0 border-l-0 border-[#eee] h-32">
        {productPrice}
      </StyledTableCell>
      <StyledTableCell
        className="border border-b border-solid border-r-0 border-l-0 border-[#eee] h-32"
        align="center"
      >
        {productStatus ? <Typography variant="body2" className="whitespace-nowrap uppercase text-green-500">In Stock</Typography> : <Typography variant="body2" className="whitespace-nowrap uppercase line-through text-red-500">Out of Stock</Typography>}
      </StyledTableCell>
      <StyledTableCell
        className="border border-b border-solid border-l-0 border-[#eee] h-32"
        align="center"
      >
        <Button
          className="whitespace-nowrap"
          endIcon={<HiOutlineArrowLongRight />}
          variant="text"
        >
          Buy Now
        </Button>
      </StyledTableCell>
    </TableRow>
  );
};

export default WishlistItem;

import React from "react";
import { useDispatch } from "react-redux";

import { TableRow, TextField, IconButton, Box } from "@mui/material";
import StyledTableCell from "../profile/StyledTableCell";
import { HiOutlinePlus, HiOutlineMinus } from "react-icons/hi2";
import { BsFillTrashFill } from "react-icons/bs";
import { addToCart, deleteFromCart, removeFromCart } from "@/store/cartSlice";

const CartItem = ({
  productTitle,
  productPrice,
  productQuantity,
  totalPrice,
  productId
}) => {
  const dispatch = useDispatch()
  return (
    <TableRow>
      <StyledTableCell className="border border-b border-solid border-r-0 border-[#eee] h-32 font-elegant text-2xl">
        {productTitle}
      </StyledTableCell>
      <StyledTableCell className="border border-b border-solid border-r-0 border-l-0 border-[#eee] h-32 text-base">
        $ {productPrice}
      </StyledTableCell>
      <StyledTableCell
        className="flex justify-center border border-b border-solid border-r-0 border-l-0 border-[#eee] h-32"
        align="center"
      >
        <Box className="flex items-center justify-between w-[45%]">
          <IconButton onClick={() => dispatch(removeFromCart({id: productId}))} className="bg-custom-gray border border-solid border-[#eee]">
            <HiOutlineMinus className="text-red-500" />
          </IconButton>
          <TextField
            name="quantity"
            id="quantity"
            type="number"
            value={productQuantity || 10}
            size="small"
            className="flex justify-center mx-4 flex-1 w-max"
            inputProps={{
              style: {
                textAlign: "center",
              },
            }}
            sx={{
              "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button":
                {
                  display: "none",
                },
              "& input[type=number]": {
                MozAppearance: "textfield",
              },
              "& fieldset": {
                border: "none"
              }
            }}
          />
          <IconButton onClick={() => dispatch(addToCart({id: productId, amount: 1}))} className="bg-custom-gray border border-solid border-[#eee]">
            <HiOutlinePlus className="text-green-500" />
          </IconButton>
        </Box>
      </StyledTableCell>
      <StyledTableCell
        className="border border-b border-solid border-l-0 border-r-0 border-[#eee] h-32 text-base font-semibold"
        align="center"
      >
        $ {totalPrice || 10 * parseInt(productPrice)}
      </StyledTableCell>
      <StyledTableCell
        className="border border-b border-solid border-l-0 border-[#eee] h-32 text-base font-semibold"
        align="center"
      >
        <IconButton onClick={() => dispatch(deleteFromCart({id: productId}))}>
          <BsFillTrashFill className="text-red-500" />
        </IconButton>
      </StyledTableCell>
    </TableRow>
  );
};

export default CartItem;

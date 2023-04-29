import React from 'react'
import { useSelector, useDispatch } from 'react-redux';

import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
} from "@mui/material";
import products from "@/data/product/product";
import CartItem from "./CartItem";
import { selectCartItems } from '@/store/cartSlice';
import StyledTableCell from "../profile/StyledTableCell";

const AllCartItems = () => {
  const cartItems = useSelector(selectCartItems);
  return (
    <TableContainer className="mt-10">
      <Table
        sx={{
          borderCollapse: "separate",
          borderSpacing: "0 2rem",
        }}
      >
        <TableHead>
          <TableRow>
            <TableCell className="text-lg font-semibold font-elegant border border-solid border-black border-t-0 border-l-0 border-r-0">
              Product
            </TableCell>
            <TableCell className="text-lg font-semibold font-elegant border border-solid border-black border-t-0 border-l-0 border-r-0">
              Price
            </TableCell>
            <TableCell
              className="text-lg font-semibold font-elegant border border-solid border-black border-t-0 border-l-0 border-r-0"
              align="center"
            >
              Quantity
            </TableCell>
            <TableCell
              className="text-lg font-semibold font-elegant border border-solid border-black border-t-0 border-l-0 border-r-0"
              align="center"
            >
              Total
            </TableCell>
            <TableCell
              className="text-lg font-semibold font-elegant border border-solid border-black border-t-0 border-l-0 border-r-0"
              align="center"
            >
              Action
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <CartItem
                key={item.id}
                productPrice={item.price}
                productQuantity={item.amount}
                productTitle={item.name}
                totalPrice={item.subtotal}
                productId={item.id}
              />
            ))
          ) : (
            <TableRow>
              <StyledTableCell>
                <Typography variant='h5'>No items in your cart</Typography>
              </StyledTableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AllCartItems
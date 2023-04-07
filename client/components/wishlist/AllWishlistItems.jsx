import React from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableContainer,
  TableBody,
} from "@mui/material";
import products from "@/data/product/product";
import WishlistItem from "./WishlistItem";

const AllWishlistItems = () => {
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
              Status
            </TableCell>
            <TableCell
              className="text-lg font-semibold font-elegant border border-solid border-black border-t-0 border-l-0 border-r-0"
              align="center"
            >
              Add To Cart
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.slice(0, 6).map((product) => (
            <WishlistItem
              key={product.id}
              productImage={product.image}
              productTitle={product.name}
              productNumber={product.productNumber}
              productPrice={product.price}
              productStatus={product.isStocked}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AllWishlistItems;

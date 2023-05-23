import React from "react";
import { useSelector } from "react-redux";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableContainer,
  TableBody,
  Typography,
} from "@mui/material";
import products from "@/data/product/product";
import WishlistItem from "./WishlistItem";
import StyledTableCell from "../profile/StyledTableCell";
import { selectCurrentUser } from "@/store/userSlice";

const AllWishlistItems = () => {
  const user = useSelector(selectCurrentUser)
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
          {user?.wishlist?.length > 0 ? (
            user.wishlist.map((product) => (
                <WishlistItem
                  key={product._id}
                  productImage={product.image}
                  productTitle={product.name}
                  productNumber={product.productNumber}
                  productPrice={product.price}
                  productStatus={product.isStocked}
                />
              ))
          ) : (
            <TableRow>
              <StyledTableCell>
                <Typography variant="h4">No Item in your whishlist</Typography>
              </StyledTableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AllWishlistItems;

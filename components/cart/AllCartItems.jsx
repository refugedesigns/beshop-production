import React from 'react'
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material'
import products from "@/data/product/product";
import CartItem from './CartItem'

const AllCartItems = () => {
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
          </TableRow>
        </TableHead>
        <TableBody>
          {products.slice(0, 6).map((product) => (
            <CartItem
              key={product.id}
              productTitle={product.name}
              productPrice={product.price}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default AllCartItems
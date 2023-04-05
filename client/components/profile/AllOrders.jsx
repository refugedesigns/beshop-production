import React, { useState} from 'react'
import {
  Stack,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  Typography,
  Hidden,
} from "@mui/material";
import orders from "@/data/orders/orders";
import SingleOrder from "./SingleOrder";

const AllOrders = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <TableContainer>
      <Hidden smDown>
        <Table className="mb-6 border-solid border-b-2 border-t-0 border-l-0 border-r-0 border-black">
          <TableHead>
            <TableRow>
              <TableCell className="w-[20%]" align="center">
                <Typography variant="body1" className="font-elegant text-2xl">
                  Date
                </Typography>
              </TableCell>
              <TableCell align="center">
                <Typography variant="body1" className="font-elegant text-2xl">
                  Address
                </Typography>
              </TableCell>
              <TableCell className="w-[20%]" align="center">
                <Typography variant="body1" className="font-elegant text-2xl">
                  Amount
                </Typography>
              </TableCell>
              <TableCell className="w-[25%] pl-6" align="left">
                <Typography variant="body1" className="font-elegant text-2xl">
                  Status
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
        </Table>
      </Hidden>
      <Stack spacing={4}>
        {orders.map(
          ({ date, deliveryAddress, amount, status, orderItems }, index) => (
            <SingleOrder
              key={index}
              orderAddress={deliveryAddress}
              orderAmount={amount}
              orderStatus={status}
              orderDate={date}
              orderItems={orderItems}
              index={index}
              expanded={expanded === `panel${index}`}
              onChange={handleChange(`panel${index}`)}
            />
          )
        )}
      </Stack>
    </TableContainer>
  );
};

export default AllOrders
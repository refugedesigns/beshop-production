import React, { useState} from 'react'
import { useGetOrdersQuery } from '@/store/cartSlice';
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
import moment from "moment";

const AllOrders = () => {
  const [expanded, setExpanded] = useState(false);
  const {data, isLoading, isError, isSuccess, error} = useGetOrdersQuery()
  if(isSuccess) {
    console.log(data.orders)
  }
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
        {isSuccess && data.orders.map(
          ({ createdAt, shippingDetails, total, deliveryStatus, orderItems }, index) => {

            // shippingDetails: address: city: "Sunt quaerat nisi en";
            // country: "US";
            // line1: "223 First Freeway";
            // line2: "Et suscipit hic iste";
            // state: "AL";
            
            const date = moment(createdAt).format("LL")
            const deliveryAddress = shippingDetails.address.line1 + " " + shippingDetails.address.city
            const amount = total.toFixed(2)
            
            return <SingleOrder
              key={index}
              orderAddress={deliveryAddress}
              orderAmount={amount}
              orderStatus={deliveryStatus}
              orderDate={date}
              orderItems={orderItems}
              index={index}
              expanded={expanded === `panel${index}`}
              onChange={handleChange(`panel${index}`)}
            />
          }
        )}
      </Stack>
    </TableContainer>
  );
};

export default AllOrders
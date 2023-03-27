import React, { useState} from 'react'
import { Stack, TableContainer } from '@mui/material'
import orders from "@/data/orders/orders";
import SingleOrder from './SingleOrder';

const AllOrders = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <Stack spacing={6}>
      {orders.map(({date, deliveryAddress, amount, status,orderItems}, index) => (
        <SingleOrder key={index} 
        orderAddress={deliveryAddress}
        orderAmount={amount}
        orderStatus={status}
        orderDate={date}
        orderItems={orderItems}
        index={index}
        expanded={expanded === `panel${index}`}
        onChange={handleChange(`panel${index}`)}
        />
      ))}
    </Stack>
  )
}

export default AllOrders
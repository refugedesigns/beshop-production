import { Box, Divider, Typography } from '@mui/material'
import React from 'react'
import Button from '../ui/button/Button'

const TotalAmount = ({discountApplied, totalAmount}) => {
  return (
    <Box className="bg-custom-gray p-4 md:p-10 lg:p-16 lg:flex-1">
        <Box className="flex items-center justify-between pb-4">
        <Typography variant='bod2'>Discount on promo code</Typography>
        <Typography variant='body2'>{discountApplied ? "Yes" : "No"}</Typography>
        </Box>
        <Divider className='bg-black' />
        <Box className="flex justify-between items-center mb-16 mt-6">
        <Typography variant='h5'>Total</Typography>
        <Typography variant='h5'>$ {totalAmount || 3000}</Typography>
        </Box>
        <Button title="Checkout" classes="w-full" />
    </Box>
  )
}

export default TotalAmount
import { Box } from '@mui/material'
import React from 'react'
import PromoCode from './PromoCode'
import TotalAmount from './TotalAmount'

const CheckoutSection = () => {
  return (
    <Box component="section" className='space-y-6 lg:flex lg:space-y-0 lg:space-x-12 lg:mt-20'>
        <PromoCode/>
        <TotalAmount />
    </Box>
  )
}

export default CheckoutSection
import React from 'react'
import { Box, Typography } from '@mui/material'
import Button from '../ui/button/Button'

const DiscountSmall = () => {
  return (
    <Box className="bg-[url('/assets/img/discount-bg-sm.jpg')] ">
        <Typography>Get Your <span>50%</span>Off</Typography>
        <Button title="Get Now!" />
    </Box>
  )
}

export default DiscountSmall
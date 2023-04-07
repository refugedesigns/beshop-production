import React from 'react'
import { Box, Typography } from '@mui/material'
import Button from '../ui/button/Button'

const DiscountSmall = () => {
  return (
    <Box className="bg-[url('/assets/img/discount-bg-sm.jpg')] bg-no-repeat bg-contain bg-[#FCECEB] flex flex-col justify-center h-[300px]  w-full">
      <Box className="mx-8 md:mx-16 lg:mx-4 space-y-4 mt-8 md:flex md:flex-col">
        <Typography variant="h3" className="text-right font-elegant md:max-w-[18rem] md:self-end">
          Get Your <span className="text-style-color">50%</span> Off
        </Typography>
        <Button title="Get Now!" classes="w-full" />
      </Box>
    </Box>
  );
}

export default DiscountSmall
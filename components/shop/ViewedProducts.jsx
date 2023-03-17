import React from 'react'
import { Box, Typography, Stack, Divider } from '@mui/material'
import ProductSmall from '../ui/product-small/ProductSmall'

const ViewedProducts = () => {
  return (
    <Box>
        <Typography variant="h4">Viewed Products</Typography>
        <Divider />
        <Stack>
            <ProductSmall imageUrl="/assets/img/product-img1.jpg" title="Foundation Goshop" price="200.95" />
            <ProductSmall imageUrl="/assets/img/product-img2.jpg" title="Lotion For Cleansing" price="100.95" />
            <ProductSmall imageUrl="/assets/img/product-img3.jpg" title="Tony Mask" price="200.95" />
        </Stack>
    </Box>
  )
}

export default ViewedProducts
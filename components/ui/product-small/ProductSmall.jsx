import React from 'react'
import { CardMedia, Typography, Stack } from '@mui/material'
import Image from 'next/image'

const ProductSmall = ({imageUrl, title, price}) => {
  return (
    <Stack>
        <CardMedia>
            <Image src={imageUrl} height="0" width="0" sizes="100vw" className="w-full h-auto" alt="product image" />
        </CardMedia>
        <Stack spacing={2}>
            <Typography variant="h5" component="h2" className="text-lg font-medium">
                {title}
            </Typography>
            <Typography variant="h6" component="h2" className="text-lg font-medium">
                {price}
            </Typography>
        </Stack>
    </Stack>
  )
}

export default ProductSmall
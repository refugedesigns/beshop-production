import React from 'react'
import { useRouter } from 'next/router'
import { CardMedia, Typography, Stack } from '@mui/material'
import Image from 'next/image'

const ProductSmall = ({imageUrl, title, price, link}) => {
    const router = useRouter()
  const handleProductSmallNav = () => {
    if(!link) return
    router.push(link)
  }
  return (
    <Stack onClick={handleProductSmallNav} direction="row" spacing={2} className='hover:cursor-pointer'>
        <CardMedia className='h-24 w-16'>
            <Image src={imageUrl} height="0" width="0" sizes="100vw" className="w-full h-auto object-contain" alt="product image" />
        </CardMedia>
        <Stack >
            <Typography variant="h5" component="h2" className="text-[1rem] font-medium">
                {title}
            </Typography>
            <Typography variant="h6" component="h2" className="text-sm font-medium text-gray-400">
                {price}
            </Typography>
        </Stack>
    </Stack>
  )
}

export default ProductSmall
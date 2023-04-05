import React from 'react'
import { Box, CardMedia, Typography, Stack } from '@mui/material'
import Image from 'next/image'

const StatsCard = ({number, title}) => {
  return (
    <Stack className='mt-14 flex flex-col items-center'>
        <Box className="w-40 h-full relative mb-8 ">
            <CardMedia className='absolute -z-10 w-[80%] h-auto top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                <Image src="/assets/img/promo-video__num-decor.png" width="0" height="0" sizes="100vw" className="w-full h-auto" alt="" />
            </CardMedia>
            <Typography variant='h4' className='text-5xl text-center font-lato font-semibold text-style-color'>{number}</Typography>
        </Box>
        <Typography variant='h5' className='font-elegant text-center w-min'>{title}</Typography>
    </Stack>
  )
}

export default StatsCard
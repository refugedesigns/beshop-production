import React from 'react'
import { Avatar, Typography, Box, Stack } from '@mui/material'
import Image from 'next/image'

const TestimonialsCard = ({text, userImage, userName}) => {
  return (
    <Box className="flex flex-col items-center justify-center -z-10">
        <Typography className='order-2 font-elegant text-gray-500 text-center max-w-sm md:max-w-md md:text-xl md:order-1 lg:max-w-xl'>{text}</Typography>
        <Stack alignItems="center" className='order-1 mb-6 md:order-2 md:mb-0 md:mt-10'>
            <Avatar className='w-14 h-14'>
                <Image src={userImage} alt={userName + '\'s' + "Testimonial"} width="0" height="0" sizes="100vw" className='w-full h-auto' />
            </Avatar>
            <Typography variant='h5' className='font-elegant max-w-[10rem] md:max-w-lg text-center'>{userName}</Typography>
        </Stack>
    </Box>
  )
}

export default TestimonialsCard
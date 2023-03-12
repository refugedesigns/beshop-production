import React from 'react'

import { Card, CardMedia, Typography, Box } from "@mui/material";

const BenefitCard = ({ cardImage, heading, except }) => {
  return (
    <Card className='shadow-none space-y-4 mx-3'>
      <Box className="relative p-4">
        <CardMedia component='img' image="/assets/img/main-text-decor.png" className="object-contain h-24 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-1"  />
        <CardMedia component="img" image={cardImage} className="h-16 object-contain" />
      </Box>
      <Typography variant="h5" component="h2" className='text-center font-elegant md:text-4xl'>
        {heading}
      </Typography>
      <Typography variant="body2"  className='text-center max-w-xs mx-auto text-gray-500 font-elegant font-medium lg:text-[16px]'>
        {except}
      </Typography>
    </Card>
  );
};

export default BenefitCard
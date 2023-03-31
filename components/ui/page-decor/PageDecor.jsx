import React from 'react'
import { CardMedia } from '@mui/material';
import Image from 'next/image'

const PageDecor = () => {
  return (
    <CardMedia className="absolute top-40 -z-20 hidden md:inline-block">
      <Image
        src="/assets/img/promo-video__decor.jpg"
        width="0"
        height="0"
        sizes="100vw"
        alt=""
        className="w-full h-auto"
      />
    </CardMedia>
  );
}

export default PageDecor
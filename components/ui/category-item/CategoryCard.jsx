import React from 'react'
import Image from "next/image";

import { CardMedia, Box, Typography } from "@mui/material";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import LongArrow from '../long-arrow/LongArrow';


const CategoryCard = ({ imageUrl, title }) => {
  return (
    <Box className="relative hover:cursor-pointer group">
      <CardMedia
        component="img"
        alt={title}
        image={imageUrl}
        className="h-[350px] lg:h-[500px] xl:h-[700px]"
      />
      <Box className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 hidden group-hover:block">
        <Box className="h-16 relative mb-8">
          <Box className="z-30 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <Typography
              variant="h5"
              component="p"
              className="text-center font-elegant text-md"
            >
              {title}
            </Typography>
          </Box>
          <CardMedia>
            <Image
              src="/assets/img/top-categories-decor.png"
              alt="title background image"
              fill
              style={{ objectFit: "contain", zIndex: 20 }}
            />
          </CardMedia>
        </Box>
        <Typography className='uppercase text-white whitespace-nowrap text-sm font-lato text-center z-30' variant="h6" component="p">
          Browse Products-
        </Typography>
        <Box className="flex relative w-16 h-8 justify-center z-30 mx-auto">
         <Image src={require('../../../public/assets/img/icons/arrow-lg.svg')} fill style={{objectFit: "contain", position: "absolute"}} alt="long arrow" className='' />
        </Box>
      </Box>
      <Box className="w-full h-full bg-gray-500 bg-opacity-30 absolute z-20 top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 hidden group-hover:block" />
    </Box>
  );
};

export default CategoryCard;
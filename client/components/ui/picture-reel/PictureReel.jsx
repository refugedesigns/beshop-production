import React from 'react'

import { CardMedia, Box } from "@mui/material";
import { AiOutlineInstagram } from "react-icons/ai";
import Image from "next/image";

const PictureReel = ({ imageUrl }) => {
  return (
    <Box  className="w-1/2 md:w-1/3 xl:w-1/6 relative group">
      <CardMedia className='h-full w-full flex-1 flex'>
        <Image
          src={imageUrl}
          width="0"
          height="0"
          sizes="100vw"
          className="w-full h-auto"
          alt="Insta photo"
        />
      </CardMedia>
      <Box className="absolute z-20 top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 w-full h-full hidden group-hover:block hover:cursor-pointer">
        <AiOutlineInstagram className="h-20 w-20 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        <Box className="bg-gray-800 absolute flex flex-1 w-full h-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-opacity-40" />
      </Box>
    </Box>
  );
};

export default PictureReel
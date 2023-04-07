import React, { useState } from "react";

import { Box, CardMedia, Typography } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const ProductDetailSlick = ({ imageGallery, isNew, isSale }) => {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  return (
    <Box className="lg:w-1/2 mt-20">
      <Slider
        asNavFor={nav2}
        ref={(slider1) => setNav1(slider1)}
        fade={true}
        lazyLoad={true}
        arrows={false}
      >
        {imageGallery?.map((image, index) => (
          <Box className="relative" key={index}>
            <Box className="absolute right-0 flex flex-col">
              {isNew && (
            <Typography
              className="p-1 px-5 bg-style-color text-white"
              variant="body"
            >
              New
            </Typography>
          )}
          {isSale && (
            <Typography
              className="p-1 px-5 bg-emerald-500 text-white"
              variant="body"
            >
              Sale
            </Typography>)}
            </Box>
            <CardMedia className="h-[450px] sm:h-[700px] md:h-[800px] lg:h-[500px] bg-green-500">
              <Image
                src={image}
                width="0"
                height="0"
                sizes="100vw"
                alt=""
                className="w-full h-full object-cover"
              />
            </CardMedia>
          </Box>
        ))}
      </Slider>
      <Slider
        arrows={false}
        asNavFor={nav1}
        ref={(slider2) => setNav2(slider2)}
        slidesToShow={4}
        swipeToSlide={true}
        focusOnSelect={true}
      >
        {imageGallery?.map((image, index) => (
          <CardMedia className="h-20 sm:h-40 lg:h-32 cursor-pointer" key={index}>
            <Image
              src={image}
              width="0"
              height="0"
              sizes="100vw"
              alt=""
              className="w-full h-full"
            />
          </CardMedia>
        ))}
      </Slider>
    </Box>
  );
};

export default ProductDetailSlick;

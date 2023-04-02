import React, { useState } from "react";

import { Box, CardMedia, Typography } from "@mui/material";
import Slider from "react-slick";
import Image from "next/image";

const ProductDetailSlick = ({ imageGallery }) => {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  return (
    <Box>
      <Slider
        asNavFor={nav2}
        ref={(slider1) => setNav1(slider1)}
        fade={true}
        lazyLoad={true}
        arrows={false}
      >
        {imageGallery?.map((image, index) => (
          <Box key={index}>
            <Box>
              <Typography>New</Typography>
              <Typography>Sale</Typography>
            </Box>
            <CardMedia className="w-80">
              <Image
                src={image}
                width="0"
                height="0"
                sizes="100vw"
                alt=""
                className="w-full h-auto"
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
          <CardMedia className="w-80" key={index}>
            <Image
              src={image}
              width="0"
              height="0"
              sizes="100vw"
              alt=""
              className="w-full h-auto"
            />
          </CardMedia>
        ))}
      </Slider>
    </Box>
  );
};

export default ProductDetailSlick;

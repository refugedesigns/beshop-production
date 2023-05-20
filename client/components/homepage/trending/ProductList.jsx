import React from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Slider from "react-slick";
import Product from "../../ui/products/Product";
import NextArrow from "../../ui/arrows/NextArrow";
import PreviousArrow from "../../ui/arrows/PreviousArrow";
import { Box, Skeleton } from "@mui/material";

const ProductList = ({ products, loading }) => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up("lg"));
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PreviousArrow />,
    responsive: [
      {
        breakpoint: 1281,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  return (
    <Slider
      className="mt-10 flex justify-center items-center px-4 lg:px-10"
      {...settings}
    >
      {loading
        ? Array(8)
            .fill(null)
            .map((_, index) => (
              <Box key={index} className="w-[400px] h-[400px] lg:h-[570px]">
                <Skeleton
                  variant="rectangular"
                  height={"100%"}
                  width={"100%"}
                  className="w-full"
                />
                <Skeleton
                  height={40}
                  width={matches ? 300 : 200}
                  className="mx-auto"
                />
                <Skeleton
                  height={30}
                  width={100}
                  className="mx-auto"
                />
              </Box>
            ))
        : products?.map((product, index) => (
            <Product
              title={product.name}
              salePrice={product.oldPrice}
              realPrice={product.price}
              key={product._id ?? index}
              productImage={product.image}
              productId={product._id}
              isNew={product.new}
              isSale={product.isSale}
              colors={product.colors}
              inStock={product.isStocked}
              link={product.link}
            />
          ))}
    </Slider>
  );
};

export default ProductList;

import React from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import Product from "../../ui/products/Product";
import NextArrow from "./NextArrow";
import PreviousArrow from "./PreviousArrow";

const ProductList = () => {
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
      {Array(10)
        .fill(null)
        .map((_, index) => (
          <Product
            title="Spray Balm With Oat Extract"
            salePrice="$249.95"
            realPrice="$200.95"
            key={index}
          />
        ))}
    </Slider>
  );
};

export default ProductList;

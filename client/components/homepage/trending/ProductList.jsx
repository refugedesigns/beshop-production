import React from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import Product from "../../ui/products/Product";
import NextArrow from "../../ui/arrows/NextArrow";
import PreviousArrow from "../../ui/arrows/PreviousArrow";

const ProductList = ({products}) => {
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
      {products?.map((product) => (
        <Product
          title={product.name}
          salePrice={product.oldPrice}
          realPrice={product.price}
          key={product.id}
          productImage={product.image}
          classes="h-[300px] sm:h-[400px] lg:h-[500px]"
        />
      ))}
    </Slider>
  );
};

export default ProductList;

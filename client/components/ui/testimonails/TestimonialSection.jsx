import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Container, Typography } from "@mui/material";
import StyledTitle from "../styled-text/StyledTitle";
import testimonials from "@/data/testimonial/testimonial";
import TestimonialsCard from "./TestimonialsCard";
import PreviousArrow from "../arrows/PreviousArrow";
import NextArrow from "../arrows/NextArrow";

const TestimonialSection = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PreviousArrow classes="absolute left-0 z-10" />,
    nextArrow: <NextArrow classes="absolute right-0 z-10" />
  };
  return (
    <Container className="md:px-10 lg:px-40 mt-10 md:mt-20">
      <Box>
        <StyledTitle title="They Stay" classes="text-center" />
        <Typography variant="h3" className="font-elegant text-center text-4xl xs:text-5xl">Testimonials</Typography>
      </Box>
      <Slider
        {...settings}
        className="mt-10 flex relative justify-center items-start lg:px-10"
      >
        {testimonials.map((testimonial) => (
          <TestimonialsCard
            key={testimonial.id}
            text={testimonial.body}
            userName={testimonial.name}
            userImage={testimonial.image}
          />
        ))}
      </Slider>
    </Container>
  );
};

export default TestimonialSection;

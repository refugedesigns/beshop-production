import React from "react";

import { Box, Container, Typography, Grid } from "@mui/material";
import Button from "@/components/ui/button/Button";
import StyledTitle from "@/components/ui/styled-text/StyledTitle";
import WideCard from "@/components/ui/wide-card/WideCard";

export const Discount = () => {
  return (
    <WideCard
      backgroundUrl={"bg-[url('/assets/img/discount-bg.jpg')]"}
      styledHeading="Discount"
      titleHeading={
        <Typography
          variant="h3"
          className="font-elegant max-w-[16rem] text-right mt-4 md:text-left md:text-6xl lg:text-8xl md:max-w-full"
        >
          Get Your <span className="text-style-color">50% </span>off
        </Typography>
      }
      buttonText="Get Now!"
      except=" Nourish your skin with toxin-free cosmetic products. With the offers
            that you can&lsquo;t refuse."
    />
  );
};

import React from "react";
import { Box, Typography } from "@mui/material";
import StyledTitle from "../ui/styled-text/StyledTitle";

const PromoSection = () => {
  return (
    <Box>
      <Box>
        <StyledTitle title="Promotion Video" align="center" />
        <Typography>Welcome To GoShop</Typography>
        <Typography>
          Today we can offer our customers exclusive products of 108 brands
          marked &ldquo;only in GoShop&quot;.
        </Typography>
      </Box>
    </Box>
  );
};

export default PromoSection;

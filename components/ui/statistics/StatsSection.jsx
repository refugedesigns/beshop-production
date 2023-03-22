import React from "react";
import { Container, Box } from "@mui/material";
import promoNumbers from "@/data/promoNumber/promoNumber";
import StatsCard from "./StatsCard";

const StatsSection = () => {
  return (
    <Container className="flex flex-wrap my-10 lg:mb-20" maxWidth="lg">
      {promoNumbers.map((promoNumber, index) => (
        <Box key={index} className="w-1/2 md:w-1/4">
          <StatsCard title={promoNumber.name} number={promoNumber.number} />
        </Box>
      ))}
    </Container>
  );
};

export default StatsSection;

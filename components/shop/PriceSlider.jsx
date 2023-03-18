import React from 'react'
import { Typography, Box, Divider, Slider } from '@mui/material'

const PriceSlider = () => {
  return (
    <Box className="mt-6">
      <Typography variant="h5" component="h2" className="font-elegant">
        Price
      </Typography>
      <Divider className="mt-2 bg-black h-[0.15rem]" />
      <Slider
        valueLabelDisplay="auto"
        aria-labelledby="discrete-slider-custom"
        step={10}
        marks
        min={0}
        max={100}
        defaultValue={50}
        onChange={(event) => console.log(event.target.value)}
        className="text-style-color"
      />
    </Box>
  );
}

export default PriceSlider
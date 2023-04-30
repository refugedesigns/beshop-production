import React from 'react'
import { useDebouncedCallback } from 'use-debounce';
import { Typography, Box, Divider, Slider } from '@mui/material'

const PriceSlider = ({queryFilter, setQueryFilter}) => {

  const debouncedPrice = useDebouncedCallback((value) => {
    const newFilter = {...queryFilter}
    newFilter.numericFilters = `price>${value}`
    newFilter.page = 1
    console.log(newFilter)
    setQueryFilter(newFilter)
  }, 1000)

  return (
    <Box>
      <Typography variant="h5" component="h2" className="font-elegant">
        Price
      </Typography>
      <Divider className="mt-2 bg-black h-[0.15rem]" />
      <Slider
        valueLabelDisplay="auto"
        aria-labelledby="discrete-slider-custom"
        step={10}
        marks
        min={90}
        max={200}
        defaultValue={50}
        onChange={(event) => debouncedPrice(event.target.value)}
        className="text-style-color"
      />
    </Box>
  );
}

export default PriceSlider
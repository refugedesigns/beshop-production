import React from 'react'
import { Typography, Box, Divider, Slider } from '@mui/material'

const PriceSlider = () => {
  return (
    <Box>
        <Typography variant="h5" component="h2">
          Price
        </Typography>
        <Divider />
        <Slider
          valueLabelDisplay="auto"
          aria-labelledby="discrete-slider-custom"
          step={10}
          marks
          min={0}
          max={100}
          value={50}
          onChange={event => console.log(event.target.value)}
        />
    </Box>
  )
}

export default PriceSlider
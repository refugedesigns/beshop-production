import React from 'react'
import { Box, Checkbox, FormControlLabel } from '@mui/material'

const FilterCheckBox = ({label,...otherProps}) => {
  return (
    <Box className="bg-[#faf9ff] flex-1 px-4 py-1 border-solid border-[1px] border-gray-200 lg:h-min lg:py-0 lg:flex-none">
      <FormControlLabel
        control={
          <Checkbox
            {...otherProps}
          />
        }
        label={label}
      />
    </Box>
  );
}

export default FilterCheckBox
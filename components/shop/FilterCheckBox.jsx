import React from 'react'
import { Box, Checkbox, FormControlLabel } from '@mui/material'

const FilterCheckBox = ({label, icon, checkedIcon,defaultChecked}) => {
  return (
    <Box>
        <FormControlLabel control={<Checkbox defaultChecked={defaultChecked} icon={icon} checkedIcon={checkedIcon} />} label={label}/>
    </Box>
  )
}

export default FilterCheckBox
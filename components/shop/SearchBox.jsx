import React from 'react'
import { Box, TextField } from '@mui/material'

const SearchBox = () => {
  return (
    <Box>
        <TextField
        id="outlined-basic"
        label="Search"
        variant="outlined"
        />
    </Box>
  )
}

export default SearchBox
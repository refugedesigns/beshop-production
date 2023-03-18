import React from 'react'
import { Box, TextField, InputAdornment } from "@mui/material";
import { CiSearch } from "react-icons/ci";

const SearchBox = () => {
  return (
    <Box className="">
      <TextField
        id="outlined-basic"
        label="Search"
        fullWidth
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <CiSearch className='h-8 w-8' />
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
};

export default SearchBox
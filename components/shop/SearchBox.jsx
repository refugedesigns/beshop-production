import React from 'react'
import { Box, TextField, InputAdornment, IconButton } from "@mui/material";
import { CiSearch } from "react-icons/ci";

const SearchBox = () => {
  return (
    <Box className="">
      <TextField
        id="outlined-basic"
        label="Search"
        fullWidth
        size='small'
        InputProps={{
          endAdornment: (

            <InputAdornment className='hover:cursor-pointer' position="end">
              <IconButton>
                <CiSearch className='h-6 w-6' />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
};

export default SearchBox
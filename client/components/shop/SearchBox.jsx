import React, { useState, useEffect, useRef} from 'react'
import { useDebouncedCallback } from "use-debounce"
import { Box, TextField, InputAdornment, IconButton } from "@mui/material";
import { CiSearch } from "react-icons/ci";

const SearchBox = ({queryFilter, setQueryFilter}) => {
  const [searchTerm, setSearchTerm] = useState("")
  
  const debouncedSearchTerm = useDebouncedCallback((value) => {
    setSearchTerm(value)
  }, 2000)

  useEffect(() => {
      const newFilter = {...queryFilter}
      newFilter.search = searchTerm
      setQueryFilter(newFilter)
  }, [searchTerm])

  return (
    <Box>
      <TextField
        id="outlined-basic"
        fullWidth
        size='small'
        value={searchTerm}
        onChange={(e) => debouncedSearchTerm(e.target.value)}
        placeholder='search products'
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
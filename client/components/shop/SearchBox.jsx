import React, { useState, useEffect, useRef} from 'react'
import { useDebounce, useDebouncedCallback } from "use-debounce"
import { Box, TextField, InputAdornment, IconButton } from "@mui/material";
import { CiSearch } from "react-icons/ci";

const SearchBox = ({queryFilter, setQueryFilter}) => {
  const [searchTerm, setSearchTerm] = useState("")
  const [searchTermValue] = useDebounce(searchTerm, 1000)
  
  useEffect(() => {
      const newFilter = {...queryFilter}
      newFilter.search = searchTermValue
      setQueryFilter(newFilter)
  }, [searchTermValue])

  return (
    <Box>
      <TextField
        id="outlined-basic"
        fullWidth
        size='small'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
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
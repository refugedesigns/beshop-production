import React from 'react'
import { TextField, Stack } from '@mui/material'
import { FiSearch } from 'react-icons/fi'
import Button from '../ui/button/Button'

const SearchFAQ = () => {
  return (
    <Stack direction="row" className='mb-10 items-center justify-center flex'>
        <TextField 
        fullWidth
        type="text"
        name="search"
        id="search"
        className="flex-1"
        sx={{
            '& fieldset': {
                borderRadius: 0,
            }
        }}
        />
        <Button title="Search" classes="w-[120px]" startIcon={<FiSearch />} />
    </Stack>
  )
}

export default SearchFAQ
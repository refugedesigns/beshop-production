import React from 'react'
import { TextField, Box } from '@mui/material'
import Button from '../ui/button/Button'

const ContactForm = () => {
  return (
    <Box className="space-y-6 mt-10">
      <TextField
        id="name"
        label=""
        variant="outlined"
        type="text"
        className="z-30 sm:flex-1"
        placeholder="Enter your name"
        fullWidth
        sx={{
          "& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input": {
            backgroundColor: "white",
            borderRadius: 0,
            zIndex: 40,
          },
        }}
      />
      <TextField
        id="email"
        label=""
        variant="outlined"
        type="email"
        className="z-30 sm:flex-1"
        fullWidth
        placeholder="Enter your email"
        sx={{
          "& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input": {
            backgroundColor: "white",
            borderRadius: 0,
            zIndex: 40,
          },
        }}
      />
      <TextField
        id="message"
        label=""
        type="text"
        variant='outlined'
        className="sm:flex-1 border-none hover:outline-none"
        placeholder="Enter your message"
        multiline
        fullWidth
        minRows={8}
        inputProps={{disableUnderline: true}}
        sx={{
          border: "none",
          backgroundColor: "white",
          borderRadius: 0,
          "& fieldset": {
            border: "none",
          }
        }}
      />
      <Button title="Send" classes="bg-gray-800" />
    </Box>
  );
}

export default ContactForm
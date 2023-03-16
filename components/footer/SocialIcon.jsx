import React from 'react'
import { Box, IconButton } from '@mui/material'

const SocialIcon = ({Icon}) => {
  return (
    <IconButton className="w-10 h-10 bg-stone-700 flex justify-center items-center rounded-none hover:cursor-pointer">
        <Icon className="h-6 w-6 text-stone-600" />
    </IconButton>
  )
}

export default SocialIcon
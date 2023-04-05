import React from 'react'
import { IconButton } from '@mui/material'

const SocialIcon = ({Icon, buttonClasses, iconClasses}) => {
  return (
    <IconButton className={`w-10 h-10 ${buttonClasses} flex justify-center items-center rounded-none hover:cursor-pointer`}>
        <Icon className={`h-6 w-6 ${iconClasses}`} />
    </IconButton>
  )
}

export default SocialIcon
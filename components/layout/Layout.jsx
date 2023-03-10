import React from 'react'
import { Box } from '@mui/material'
import Header from '../header/Header'

const Layout = ({children}) => {
  return (
    <Box className="flex flex-col w-full h-full">
        <Header />
        {children}

    </Box>
  )
}

export default Layout
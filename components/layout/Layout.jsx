import React from 'react'
import { Box } from '@mui/material'
import Header from '../header/Header'

const Layout = ({WrappedComponent}) => {
  return (
    <Box className="flex flex-col w-full h-full">
        <Header />
        <WrappedComponent />

    </Box>
  )
}

export default Layout
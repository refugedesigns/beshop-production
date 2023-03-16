import React from 'react'
import { Box } from '@mui/material'
import Header from '../header/Header'
import MainFooter from '../footer/MainFooter'

const Layout = ({children}) => {
  return (
    <Box className="flex flex-col w-full h-full">
        <Header />
        {children}
        <MainFooter />
    </Box>
  )
}

export default Layout
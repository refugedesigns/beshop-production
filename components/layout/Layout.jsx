import React from 'react'
import { Box } from '@mui/material'
import Header from '../header/Header'
import MainFooter from '../footer/MainFooter'

const Layout = ({children}) => {
  return (
    <React.Fragment>
      <Header />
      <Box className="flex flex-col w-full h-full overflow-x-hidden">
        {children}
      </Box>
      <MainFooter />
    </React.Fragment>
  );
}

export default Layout
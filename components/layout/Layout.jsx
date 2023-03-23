import React from 'react'
import { Box } from '@mui/material'
import Header from '../header/Header'
import MainFooter from '../footer/MainFooter'

const Layout = ({children}) => {
  return (
    <React.Fragment>
      <Header />
      <Box className="flex-1 w-full overflow-x-hidden overflow-y-hidden">
        {children}
      </Box>
      <MainFooter />
    </React.Fragment>
  );
}

export default Layout
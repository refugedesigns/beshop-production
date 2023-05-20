import React from 'react'
import { ToastContainer, toast } from "react-toastify";
import { useGetCurrentUserQuery } from '@/store/userSlice';
import "react-toastify/dist/ReactToastify.min.css";
import { Box } from '@mui/material'
import Header from '../header/Header'
import MainFooter from '../footer/MainFooter'

const Layout = ({ children }) => {
  const { data, isSuccess, isError, isLoading } = useGetCurrentUserQuery(
    {},
    { pollingInterval: 3600000, refetchOnMountOrArgChange: true}
  );

  return (
    <React.Fragment>
      <ToastContainer />
      <Header />
      <Box
        component="main"
        className="flex-1 w-full relative overflow-x-hidden overflow-y-hidden"
      >
        {children}
      </Box>
      <MainFooter />
    </React.Fragment>
  );
};

export default Layout
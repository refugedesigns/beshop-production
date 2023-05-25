import React, { Fragment, useEffect } from 'react'
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { clearCartItems } from '@/store/cartSlice';
import Banner from '@/components/ui/banner/Banner'
import Button from '@/components/ui/button/Button';
import PageDecor from '@/components/ui/page-decor/PageDecor'
import { Box, Container, Typography } from '@mui/material';
import NextHead from '@/components/ui/Head/Head';

const SuccessPage = () => {
    const dispatch = useDispatch()
    const router = useRouter()

    useEffect(() => {
        dispatch(clearCartItems())
    }, [])

    const handleOrderNav = () => {
        router.replace("/profile?tab=orders")
    }
  return (
    <Fragment>
      <NextHead title="GoShop - Order Success" description="GoShop Order Success Page" />
      <PageDecor />
      <Banner
        pageTitle="Order Completed"
        breadcrumbs={[{ title: "Shop", link: "/shop" }, { title: "Success" }]}
      />
      <Container maxWidth="lg" className='flex justify-center'>
            <Box className="h-80 flex flex-col items-center justify-center space-y-8 w-[80%] bg-green-200 my-6 py-6 rounded-xl">
                <Typography variant='h5' className='text-3xl text-green-500'>Thank you for your order! Your item is on the way!</Typography>
                <Button title="View Orders" classes="bg-green-500" onClick={handleOrderNav} />
            </Box>
      </Container>
    </Fragment>
  );
}

export default SuccessPage
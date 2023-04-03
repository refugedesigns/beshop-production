import React, {Fragment} from 'react'

import { Box, Container } from '@mui/material'

import AllWishlistItems from '@/components/wishlist/AllWishlistItems'
import Banner from '@/components/ui/banner/Banner'
import Button from '@/components/ui/button/Button'
import ProductSlick from '@/components/ui/products-slick/ProductSlick'
import InstaPhotos from '@/components/ui/insta-photos/InstaPhotos'

import products from "@/data/product/product"

const WishlistPage = () => {
  return (
    <Fragment>
        <Banner pageTitle="Wishlist" breadcrumbs={[{title: "Home", link:"/"}, {title: "Wishlist"}]} />
        <Container component="section">
            <AllWishlistItems />
            <Box className="mt-8 w-full space-y-4 md:flex md:space-y-0 md:space-x-2">
                <Button title="Clear Wishlist" classes="w-full md:w-[20%] whitespace-nowrap bg-custom-gray text-gray-900 tracking-wide h-16 md:h-auto border-solid border-[1px] border-[#eee] hover:bg-black hover:text-white" />
                <Button title="Go Shopping" classes="w-full whitespace-nowrap md:w-[20%] h-16 md:h-auto tracking-wide hover:bg-opacity-70"/>
            </Box>
        </Container>
        <Box className='mt-10 md:mt-20 lg:mt-40' component="section">
            <ProductSlick 
            styleTitle="Cosmetics"
            titleHeading="You Have Viewed"
            excerpt="Nourish your skin with toxin-free produts. With the offers that you can't refuse"
            products={products}
            />
        </Box>
        <Box component="section">
            <InstaPhotos />
        </Box>
    </Fragment>
  )
}

export default WishlistPage
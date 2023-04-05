import React, { Fragment} from 'react'
import Banner from '@/components/ui/banner/Banner'
import { Container } from '@mui/material'
import AllCartItems from '@/components/cart/AllCartItems'
import CheckoutSection from '@/components/cart/CheckoutSection'
import InstaPhotos from '@/components/ui/insta-photos/InstaPhotos'
import PageDecor from '@/components/ui/page-decor/PageDecor'

const CartPage = () => {
  return (
    <Fragment>
        <PageDecor />
        <Banner pageTitle="Cart" breadcrumbs={[{title: "Home", link: "/"}, {title: "Cart"}]} />
        <Container>
            <AllCartItems />
            <CheckoutSection />
        </Container>
        <InstaPhotos />
    </Fragment>
  )
}

export default CartPage
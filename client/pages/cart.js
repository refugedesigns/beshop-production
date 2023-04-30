import React, { Fragment} from 'react'
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";

import { clearCartItems } from "@/store/cartSlice";

import Banner from "@/components/ui/banner/Banner";
import { Container, Box } from "@mui/material";
import Button from "@/components/ui/button/Button";
import AllCartItems from "@/components/cart/AllCartItems";
import CheckoutSection from "@/components/cart/CheckoutSection";
import InstaPhotos from "@/components/ui/insta-photos/InstaPhotos";
import PageDecor from "@/components/ui/page-decor/PageDecor";

const CartPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  return (
    <Fragment>
      <PageDecor />
      <Banner
        pageTitle="Cart"
        breadcrumbs={[{ title: "Home", link: "/" }, { title: "Cart" }]}
      />
      <Container>
        <AllCartItems />
        <Box className="my-8 w-full space-y-4 md:flex md:space-y-0 md:space-x-2">
          <Button
            onClick={() => dispatch(clearCartItems())}
            title="Clear Cart"
            classes="w-full md:w-[20%] whitespace-nowrap bg-custom-gray text-gray-900 tracking-wide h-16 md:h-auto border-solid border-[1px] border-[#eee] hover:bg-black hover:text-white"
          />
          <Button
            onClick={() => router.push("/shop")}
            title="Go Shopping"
            classes="w-full whitespace-nowrap md:w-[20%] h-16 md:h-auto tracking-wide hover:bg-opacity-70"
          />
        </Box>
        <CheckoutSection />
      </Container>
      <InstaPhotos />
    </Fragment>
  );
};

export default CartPage
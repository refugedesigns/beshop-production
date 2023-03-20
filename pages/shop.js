import React from "react";
import { Grid, Box, Container } from "@mui/material";
import { RiCheckboxBlankFill } from "react-icons/ri";
import Layout from "@/components/layout/Layout";
import Banner from "@/components/ui/banner/Banner";
import SearchBox from "@/components/shop/SearchBox";
import CatListView from "@/components/shop/CatListView";
import PriceSlider from "@/components/shop/PriceSlider";
import ViewedProducts from "@/components/shop/ViewedProducts";
import TopProducts from "@/components/shop/TopProducts";
import FilterCheckBox from "@/components/shop/FilterCheckBox";
import FilterDropDown from "@/components/shop/FilterDropDown";
import Product from "@/components/ui/products/Product";
import Pagination from "@/components/ui/pagination/Pagination";
import SubscribeCard from "@/components/ui/subscribe/SubscribeCard";
import InstaPhotos from "@/components/ui/insta-photos/InstaPhotos";

const ShopPage = () => {
  return (
    <Layout>
      <Banner
        pageTitle="Shop"
        breadcrumbs={[{ link: "/", title: "Home" }, { title: "Shop" }]}
      />
      <Container maxWidth="xl">
        <Grid container className="mt-20" columnSpacing={2}>
          <Grid item className="w-full" sm={3}>
            <SearchBox />
            <CatListView />
            <PriceSlider />
            <ViewedProducts />
            <TopProducts />
          </Grid>
          <Grid className="mt-10 sm:mt-0 sm:w-full" item container sm={9}>
            <Grid item container justifyContent="space-between" alignItems="center" className="space-y-4 w-full lg:space-y-0">
              <Grid lg={4} columnSpacing={{lg: 4}} className="flex justify-between space-x-4 w-full lg:w-min lg:justify-start">
                <FilterCheckBox
                  label="Sale"
                  icon={
                    <RiCheckboxBlankFill className="h-6 w-6 text-white border-solid border-gray-100" />
                  }
                  checkedIcon={
                    <RiCheckboxBlankFill className="h-6 w-6 text-style-color" />
                  }
                />
                <FilterCheckBox
                  label="New"
                  icon={
                    <RiCheckboxBlankFill className="h-6 w-6 text-white border-solid border-gray-100" />
                  }
                  checkedIcon={
                    <RiCheckboxBlankFill className="h-6 w-6 text-style-color" />
                  }
                />
              </Grid>
              <Grid item lg={4} className="flex justify-end w-full lg:w-min">
                <FilterDropDown />
              </Grid>
            </Grid>
            <Grid
              columnSpacing={{ sm: 2, md: 4 }}
              className="mt-4"
              item
              container
            >
              {Array(20)
                .fill(null)
                .map((_, index) => (
                  <Grid item key={index} sm={4} flexShrink className="w-full mt-4">
                    <Product
                      title="Hydrogel Patches"
                      salePrice="249.95"
                      realPrice="200.95"
                    />
                  </Grid>
                ))}
              <Grid item justifyContent="center" className="w-full flex">
                <Pagination />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <Box className="mx-4 lg:mx-0">
        <SubscribeCard />
      </Box>
      <InstaPhotos />
    </Layout>
  );
};

export default ShopPage;

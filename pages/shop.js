import React from "react";
import { Grid, Box } from "@mui/material";
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
import Pagination from "@/components/ui/pagination/Pagination"

const ShopPage = () => {
  return (
    <Layout>
      <Banner
        pageTitle="Shop"
        breadcrumbs={[{ link: "/", title: "Home" }, { title: "Shop" }]}
      />
      <Grid container>
        <Grid item>
          <SearchBox />
          <CatListView />
          <PriceSlider />
          <ViewedProducts />
          <TopProducts />
        </Grid>
        <Grid item>
          <Box>
            <Box>
              <FilterCheckBox
                label="Sale"
                icon={<RiCheckboxBlankFill />}
                checkedIcon={<RiCheckboxBlankFill />}
              />
              <FilterCheckBox
                label="New"
                icon={<RiCheckboxBlankFill />}
                checkedIcon={<RiCheckboxBlankFill />}
              />
            </Box>
            <FilterDropDown />
          </Box>
          <Box>
            {Array(20)
              .fill(null)
              .map((_, index) => (
                <Product
                  key={index}
                  title="Hydrogel Patches"
                  salePrice="249.95"
                  realPrice="200.95"
                />
              ))}
            <Pagination />
          </Box>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default ShopPage;

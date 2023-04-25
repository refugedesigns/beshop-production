import React, { Fragment, useEffect, useMemo, useRef, useState } from "react";
import { Grid, Box, Container } from "@mui/material";
import { RiCheckboxBlankFill } from "react-icons/ri";
import Banner from "@/components/ui/banner/Banner";
import SearchBox from "@/components/shop/SearchBox";
import CatListView from "@/components/shop/CatListView";
import PriceSlider from "@/components/shop/PriceSlider";
import ViewedProducts from "@/components/ui/viewed-products/ViewedProducts";
import TopProducts from "@/components/shop/TopProducts";
import FilterCheckBox from "@/components/shop/FilterCheckBox";
import FilterDropDown from "@/components/shop/FilterDropDown";
import Product from "@/components/ui/products/Product";
import Pagination from "@/components/ui/pagination/Pagination";
import SubscribeCard from "@/components/ui/subscribe/SubscribeCard";
import InstaPhotos from "@/components/ui/insta-photos/InstaPhotos";

import { useSelector, useDispatch } from "react-redux";
import {
  selectAllProducts,
  useFetchProductsByFilterQuery,
} from "@/store/productsSlice";

import products from "@/data/product/product";

let ShopPage = () => {
  const dispatch = useDispatch();
  const [queryFilter, setQueryFilter] = useState("?limit=20&sort=price");

  const [checkedNewProduct, setCheckedNewProducts] = useState(false);
  const [checkedSaleProduct, setCheckedSaleProducts] = useState(false);
  const { data, isLoading, isError, isSuccess, refetch } =
    useFetchProductsByFilterQuery(queryFilter, {refetchOnMountOrArgChange: true,});

  const memoizedProducts = useMemo(() => data, [data])

  if (isSuccess) {
    console.log(data)
    
  }

  useEffect(() => {

  }, [memoizedProducts])

  const handleFetchNewProducts = async () => {
    if (checkedNewProduct) {
      setCheckedNewProducts(false);
      setQueryFilter((prevFilter) => {
        if (prevFilter.includes("&isNew=true")) {
          prevFilter = prevFilter.replace("&isNew=true", "");
        } else if (prevFilter.includes("&isNew=false")) {
          prevFilter = prevFilter.replace("&isNew=false", "");
        }
        console.log(prevFilter);
        return prevFilter;
      });
    } else {
      setCheckedNewProducts(true);
      setQueryFilter((prevFilter) => {
        if (prevFilter.includes("&isNew=true")) {
          prevFilter = prevFilter.replace("&isNew=true", "");
        } else if (prevFilter.includes("&isNew=false")) {
          prevFilter = prevFilter.replace("&isNew=false", "");
        }
        prevFilter = prevFilter + "&isNew=true";

        console.log(prevFilter);
        return prevFilter;
      });
    }

  };

  useEffect(() => {
    console.log(queryFilter);
  }, [queryFilter]);

  const handleFetchSaleProducts = () => {
    if (checkedSaleProduct) {
      setCheckedSaleProducts(false);
      setQueryFilter((prevFilter) => {
        if (prevFilter.includes("&isSale=true")) {
          prevFilter = prevFilter.replace("&isSale=true", "");
        } else if (prevFilter.includes("&isSale=false")) {
          prevFilter = prevFilter.replace("&isSale=false", "");
        }
        console.log(prevFilter);
        return prevFilter;
      });
    } else {
      setCheckedSaleProducts(true);
      setQueryFilter((prevFilter) => {
        if (prevFilter.includes("&isSale=true")) {
          prevFilter = prevFilter.replace("&isSale=true", "");
        } else if (prevFilter.includes("&isSale=false")) {
          prevFilter = prevFilter.replace("&isSale=false", "");
        }
        prevFilter = prevFilter + "&isSale=true";

        console.log(prevFilter);
        return prevFilter;
      });
    }
  };
  return (
    <Fragment>
      <Banner
        pageTitle="Shop"
        breadcrumbs={[{ link: "/", title: "Home" }, { title: "Shop" }]}
      />
      <Container maxWidth="lg">
        <Grid container className="mt-20" columnSpacing={2}>
          <Grid
            item
            className="w-full space-y-6 md:space-y-12 lg:space-y-16"
            sm={3}
          >
            <SearchBox />
            <CatListView setQueryFilter={setQueryFilter} />
            <PriceSlider />
            <ViewedProducts />
            <TopProducts />
          </Grid>
          <Grid className="mt-10 sm:mt-0 sm:w-full" item container sm={9}>
            <Grid
              item
              container
              justifyContent="space-between"
              alignItems="center"
              className="space-y-4 w-full lg:space-y-0"
            >
              <Grid
                item
                lg={4}
                columnSpacing={{ lg: 4 }}
                className="flex justify-between space-x-4 w-full lg:w-min lg:justify-start"
              >
                <FilterCheckBox
                  checked={checkedSaleProduct}
                  onClick={handleFetchSaleProducts}
                  label="Sale"
                  icon={
                    <RiCheckboxBlankFill className="h-6 w-6 text-white border-solid border-gray-100" />
                  }
                  checkedIcon={
                    <RiCheckboxBlankFill className="h-6 w-6 text-style-color" />
                  }
                />
                <FilterCheckBox
                  checked={checkedNewProduct}
                  onClick={handleFetchNewProducts}
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
                <FilterDropDown setQueryFilter={setQueryFilter} />
              </Grid>
            </Grid>
            <Grid
              columnSpacing={{ sm: 2, md: 4 }}
              className="mt-4"
              item
              container
            >
              {/* {products?.map((product, index) => (
                <Grid
                  item
                  key={product.id}
                  sm={4}
                  flexShrink
                  className="w-full mt-4"
                >
                  <Product
                    title={product.name}
                    salePrice={product.oldPrice}
                    realPrice={product.price}
                    productId={product.id}
                    isSale={product.isSale}
                    isNew={product.isNew}
                    productImage={product.image}
                    colors={products.colors}
                    classes="h-[500px] sm:h-[250px] lg:h-[350px]"
                  />
                </Grid>
              ))} */}
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
    </Fragment>
  );
};

ShopPage = React.memo(ShopPage)

export default ShopPage;

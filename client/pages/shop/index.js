import React, { Fragment, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Grid, Box, Container, Typography } from "@mui/material";
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

import { ThreeDots } from "react-loader-spinner";

import { useSelector} from "react-redux";
import {
  selectAllProducts,
  useFetchProductsByFilterQuery,
  selectNumOfPages
} from "@/store/productsSlice";
import { selectCurrentUser } from "@/store/userSlice";
import WishlistModal from "@/components/ui/modals/WishlistModal";
import NextHead from "@/components/ui/Head/Head";

const ShopPage = () => {
  const [queryFilter, setQueryFilter] = useState({
    limit: 9,
    sort: "price",
    page: 1,
  });
  const router = useRouter();
  const products = useSelector(selectAllProducts);
  const numOfPages = useSelector(selectNumOfPages);
  const user = useSelector(selectCurrentUser)
  const [isFirstRender, setIsFirstRender] = useState(true)
  const [checkedNewProduct, setCheckedNewProducts] = useState(false);
  const [checkedSaleProduct, setCheckedSaleProducts] = useState(false);
  const [openModal, setOpenModal] = useState(false)
  const { data, isLoading, isError, isSuccess, isFetching } =
    useFetchProductsByFilterQuery(queryFilter, {
      refetchOnMountOrArgChange: true,
    });

  let content;

  if (isFetching) {
    content = (
      <Box className="w-full h-[40%] ml-10 flex justify-center items-center">
        <ThreeDots
          height="80"
          width="160"
          radius="9"
          color="#4fa94d"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
        />
      </Box>
    );
  } else if (isError) {    
    content = (
      <Box className="w-full h-[40%] ml-10 flex justify-center items-center">
        <Typography variant="h3">
          Unable to fetch products please try again
        </Typography>
      </Box>
    );
  } else if (isSuccess && products.length > 0) {
    content = products?.map((product, index) => (
      <Grid item key={product._id} sm={4} flexShrink className="w-full mt-4">
        <Product
          title={product.name}
          salePrice={product.oldPrice}
          realPrice={product.price}
          productId={product._id}
          isSale={product.isSale}
          isNew={product.new}
          productImage={product.image}
          inStock={product.isStocked}
          colors={product.colors}
          classes="h-[500px] sm:h-[250px] lg:h-[350px]"
          link={`/shop/${product._id}`}
        />
      </Grid>
    ));
  } else if (products.length === 0) {
    content = (
      <Box className="w-full h-[40%] ml-10 flex justify-center items-center">
        <Typography variant="h4">
          No products available with the provided search queries
        </Typography>
      </Box>
    );
  }

  const handleFetchNewProducts = async () => {
    if (checkedNewProduct) {
      setCheckedNewProducts(false);
      setQueryFilter((prevFilter) => {
        let newFilter = {};
        if (prevFilter.isNew) {
          newFilter = { ...prevFilter, page: 1 };
          delete newFilter.isNew;
        }
        return newFilter;
      });
    } else {
      setCheckedNewProducts(true);
      setQueryFilter((prevFilter) => {
        let newFilter = {};
        if (!prevFilter.isNew) {
          newFilter = {
            ...prevFilter,
            isNew: true,
            page: 1,
          };
        }
        return newFilter;
      });
    }
  };

  useEffect(() => {
    console.log(queryFilter);
    window.scrollTo({ top: 100, behavior: "smooth" });
    if(isFirstRender) {
      setIsFirstRender(false)
    }
    if (router.query.categoryId && isFirstRender) {
      console.log(isFirstRender)
      const newFilter = {
        ...queryFilter,
        filterItems: router.query.categoryId,
      };
      setQueryFilter(newFilter);
    }
  }, [queryFilter]);

  const handleFetchSaleProducts = () => {
    if (checkedSaleProduct) {
      setCheckedSaleProducts(false);
      setQueryFilter((prevFilter) => {
        let newFilter = {};
        if (prevFilter.isSale) {
          newFilter = { ...prevFilter, page: 1 };
          delete newFilter.isSale;
        }
        return newFilter;
      });
    } else {
      setCheckedSaleProducts(true);
      setQueryFilter((prevFilter) => {
        let newFilter = {};
        if (!prevFilter.isSale) {
          newFilter = {
            ...prevFilter,
            isSale: true,
            page: 1,
          };
        }
        console.log(newFilter);
        return newFilter;
      });
    }
  };
  return (
    <Fragment>
      <NextHead title="GoShop - Shop Page" description="This is the main shop page" />
      <WishlistModal />
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
            <SearchBox
              queryFilter={queryFilter}
              setQueryFilter={setQueryFilter}
            />
            <CatListView
              setQueryFilter={setQueryFilter}
              queryFilter={queryFilter}
            />
            <PriceSlider
              setQueryFilter={setQueryFilter}
              queryFilter={queryFilter}
            />
            {user?.viewedProducts?.length > 0 && <ViewedProducts products={user.viewedProducts} />}
            <TopProducts />
          </Grid>
          <Grid className="mt-10 sm:mt-0 sm:w-full h-max" item container sm={9}>
            <Grid
              item
              container
              justifyContent="space-between"
              alignItems="center"
              className="space-y-4 w-full lg:space-y-0 h-min"
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
                <FilterDropDown
                  queryFilter={queryFilter}
                  setQueryFilter={setQueryFilter}
                />
              </Grid>
            </Grid>
            <Grid
              columnSpacing={{ sm: 2, md: 4 }}
              className="mt-4 flex-1 h-full"
              item
              container
            >
              {content}
              {numOfPages > 1 && !isFetching && (
                <Grid
                  item
                  justifyContent="center"
                  className="w-full flex h-min"
                >
                  <Pagination
                    queryFilter={queryFilter}
                    setQueryFilter={setQueryFilter}
                  />
                </Grid>
              )}
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


export default ShopPage;

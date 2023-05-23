import React, { Fragment, useLayoutEffect, useState, useMemo } from "react";
import { useSelector } from "react-redux";

import { Box } from "@mui/material";
import { selectCurrentUser } from "@/store/userSlice";
import { useUpdateViewCountMutation } from "@/store/productsSlice";
import { useUpdateViewedProductsMutation } from "@/store/userSlice";

import PageDecor from "../ui/page-decor/PageDecor";
import Banner from "../ui/banner/Banner";
import ProductDetailInfo from "./ProductDetailInfo";
import ProductDetailReviews from "./ProductDetailReviews";
import ProductDetailSlick from "./ProductDetailSlick";
import InstaPhotos from "../ui/insta-photos/InstaPhotos";

const ProductDetail = ({ product }) => {
  const user = useSelector(selectCurrentUser);
  const [updateProductViewCount, { data, isLoading, isError, isSuccess }] =
    useUpdateViewCountMutation();
  const [
    updateViewedProducts,
    {
      data: userData,
      isLoading: isUserDataLoading,
      isError: isUserDataError,
      isSuccess: isUserDataSuccess,
    },
  ] = useUpdateViewedProductsMutation();

  const memoizedViewedProducts = useMemo(
    () => user.viewedProducts,
    [user.viewedProducts]
  );

  useLayoutEffect(() => {
    const handleProductViewsCount = async () => {
      if (!user._id) {
        let existingProducts = localStorage.getItem("viewedProducts");
        existingProducts = JSON.parse(existingProducts);
        if (existingProducts && existingProducts.length > 0) {
          const existingProduct = existingProducts.find(
            (id) => id === product._id
          );
          if (!existingProduct) {
            existingProducts.push(product._id);
            localStorage.setItem(
              "viewedProducts",
              JSON.stringify(existingProducts)
            );
            // Make call to backend to update product view count
            await updateProductViewCount(product._id);
          }
        } else {
          const viewedProducts = [];
          viewedProducts.push(product._id);
          localStorage.setItem(
            "viewedProducts",
            JSON.stringify(viewedProducts)
          );
          // Make call to backend to update product view count
          await updateProductViewCount(product._id);
        }
      }
    };

    handleProductViewsCount();
  }, []);

  useLayoutEffect(() => {
    const loggedInUser = async () => {
      if (user._id) {
        if (memoizedViewedProducts.length > 0) {
          const existingViewedProducts = memoizedViewedProducts.map(
            (product) => product._id
          );
          if (!existingViewedProducts.includes(product._id)) {

            try {
              const viewedPayload = await updateViewedProducts(product._id).unwrap();
              const viewCountPayload = await updateProductViewCount(product._id).unwrap();
              console.log(viewedPayload)
              console.log(viewCountPayload)
            } catch (error) {}
          }
        } else if (memoizedViewedProducts.length === 0) {
          try {
            await updateViewedProducts(product._id).unwrap();
            await updateProductViewCount(product._id).unwrap();
          } catch (error) {}
        }
      }
    };
    loggedInUser();
  }, []);

  return (
    <Fragment>
      <PageDecor />
      <Banner
        pageTitle="Shop"
        breadcrumbs={[
          { title: "Home", link: "/" },
          { title: "Shop", link: "/shop" },
          { title: "Product" },
        ]}
      />
      <Box className="mx-auto max-w-6xl mb-10 lg:mb-20">
        <Box className="lg:flex lg:justify-between">
          <ProductDetailSlick
            isNew={product.new}
            isSale={product.isSale}
            imageGallery={product.imageGallery}
          />
          <ProductDetailInfo
            productNumber={product.productNumber}
            colors={product.colors}
            content={product.content}
            oldPrice={product.oldPrice}
            realPrice={product.price}
            inStock={product.isStocked}
            title={product.name}
            productId={product._id}
            imageUrl={product.image}
            productName={product.name}
          />
        </Box>
        <ProductDetailReviews
          description={product.description}
          reviews={product?.reviews}
          productId={product._id}
        />
      </Box>
      {/* <ProductSlick
         styleTitle="Cosmetics"
         titleHeading="You Have Viewed"
         excerpt="Nourish your skin with toxin-free produts. With the offers that you can't refuse"
         products={products}
       /> */}
      <InstaPhotos />
    </Fragment>
  );
};

export default ProductDetail;

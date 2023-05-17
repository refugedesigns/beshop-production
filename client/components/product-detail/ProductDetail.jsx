import React, {Fragment, useEffect} from 'react'
import { useSelector } from "react-redux";

import { Box } from "@mui/material";
import { selectCurrentUser } from "@/store/userSlice";
import { useUpdateViewCountMutation } from '@/store/productsSlice';
import { useUpdateViewedProductsMutation } from '@/store/userSlice';

import PageDecor from "../ui/page-decor/PageDecor";
import Banner from "../ui/banner/Banner";
import ProductDetailInfo from "./ProductDetailInfo";
import ProductDetailReviews from "./ProductDetailReviews";
import ProductDetailSlick from "./ProductDetailSlick";
import InstaPhotos from "../ui/insta-photos/InstaPhotos";

const ProductDetail = ({ product }) => {
  const user = useSelector(selectCurrentUser);
  const [updateProductViewCount, { data, isLoading, isError, isSuccess}] = useUpdateViewCountMutation()
  const [updateViewedProducts, { data:userData, isLoading:isUserDataLoading, isError:isUserDataError, isSuccess:isUserDataSuccess}] = useUpdateViewedProductsMutation()

  if(isSuccess) {
    console.log(data)
  }

  useEffect(() => {
    const handleProductViewsCount = async() => {
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
            console.log(product._id)
            updateProductViewCount(product._id)
          }
        } else {
          const viewedProducts = [];
          viewedProducts.push(product._id);
          localStorage.setItem(
            "viewedProducts",
            JSON.stringify(viewedProducts)
          );
          // Make call to backend to update product view count
          updateProductViewCount(product._id)
        }
      }else {
        // Case for logged in user
        if(user.viewedProducts.length > 0 && !user.viewedProducts.includes(product._id)) {
          const existingViewedProducts = user.viewedProducts.map(product => product._id);
          const viewedProducts = [...existingViewedProducts, product._id];
          updateViewedProducts(viewedProducts)
          updateProductViewCount(product._id)
        }else if(user.viewedProducts.length === 0) {
          const viewedProducts = [product._id]
          updateViewedProducts(viewedProducts)
          updateProductViewCount(product._id)
        }
      }
    };

    handleProductViewsCount();
  }, [product._id]);

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

export default ProductDetail
import React, { Fragment } from "react";
import { Container, Box, Grid } from "@mui/material";

import ProductDetailSlick from "@/components/product-detail/ProductDetailSlick";
import Banner from "@/components/ui/banner/Banner";
import PageDecor from "@/components/ui/page-decor/PageDecor";
import ProductDetailInfo from "@/components/product-detail/ProductDetailInfo";
import ProductDetailReviews from "@/components/product-detail/ProductDetailReviews";
import ReviewForm from "@/components/product-detail/ReviewForm";

import products from "@/data/product/product";

const ProdudctDetailPage = ({ product }) => {
  return (
    <Fragment>
      <PageDecor />
      <Banner
        pageTitle="Shop"
        breadcrumbs={[
          { title: "Home", link: "/" },
          { title: "Shop", link: "shop" },
          { title: "Product" },
        ]}
      />
        <Grid container>
          <Grid item>
            <ProductDetailSlick imageGallery={product.imageGallery} />
          </Grid>
          <Grid item>
            <ProductDetailInfo
              productNumber={product.productNumber}
              colors={product.colors}
              content={product.content}
              oldPrice={product.oldPrice}
              realPrice={product.price}
              inStock={product.isStocked}
              title={product.name}
            />
          </Grid>
          <Grid item>
            <ProductDetailReviews />
          </Grid>
          <Grid item>
            <ReviewForm />
          </Grid>
        </Grid>
    </Fragment>
  );
};

export async function getServerSideProps(context) {
  console.log(context.params.productId);
  const product = products.find(
    (product) => product.id === context.params.productId
  );
  return {
    props: { product },
  };
}

export default ProdudctDetailPage;

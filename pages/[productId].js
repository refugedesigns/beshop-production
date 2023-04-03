import React, { Fragment } from "react";
import { Container, Box, Grid } from "@mui/material";

import ProductDetailSlick from "@/components/product-detail/ProductDetailSlick";
import Banner from "@/components/ui/banner/Banner";
import PageDecor from "@/components/ui/page-decor/PageDecor";
import ProductDetailInfo from "@/components/product-detail/ProductDetailInfo";
import ProductDetailReviews from "@/components/product-detail/ProductDetailReviews";
import ProductSlick from "@/components/ui/products-slick/ProductSlick";

import products from "@/data/product/product";
import InstaPhotos from "@/components/ui/insta-photos/InstaPhotos";


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
      <Box className="mx-auto max-w-6xl mb-10 lg:mb-20">
        <Box className="lg:flex lg:justify-between lg:space-x-6 mx-3">
          <ProductDetailSlick isNew={product.isNew} isSale={product.isSale} imageGallery={product.imageGallery} />
          <ProductDetailInfo
            productNumber={product.productNumber}
            colors={product.colors}
            content={product.content}
            oldPrice={product.oldPrice}
            realPrice={product.price}
            inStock={product.isStocked}
            title={product.name}
          />
        </Box>

        <ProductDetailReviews
          description={product.description}
          reviews={product.reviews}
        />
      </Box>
        <ProductSlick
          styleTitle="Cosmetics"
          titleHeading="You Have Viewed"
          excerpt="Nourish your skin with toxin-free produts. With the offers that you can't refuse"
          products={products}
        />
        <InstaPhotos />
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

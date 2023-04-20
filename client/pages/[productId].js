import React, { Fragment, useEffect } from "react";
import { Container, Box, Grid } from "@mui/material";

import ProductDetailSlick from "@/components/product-detail/ProductDetailSlick";
import Banner from "@/components/ui/banner/Banner";
import PageDecor from "@/components/ui/page-decor/PageDecor";
import ProductDetailInfo from "@/components/product-detail/ProductDetailInfo";
import ProductDetailReviews from "@/components/product-detail/ProductDetailReviews";
import ProductSlick from "@/components/ui/products-slick/ProductSlick";

import InstaPhotos from "@/components/ui/insta-photos/InstaPhotos";
import products from "@/data/product/product";

const ProdudctDetailPage = ({ product }) => {
  if (!product) {
    return <p>Loading...</p>;
  }

  useEffect(() => {
    const handleProductViewsCount = () => {
        const existingProducts = localStorage.getItem('viewedProducts')
        if(existingProducts && existingProducts.length > 0) {
          const existingProduct = existingProducts.find( id => id === product._id)
          if(!existingProduct) {
            existingProducts.push( product._id)
            localStorage.setItem('viewedProducts', existingProducts)
            // Make call to backend to update product view count
          }
        } else {
          localStorage.setItem('viewedProducts', [product._id])
          // Make call to backend to update product view count
        }
    }

    handleProductViewsCount()
  }, [])

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
          <ProductDetailSlick
            isNew={product.isNew}
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

export async function getStaticProps(context) {
  const { params } = context;

  const response = await fetch(
    `http://localhost:8000/api/v1/products/${params.productId}`
  );
  const product = await response.json();

  if (!product) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      product: product.product,
    },
  };
}

export async function getStaticPaths() {
  const response = await fetch(
    "http:localhost:8000/api/v1/products?filterItems=makeup&limit=20"
  );
  const products = await response.json();

  const ids = products.products.map((product) => product._id);
  const params = ids.map((id) => ({ params: { productId: id.toString() } }));
 
  return {
    paths: params,
    fallback: true,
  };
}

export default ProdudctDetailPage;

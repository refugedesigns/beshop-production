import React, { Fragment } from "react";
import ProductDetail from "@/components/product-detail/ProductDetail";

import { Container } from "@mui/material";
import { Puff } from "react-loader-spinner";
import NextHead from "@/components/ui/Head/Head";

const ProdudctDetailPage = ({ product }) => {
  if (!product) {
    return (
      <Container
        maxWidth="lg"
        className="min-h-screen flex justify-center items-center"
      >
        <Puff
          height="80"
          width="80"
          radius={1}
          color="#d05278"
          ariaLabel="puff-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </Container>
    );
  }

  return (
    <Fragment>
      <NextHead title={`GoShop - ${product.name}`} description={product.description} />
      <ProductDetail product={product} />
    </Fragment>
  );
};

export async function getStaticProps(context) {
  const { params } = context;

  let product;
  try {
    const response = await fetch(
      `http://localhost:8000/api/v1/products/${params.productId}`
    );
    product = await response.json();
  } catch (error) {
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
  let params;
  try {
    const response = await fetch(
      "http:localhost:8000/api/v1/products?filterItems=makeup&limit=20"
    );
    const products = await response.json();

    const ids = products.products.map((product) => product._id);
    params = ids.map((id) => ({ params: { productId: id.toString() } }));
  } catch (error) {
    return {
      paths: [],
      fallback: "blocking",
    };
  }

  return {
    paths: params,
    fallback: true,
  };
}

export default ProdudctDetailPage;

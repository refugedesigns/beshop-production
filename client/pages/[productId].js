import React from "react";
import ProductDetail from "@/components/product-detail/ProductDetail";


const ProdudctDetailPage = ({ product }) => {
  if (!product) {
    return <p>Loading...</p>;
  }

 return <ProductDetail product={product} />
};

export async function getStaticProps(context) {
  const { params } = context;
  console.log(params)

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

import React, {Fragment, useEffect} from 'react'

import { Box } from '@mui/material';

import PageDecor from '../ui/page-decor/PageDecor';
import Banner from '../ui/banner/Banner';
import ProductDetailInfo from './ProductDetailInfo';
import ProductDetailReviews from './ProductDetailReviews';
import ProductDetailSlick from './ProductDetailSlick';
import ProductSlick from '../ui/products-slick/ProductSlick';
import InstaPhotos from '../ui/insta-photos/InstaPhotos';



const ProductDetail = ({product}) => {



   useEffect(() => {
     const handleProductViewsCount = () => {
       let existingProducts = localStorage.getItem("viewedProducts");
       existingProducts = JSON.parse(existingProducts)
       if (existingProducts && existingProducts.length > 0) {
         const existingProduct = existingProducts.find(
           (id) => id === product._id
         );
         if (!existingProduct) {
           existingProducts.push(product._id);
           localStorage.setItem("viewedProducts", JSON.stringify(existingProducts));
           // Make call to backend to update product view count
         }
       } else {
        const viewedProducts = []
        viewedProducts.push(product._id);
         localStorage.setItem("viewedProducts", JSON.stringify(viewedProducts));
         // Make call to backend to update product view count
       }
     };

     handleProductViewsCount();
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
         <Box className="lg:flex lg:justify-between lg:space-x-6 mx-3">
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
}

export default ProductDetail
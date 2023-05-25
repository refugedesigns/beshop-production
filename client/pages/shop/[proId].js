import React, {Fragment} from 'react'
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { selectProductById } from '@/store/productsSlice';

import ProductDetail from '@/components/product-detail/ProductDetail';
import NextHead from '@/components/ui/Head/Head';

const ShopProductDetailPage = () => {
    const router = useRouter()
    const productId = router.query.proId

    const product = useSelector((state) => selectProductById(state, productId))

    if(!product) {
        return <p>loading</p>
    }

   return (
     <Fragment>
        <NextHead title={`GoShop - ${product.name}`} description={product.description} />
       <ProductDetail product={product} />
     </Fragment>
   );
}

export default ShopProductDetailPage
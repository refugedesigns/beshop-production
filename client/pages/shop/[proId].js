import React from 'react'
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { selectProductById } from '@/store/productsSlice';

import ProductDetail from '@/components/product-detail/ProductDetail';

const ShopProductDetailPage = () => {
    const router = useRouter()
    const productId = router.query.proId
    console.log(productId)
    const product = useSelector((state) => selectProductById(state, productId))
    console.log(product)
    if(!product) {
        return <p>loading</p>
    }

   return <ProductDetail product={product} />
}

export default ShopProductDetailPage
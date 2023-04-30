export const getProductByCategory = async(category) => {
    const response = await fetch(`http://localhost:8000/api/v1/products?filterItems=${category}&limit=20`)
    const result = await response.json()

    const products = result.products.map(product => ({...product, link: `/${product._id}`}))

    return products
}


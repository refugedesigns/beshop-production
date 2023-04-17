export const getProductByCategory = async(category) => {
    const response = await fetch(`http://localhost:8000/api/v1/products?filterItems=${category}&limit=20`)
    const result = await response.json()

    return result.products
}


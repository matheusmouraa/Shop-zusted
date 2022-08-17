import { createContext, useContext, useState } from 'react'

import axios from 'axios'

const ProductsContext = createContext({})

function ProductsProvider({ children }) {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  async function fetchProducts() {
    const response = await axios.get('/products')
    setProducts(response.data.products)
    setLoading(false)
  }

  return (
    <ProductsContext.Provider value={{ products, loading, fetchProducts }}>
      {children}
    </ProductsContext.Provider>
  )
}

function useProducts() {
  const context = useContext(ProductsContext)
  return context
}

export { ProductsProvider, useProducts }

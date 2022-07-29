import { useEffect, useState } from 'react'
import axios from 'axios'

import { Card } from '../Card'

import { Container, Products } from './styles'

export function ProductsContainer() {
  const [products, SetProducts] = useState([])
  const [loading, setLoading] = useState(true)

  async function fetchProducts() {
    const response = await axios.get('/products')
    SetProducts(response.data.products)
    setLoading(false)
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <Container>
      {loading ? (
        <Load />
      ) : (
        <Products>
          {products.map(item => (
            <Card
              key={item.id}
              name={item.name}
              image={item.image}
              price={item.price}
            />
          ))}
        </Products>
      )}
    </Container>
  )
}

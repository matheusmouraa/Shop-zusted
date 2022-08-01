import { useEffect } from 'react'
import { useProducts } from '../../hooks/products'

import { Card } from '../Card'
import { Load } from '../Load'

import { Container, Products } from './styles'

export function ProductsContainer() {
  const { products, loading, fetchProducts } = useProducts()

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <>
      {loading ? (
        <Load />
      ) : (
        <Container>
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
        </Container>
      )}
    </>
  )
}

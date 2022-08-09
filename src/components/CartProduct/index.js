import { Container, RemoveButton, ProductImage, Title, Price } from './styles'

import { X } from 'react-feather'
import { useCartStore } from '../../store/cart'

export function CartProduct({ product }) {
  const { remove } = useCartStore(state => state.actions)

  function handleRemoveProduct() {
    remove(product)
  }

  return (
    <Container>
      <RemoveButton onClick={handleRemoveProduct}>
        <X />
      </RemoveButton>
      <ProductImage src={product.image} />
      <Title>{product.name}</Title>
      <Price>{`R$ ${product.price}`}</Price>
    </Container>
  )
}
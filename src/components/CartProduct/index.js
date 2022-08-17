import { useCartStore } from '../../store/cart'

import {
  Container,
  RemoveButton,
  FeatherIcon,
  ProductImage,
  Title,
  Price
} from './styles'

export function CartProduct({ product }) {
  const { remove } = useCartStore(state => state.actions)

  return (
    <Container>
      <ProductImage src={product.image} />

      <Title>{product.name}</Title>

      <Price>{`R$${product.price.toLocaleString('pt-br')}`}</Price>

      <RemoveButton onClick={() => remove(product)}>
        <FeatherIcon />
      </RemoveButton>
    </Container>
  )
}

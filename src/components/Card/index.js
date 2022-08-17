import { useCartStore } from '../../store/cart'

import { ShoppingBag } from 'react-feather'

import {
  Container,
  ProductImage,
  Content,
  Title,
  Price,
  BuyButton
} from './styles'

export function Card({ product }) {
  const { add } = useCartStore(store => store.actions)

  return (
    <Container>
      <ProductImage
        src={product.image}
        alt={`Imagem do produto ${product.name}`}
      />

      <Content>
        <Title>{product.name}</Title>
        <Price>{`R$ ${product.price.toLocaleString('pt-br')}`}</Price>
      </Content>

      <BuyButton onClick={() => add(product)}>
        Comprar
        <ShoppingBag size={16} color="white" />
      </BuyButton>
    </Container>
  )
}

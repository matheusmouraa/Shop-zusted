import {
  Container,
  ProductImage,
  Content,
  Title,
  Price,
  BuyButton
} from './styles'

import { ShoppingBag } from 'react-feather'

export function Card({ name, image, price }) {
  return (
    <Container>
      <ProductImage src={image} alt={`Imagem do produto ${name}`} />
      <Content>
        <Title>{name}</Title>
        <Price>{`R$ ${price}`}</Price>
      </Content>
      <BuyButton>
        Comprar
        <ShoppingBag size={16} color="white" />
      </BuyButton>
    </Container>
  )
}

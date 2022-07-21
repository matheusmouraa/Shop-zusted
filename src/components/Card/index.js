import {
  Container,
  ProductImage,
  Content,
  Price,
  Description,
  BuyButton
} from './styles'

import { ShoppingBag } from 'react-feather'

export function Card({ name, description, photo, price }) {
  return (
    <Container>
      <ProductImage src={photo} alt={`Imagem do produto ${name}`} />
      <Content>{name}</Content>
      <Price>{`R$ ${price}`}</Price>
      <Description>{description}</Description>
      <BuyButton>
        <ShoppingBag size={16} color="white" />
        Comprar
      </BuyButton>
    </Container>
  )
}

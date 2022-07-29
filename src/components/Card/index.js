import { Container, ProductImage, Content, Price, BuyButton } from './styles'

import { ShoppingBag } from 'react-feather'

export function Card({ name, img, price }) {
  return (
    <Container>
      <ProductImage src={img} alt={`Imagem do produto ${name}`} />
      <Content>{name}</Content>
      <Price>{`R$ ${price}`}</Price>
      <BuyButton>
        <ShoppingBag size={16} color="white" />
        Comprar
      </BuyButton>
    </Container>
  )
}

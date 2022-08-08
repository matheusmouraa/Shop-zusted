import { useState } from 'react'

import { ShoppingBag } from 'react-feather'
import { useCartStore } from '../../store/cart'

import {
  Container,
  ProductImage,
  Content,
  Title,
  Price,
  BuyButton
} from './styles'

export function Card({ props }) {
  const { add } = useCartStore(store => store.actions)
  const { products } = useCartStore(store => store.state)

  function handleAddProduct() {
    add(props)
    console.log(products)
  }

  return (
    <Container>
      <ProductImage src={props.image} alt={`Imagem do produto ${props.name}`} />
      <Content>
        <Title>{props.name}</Title>
        <Price>{`R$ ${props.price}`}</Price>
      </Content>
      <BuyButton onClick={handleAddProduct}>
        Comprar
        <ShoppingBag size={16} color="white" />
      </BuyButton>
    </Container>
  )
}

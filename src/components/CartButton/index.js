import { useCartStore } from '../../store/cart'

import { ShoppingCart } from 'react-feather'

import { Container, Content } from './styles'

export function CartButton() {
  const { toggle } = useCartStore(store => store.actions)
  const { products } = useCartStore(store => store.state)

  return (
    <Container onClick={toggle}>
      <ShoppingCart color="black" size={20} />
      <Content>{products.length}</Content>
    </Container>
  )
}

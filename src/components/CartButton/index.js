import { useCartStore } from '../../store/cart'

import { Container, Content } from './styles'
import { ShoppingCart } from 'react-feather'

export function CartButton() {
  const { toggle } = useCartStore(store => store.actions)
  return (
    <Container onClick={toggle}>
      <ShoppingCart color="black" size={20} />
      <Content>10</Content>
    </Container>
  )
}

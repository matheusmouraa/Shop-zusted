import { useCartStore } from '../../store/cart'

import { Container, Content } from './styles'
import { ShoppingCart } from 'react-feather'

export function CartButton() {
  const { toogle } = useCartStore(store => store.actions)
  return (
    <Container onClick={toogle}>
      <ShoppingCart color="black" size={20} />
      <Content>10</Content>
    </Container>
  )
}

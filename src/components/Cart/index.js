import { useCartStore } from '../../store/cart'

import { Container } from './styles'

export function Cart() {
  const { open } = useCartStore(store => store.state)
  return <Container open={open}></Container>
}

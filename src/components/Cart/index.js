import { useCartStore } from '../../store/cart'
import { Container, Title, CloseButton } from './styles'

import { X } from 'react-feather'

export function Cart() {
  const { open } = useCartStore(store => store.state)
  const { toggle } = useCartStore(store => store.actions)

  return (
    <Container open={open}>
      <Title>
        Carrinho <br /> de compras
      </Title>
      <CloseButton onClick={toggle}>
        <X color="white" size={20} />
      </CloseButton>
    </Container>
  )
}

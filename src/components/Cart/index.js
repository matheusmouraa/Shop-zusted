import { useCartStore } from '../../store/cart'
import { Container, Header, Title, CloseButton, FinishedButton } from './styles'

import { X } from 'react-feather'

export function Cart() {
  const { open, products } = useCartStore(store => store.state)
  const { toggle } = useCartStore(store => store.actions)

  return (
    <Container open={open}>
      <Header>
        <Title>
          Carrinho <br /> de compras
        </Title>
        <CloseButton onClick={toggle}>
          <X color="white" size={20} />
        </CloseButton>
      </Header>

      <FinishedButton>Finalizar Compra</FinishedButton>
    </Container>
  )
}

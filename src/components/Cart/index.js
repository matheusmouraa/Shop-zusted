import { useCartStore } from '../../store/cart'
import { Container, Header, Title, CloseButton, FinishedButton } from './styles'

import { X } from 'react-feather'
import swal from 'sweetalert'

export function Cart() {
  const { open } = useCartStore(store => store.state)
  const { toggle, removeAll } = useCartStore(store => store.actions)

  function handleFinishedBuy() {
    removeAll()
    toggle()
    swal('Compra finalizada!', 'Obrigado pela preferencia!!', 'success')
  }

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

      <FinishedButton onClick={handleFinishedBuy}>
        Finalizar Compra
      </FinishedButton>
    </Container>
  )
}

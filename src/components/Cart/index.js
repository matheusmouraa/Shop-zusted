import { useCartStore } from '../../store/cart'
import {
  Container,
  Header,
  Title,
  CloseButton,
  CardsContainer,
  FinishedButton
} from './styles'

import { X } from 'react-feather'
import swal from 'sweetalert'
import { CartProduct } from '../CartProduct'

export function Cart() {
  const { open, products } = useCartStore(store => store.state)
  const { toggle, removeAll } = useCartStore(store => store.actions)

  function handleFinishedBuy() {
    removeAll()
    toggle()
    swal('Compra finalizada!', 'Obrigado pela preferencia.', 'success')
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

      <CardsContainer scrollbar={products.length > 6 ? true : false}>
        {products.map(item => (
          <CartProduct key={item.id} product={item} />
        ))}
      </CardsContainer>

      <FinishedButton onClick={handleFinishedBuy}>
        Finalizar Compra
      </FinishedButton>
    </Container>
  )
}

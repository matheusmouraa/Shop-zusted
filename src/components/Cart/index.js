import { useCartStore } from '../../store/cart'

import { CartProduct } from '../CartProduct'

import swal from 'sweetalert'

import {
  Container,
  Header,
  Title,
  CloseButton,
  FeatherIcon,
  CardsContainer,
  PriceContainer,
  TotalPrice,
  FinishedButton
} from './styles'

export function Cart() {
  const { open, products, totalPrice } = useCartStore(store => store.state)
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
          <FeatherIcon color="white" />
        </CloseButton>
      </Header>

      <CardsContainer>
        {products.map(item => (
          <CartProduct key={item.id} product={item} />
        ))}
      </CardsContainer>

      <PriceContainer>
        <TotalPrice>Total:</TotalPrice>
        <TotalPrice>{`R$${totalPrice.toLocaleString('pt-br')}`}</TotalPrice>
      </PriceContainer>

      <FinishedButton onClick={handleFinishedBuy}>
        Finalizar Compra
      </FinishedButton>
    </Container>
  )
}

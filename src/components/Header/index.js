import { CartButton } from '../CartButton'

import { Container, Content, Title } from './styles'

export function Header() {
  return (
    <Container>
      <Content>
        <Title>Shop</Title>
      </Content>

      <CartButton />
    </Container>
  )
}

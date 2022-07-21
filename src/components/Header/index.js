import { CartButton } from '../CartButton'

import { Container, Content, Title, Subtitle } from './styles'

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

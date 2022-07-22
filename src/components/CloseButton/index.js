import { Container, FeatherIcon } from './styles'

export function CloseButton(onClick) {
  return (
    <Container onClick={onClick}>
      <FeatherIcon color="white" />
    </Container>
  )
}

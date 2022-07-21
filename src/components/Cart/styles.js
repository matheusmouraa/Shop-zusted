import styled from 'styled-components'

export const Container = styled.div`
  position: absolute;
  visibility: ${({ open }) => (open ? 'visible' : 'hidden')};
  right: 0;
  top: 0;

  height: 100%;
  width: 30%;
  background: red;
`

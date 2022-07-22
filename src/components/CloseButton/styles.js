import styled from 'styled-components'

import { X } from 'react-feather'

export const Container = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 1rem;
  height: 1rem;

  border: 0;
  border-radius: 0.5rem;
  background: black;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  cursor: pointer;
`

export const FeatherIcon = styled(X)`
  width: 0.5rem;
  height: 0.5rem;
`

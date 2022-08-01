import styled from 'styled-components'

import { RotateCcw } from 'react-feather'

export const Container = styled.div`
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  background: rgba(0, 0, 0, 0.25);
`

export const LoadIcon = styled(RotateCcw)`
  animation: spin 1s linear infinite;

  @keyframes spin {
    from {
      transform: rotate(360deg);
    }
    to {
      transform: rotate(0deg);
    }
  }
`

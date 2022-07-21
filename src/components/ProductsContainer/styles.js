import styled from 'styled-components'

export const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100vh;
`

export const Products = styled.div`
  display: grid;
  grid-column-gap: 31px;
  grid-row-gap: 22px;
  justify-content: center;

  @media (max-width: 640px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
    padding-top: 38rem;
    padding-bottom: 1rem;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: 1280px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`

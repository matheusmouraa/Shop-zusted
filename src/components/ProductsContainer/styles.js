import styled from 'styled-components'

export const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100vh;
`

export const Products = styled.div`
  display: grid;
  justify-content: center;
  grid-row-gap: 1.3rem;
  grid-column-gap: 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
    padding-top: 85rem;
    padding-bottom: 1rem;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, minmax(0, 2fr));
    padding-top: 20rem;
    padding-bottom: 1rem;
  }

  @media (min-width: 1280px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
    padding: 0;
    margin-top: 2rem;
  }
`

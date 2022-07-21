import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  width: 13.5rem;

  background: #ffffff;
  box-shadow: 0rem 0.12rem 0.5rem rgba(0, 0, 0, 0.13);
  border-radius: 0.5rem;
`

export const ProductImage = styled.img`
  width: 85%;
  height: 120px;
`

export const Content = styled.h3`
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  font-size: 1rem;
`

export const Price = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 4rem;
  height: 1.6rem;

  border-radius: 0.3rem;
  background: #373737;

  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 1rem;
  color: #ffffff;
`

export const Description = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-weight: 300;
  font-size: 0.75rem;
  color: #2c2c2c;
`

export const BuyButton = styled.button`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  width: 100%;
  height: 2rem;

  border: 0rem;
  border-radius: 0 0 0.5rem 0.5rem;
  background: #0f52ba;
`

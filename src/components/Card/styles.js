import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  width: 15rem;

  background: #ffffff;
  box-shadow: 0rem 0.12rem 0.5rem rgba(0, 0, 0, 0.13);
  border-radius: 0.5rem;
`

export const ProductImage = styled.img`
  margin-top: 0.3rem;
  width: 70%;
  min-width: 7.5rem;
  height: 9.3rem;
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  padding: 0.7rem;

  min-height: 3.75rem;
`

export const Title = styled.h3`
  width: 7.75rem;

  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  font-size: 1rem;
`

export const Price = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 4.68rem;
  height: 1.4rem;

  border-radius: 0.3rem;
  background: #373737;

  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 1rem;
  color: #ffffff;
`

export const BuyButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 0.5rem;
  margin: auto;

  width: 100%;
  height: 2rem;

  border: 0rem;
  border-radius: 0 0 0.5rem 0.5rem;
  background: #0f52ba;

  font-size: 1rem;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  color: #fff;

  cursor: pointer;
`

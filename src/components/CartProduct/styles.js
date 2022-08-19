import styled from 'styled-components'

import { X } from 'react-feather'

export const Container = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  flex-direction: row;
  padding: 0 1.2rem;

  width: 100%;
  height: 5.9rem;
  background: #fff;

  box-shadow: -2px 2px 10px rgba(0, 0, 0, 0.05);
  border-radius: 0.5rem;

  @media (max-width: 840px) {
    flex-direction: column;
    padding: 0.8rem 0;

    height: 15rem;
  }
`

export const RemoveButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 0;
  background: transparent;

  cursor: pointer;
`

export const FeatherIcon = styled(X)``

export const ProductImage = styled.img`
  width: 4.3rem;
  height: 4rem;

  @media (max-width: 840px) {
    width: 8rem;
    height: 7rem;
  }
`

export const Title = styled.h2`
  margin-left: 0.5rem;
  width: 9.3rem;

  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  font-size: 1rem;
  color: #2c2c2c;

  @media (max-width: 840px) {
    margin-top: 1rem;

    width: auto;
    font-size: 1.2rem;
  }
`

export const Price = styled.h3`
  margin-left: 1.5rem;

  font-family: 'Montserrat', sans-serif;
  font-size: 1.1rem;
  font-weight: 700;

  @media (max-width: 840px) {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.1rem 0.3rem;
    margin-top: 1.5rem;

    border-radius: 0.3rem;
    background: #373737;

    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    font-size: 1.3rem;
    color: #ffffff;
  }
`

import styled from 'styled-components'

export const Container = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  flex-direction: row;

  width: 100%;
  height: 95px;
  background: #fff;

  box-shadow: -2px 2px 10px rgba(0, 0, 0, 0.05);
  border-radius: 0.5rem;
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

export const ProductImage = styled.img`
  width: 46px;
  height: 57px;
`

export const Title = styled.h2``

export const Price = styled.h3``

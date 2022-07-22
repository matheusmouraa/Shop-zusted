import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  position: fixed;
  z-index: 1000;
  right: 0;
  top: 0;
  padding: 36px 22px;
  justify-content: space-between;

  height: 100%;
  width: ${({ open }) => (open ? '30' : '0')}%;
  background: #0f52ba;

  transition: width 0.5s;
`

export const Title = styled.h1`
  font-family: 'Montserrat';
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 2rem;
  color: #ffffff;
`

export const CloseButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 2.2rem;
  height: 2.2rem;

  border: 0;
  border-radius: 1rem;
  background: black;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  cursor: pointer;
`

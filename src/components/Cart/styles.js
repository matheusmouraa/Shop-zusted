import styled from 'styled-components'

export const Container = styled.div`
  position: fixed;
  z-index: 1;
  right: 0;
  top: 0;

  display: flex;
  align-items: center;
  flex-direction: column;

  height: 100%;
  width: ${({ open }) => (open ? '88' : '0')}%;
  max-width: 31rem;
  background: #0f52ba;

  box-shadow: -5px 0px 6px rgba(0, 0, 0, 0.13);

  transition: width 1s;
`

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
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

export const FinishedButton = styled.button`
  align-items: flex-end;
  width: 100%;
  height: 30px;

  margin: 0;
`

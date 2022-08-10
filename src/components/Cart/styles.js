import styled from 'styled-components'

export const Container = styled.div`
  position: fixed;
  z-index: 2;
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

export const Header = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding: 2rem 2.5rem;

  width: 100%;
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
  border-radius: 2rem;
  background: black;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  cursor: pointer;
`

export const CardsContainer = styled.div`
  display: grid;
  align-items: center;
  flex-direction: column;
  padding: 2rem 2.5rem 8rem;
  gap: 1.2rem;

  width: 100%;

  overflow-y: ${({ scrollbar }) => (scrollbar ? 'scrollbar' : 'hidden')};
  overflow-x: hidden;
`

export const FinishedButton = styled.button`
  position: absolute;
  bottom: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 6rem;

  border: 0;
  background: black;

  font-size: 2rem;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  color: white;

  cursor: pointer;
`

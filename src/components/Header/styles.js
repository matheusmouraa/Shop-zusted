import styled from 'styled-components'

export const Container = styled.header`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5%;
  width: 100%;
  height: 5rem;
  background: #0f52ba;
`

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const Title = styled.h1`
  margin-right: 0.5rem;
  font-size: 2.5rem;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  color: #ffffff;
`

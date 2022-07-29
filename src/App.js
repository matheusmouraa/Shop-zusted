import { useEffect } from 'react'
import { GlobalStyle } from './styles/global'

import { ProductsContainer } from './components/ProductsContainer'
import { Header } from './components/Header'
import { Cart } from './components/Cart'

import Server from './server'

Server()

export function App() {
  return (
    <>
      <GlobalStyle />
      <Cart />
      <Header />
      <ProductsContainer />
    </>
  )
}

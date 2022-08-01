import { GlobalStyle } from './styles/global'

import { ProductsContainer } from './components/ProductsContainer'
import { Header } from './components/Header'
import { Cart } from './components/Cart'

import { ProductsProvider } from './hooks/products'

import Server from './server'

Server()

export function App() {
  return (
    <ProductsProvider>
      <GlobalStyle />
      <Cart />
      <Header />
      <ProductsContainer />
    </ProductsProvider>
  )
}

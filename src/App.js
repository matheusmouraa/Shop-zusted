import { GlobalStyle } from './styles/global'

import { Header } from './components/Header'
import { ProductsContainer } from './components/ProductsContainer'
import { Cart } from './components/Cart'

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

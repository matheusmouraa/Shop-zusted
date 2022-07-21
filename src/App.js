import { GlobalStyle } from './styles/global'

import { Header } from './components/Header'
import { ProductsContainer } from './components/ProductsContainer'

export function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <ProductsContainer />
    </>
  )
}

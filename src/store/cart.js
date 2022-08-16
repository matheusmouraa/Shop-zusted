import create from 'zustand'
import produce, { original } from 'immer'

export const useCartStore = create(set => {
  const setState = state => set(produce(state))

  const initialState = {
    open: false,
    products: [],
    totalPrice: 0
  }

  return {
    state: {
      ...initialState
    },
    actions: {
      toggle: () =>
        setState(({ state }) => {
          state.open = !state.open
        }),
      add: product =>
        setState(({ state }) => {
          if (!original(state.products).includes(product)) {
            state.products.push(product)
            state.totalPrice += product.price
          }
        }),
      remove: product =>
        setState(({ state }) => {
          state.products.splice(product, 1)
          state.totalPrice -= product.price
        }),
      removeAll: () =>
        setState(({ state }) => {
          state.products = []
          state.totalPrice = 0
        }),
      reset: () => set({ state: { ...initialState } })
    }
  }
})

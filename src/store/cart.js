import create from 'zustand'
import produce, { original } from 'immer'

export const useCartStore = create(set => {
  const setState = fn => set(produce(fn))

  const initialState = {
    open: false,
    products: []
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
          }
        }),
      remove: product =>
        setState(({ state }) => {
          state.products.splice(product, 1)
        }),
      removeAll: () =>
        setState(({ state }) => {
          state.products = []
        }),
      reset: () => set({ state: { ...initialState } })
    }
  }
})

import { configureStore } from '@reduxjs/toolkit'
import uiSlice from './uiSlice/uiSlice'
import cartSlice from './cartSlice/cartSlice'

const store = configureStore({
    reducer: { ui: uiSlice.reducer, cart: cartSlice.reducer },
})

export default store

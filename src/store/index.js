import { configureStore } from '@reduxjs/toolkit'
import uiReducer from './slices/uiSlice'

// Define the initial state
const preloadedState = {
  ui: {
    sidebarShow: true
  }
}

// Create the store
export const store = configureStore({
  reducer: {
    ui: uiReducer
  },
  preloadedState,
  devTools: process.env.NODE_ENV !== 'production'
})

export default store 
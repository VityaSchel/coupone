import { configureStore } from '@reduxjs/toolkit'
import authentificationReducer from './slices/authentification'

export const store = configureStore({
  reducer: {
    authentificationState: authentificationReducer 
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
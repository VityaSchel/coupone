import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../index'

import Cookies from 'js-cookie'
import jwtDecode from 'jwt-decode'

interface AuthentificationState {
  authentificated: boolean
}

const initialState: AuthentificationState = {
  authentificated: false,
}

export const counterSlice = createSlice({
  name: 'authentificated',
  initialState,
  reducers: {
    login(state, action: PayloadAction<{ token: string }>) {
      const decoded = jwtDecode<{ id: string, exp: string }>(action.payload.token)
      Cookies.set('session_token', action.payload.token, { expires: new Date(Number(decoded.exp) * 1000) })
      state.authentificated = true
    },
    logout(state) {
      state.authentificated = false
    }
  },
})

export const { login, logout } = counterSlice.actions

export const selectAuthentification = (state: RootState) => state.authentificationState

export default counterSlice.reducer
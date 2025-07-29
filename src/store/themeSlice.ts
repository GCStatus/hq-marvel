import { createSlice } from '@reduxjs/toolkit'

import { RootState } from '.'

interface ThemeSlice {
  mode: 'dark' | 'light'
}

const initialState: ThemeSlice = {
  mode: localStorage.getItem('mode') === 'dark' ? 'dark' : 'light',
}

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggle(state) {
      state.mode = state.mode === 'light' ? 'dark' : 'light'
      localStorage.setItem('mode', state.mode)
    },
  },
})

export const { toggle } = themeSlice.actions

export const themeSelector = (state: RootState) => state.theme

export default themeSlice.reducer

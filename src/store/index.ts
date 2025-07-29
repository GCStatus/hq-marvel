import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query/react'

// Services
import api from '@/services'
import { rtkQueryErrorLogger } from '@/services/lib/error'

// Slices
import theme from './themeSlice'

const rootReducers = combineReducers({
  theme,
  [api.reducerPath]: api.reducer,
})

const store = configureStore({
  reducer: rootReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware, rtkQueryErrorLogger),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

setupListeners(store.dispatch)

export default store

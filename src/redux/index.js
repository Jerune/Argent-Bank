// @ts-nocheck
import { configureStore } from '@reduxjs/toolkit'
import { useAPI } from '../hooks/useAPI'
import userReducer from './reducer'

const store = configureStore({
  reducer: {
    user: userReducer,
    [useAPI.reducerPath]: useAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(useAPI.middleware),
})

store.subscribe(() => console.log(store.getState()))

export default store

import { configureStore } from '@reduxjs/toolkit'
import cryptoReducer from './data/cryptoSlice'
import webcryptoReducer from './data/webcryptoSlice'



export const store = configureStore({
  reducer: {
    crypto: cryptoReducer,
    webcrypto: webcryptoReducer,
  },
})
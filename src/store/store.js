import { configureStore } from '@reduxjs/toolkit'
import  counterSlice  from '../component/redux/CounterSlice'

export const store = configureStore({
  reducer: {
    counter: counterSlice
  },
})
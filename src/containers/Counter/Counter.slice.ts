import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
  counter: number
}

const initialState: CounterState = {
  counter: 0
}

export const counterSlice = createSlice({
  initialState,
  name: 'counter',
  reducers: {
    decrement: state => {
      state.counter -= 1
    },
    increment: state => {
      state.counter += 1
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.counter += action.payload
    }
  }
})

export const { decrement, increment, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer

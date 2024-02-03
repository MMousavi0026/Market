import { createSlice } from '@reduxjs/toolkit'

export const counterCart = createSlice({
    name: 'counterCart',
    initialState: 0,
    reducers: {
        increment: (state) => {
            state += 1
            return state
        },
        decrement: (state) => {
            state -= 1
            return state
        },
        incrementByAmount: (state, action) => {
            state += action.payload
            return state
        },
        decrementByAmount: (state, action) => {
            state -= action.payload
            return state
        }
    },
})

export const { increment, decrement, incrementByAmount, decrementByAmount } = counterCart.actions
export default counterCart.reducer
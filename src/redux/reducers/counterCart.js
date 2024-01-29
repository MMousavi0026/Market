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
    },
})

export const { increment, decrement, incrementByAmount } = counterCart.actions
export default counterCart.reducer
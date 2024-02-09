import {createSlice} from "@reduxjs/toolkit";

export const counterBeloved = createSlice({
    name: 'counterBeloved',
    initialState: 0,
    reducers: {
        increment: (state) => {
            state += 1;
            return state;
        },
        decrement: (state) => {
            state -= 1;
            return state;
        }
    }
})

export const [increment, decrement] = counterBeloved.actions;
export default counterBeloved.reducer
import { configureStore } from '@reduxjs/toolkit'
import counterCart from "./reducers/counterCart";

export default configureStore({
    reducer: {
        counterCart,
    },
})
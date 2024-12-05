import { configureStore } from "@reduxjs/toolkit";
import exerciseLogReducer from "./exerciseLogSlice"

const store = configureStore({
    reducer: {
        exerciseLog: exerciseLogReducer
    }
})

export default store
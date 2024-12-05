import { createSlice } from "@reduxjs/toolkit";

export const exerciseLogSlice = createSlice({
    name: 'exerciseLog',
    initialState: {
        workouts: [],
    },
    reducers: {
        addWorkout: (state, action) => {
            state.workouts.push(action.payload)
            console.log(action.payload)
        },
        deleteWorkout: (state, action) => {
            state.workouts = state.workouts.filter(workout => workout.workoutId !== action.payload.workoutId)
        }
    }
})

export const { addWorkout, deleteWorkout } = exerciseLogSlice.actions
export default exerciseLogSlice.reducer
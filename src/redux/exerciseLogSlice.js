import { createSlice } from "@reduxjs/toolkit";

export const exerciseLogSlice = createSlice({
    name: 'exerciseLog',
    initialState: {
        workouts: {},
        totalWorkouts: 0
    },
    reducers: {
        addWorkout: (state, action) => {
            const { id } = action.payload
            if (state.workouts[id]) {
                state.workouts[id] += 1
            } else {
                state.workouts[id] = 1
            }
            state.totalWorkouts += 1
        },
        deleteWorkout: (state, action) => {
            const { id } = action.payload
            if (state.workouts[id]) {
                state.workouts[id] -= 1
                if (state.workouts[id] === 0 ) {
                    delete state.workouts[id]
                }
                state.totalWorkouts -= 1
            }
        }
    }
})

export const { addWorkout, deleteWorkout } = exerciseLogSlice.actions
export default exerciseLogSlice.reducer
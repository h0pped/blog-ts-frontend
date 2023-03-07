import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface CounterSlice {
    value: number;
}

const initialState: CounterSlice = {
    value: 0
}

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        incremented(state) {
            state.value++;
        },
        decremented(state) {
            state.value--;
        },
        reset(state) {
            state.value = 0
        }
    }
})

export const { incremented } = counterSlice.actions
export default counterSlice.reducer
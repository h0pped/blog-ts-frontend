import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../slices/counter-slice'
import userReducer from '../slices/user-slice'

export const store = configureStore({
    reducer: { counter: counterReducer, user: userReducer }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>;
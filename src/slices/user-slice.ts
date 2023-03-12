import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface UserSlice {
    isLoggedIn: boolean,
    email: string | null;
    name: string | null;
    photo: string | null;

}
interface User {
    email: string | null;
    name: string | null;
    photo: string | null;
}

const initialState: UserSlice = {
    isLoggedIn: false,
    email: '',
    name: '',
    photo: ''
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login(state, action: PayloadAction<User>) {
            const { email, name, photo } = action.payload
            state.email = email;
            state.name = name;
            state.photo = photo
            state.isLoggedIn = true;

        },
        signOut(state) {
            state.email = '';
            state.name = '';
            state.photo = '';
            state.isLoggedIn = false;

        }
    }
})

export const { login, signOut } = userSlice.actions
export default userSlice.reducer
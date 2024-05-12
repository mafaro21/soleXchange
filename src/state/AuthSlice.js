import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoggedIn: false,
    name: '',
    email: '',
    regDate: '',
    lastLogin: '',
}


export const authSlice = createSlice({
    name: 'auth',
    initialState,

    reducers: {
        setLogin: (state, action) => {
            state.isLoggedIn = action.payload.isLoggedIn
            state.name = action.payload.name
            state.email = action.payload.email
            state.regDate = action.payload.regDate
            state.lastLogin = action.payload.lastLogin
        },

        setLogout: (state, action) => {
            state.isLoggedIn = false
            state.name = ' '
            state.email = ' '
            state.regDate = ' '
            state.lastLogin = ' '
        }
    }
})

export const { setLogin, setLogout } = authSlice.actions

export default authSlice.reducer
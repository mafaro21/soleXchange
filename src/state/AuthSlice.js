import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoggedIn: false,
    name: '',
}


export const authSlice = createSlice({
    name: 'auth',
    initialState,

    reducers: {
        setLogin: (state, action) => {
            state.isLoggedIn = action.payload.isLoggedIn
            state.name = action.payload.name
        },

        setLogout: (state, action) => {
            state.isLoggedIn = false
            state.name = null
        }
    }
})

export const { setLogin, setLogout } = authSlice.actions

export default authSlice.reducer
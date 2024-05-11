import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    page: '',
}

export const productPageSlice = createSlice({
    name: 'productPage',
    initialState,

    reducers: {
        setPage: (state, action) => {
            state.page = action.payload.page
        },
    }
})

export const { setPage } = productPageSlice.actions

export default productPageSlice.reducer
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    searchKeyword: '',
}

export const filterSlice = createSlice({
    name: 'searchKeyword',
    initialState,
    reducers: {
        setKeyword: (state, action) => {
            state.searchKeyword = action.payload
        },

        resetKeyword: (state, action) => {
            state.searchKeyword = ''
        },

    },
})

// Action creators are generated for each case reducer function
export const { setKeyword, resetKeyword } = filterSlice.actions

export default filterSlice.reducer
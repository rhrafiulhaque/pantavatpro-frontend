import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    accessToken: '',
    userDetails: ''
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        addAuth: (state, action) => {
            state.accessToken = action.payload.accessToken;
            state.userDetails = action.payload.userDetails;
        },
        removeAuth: (state, action) => {
            state.accessToken = '';
            state.userDetails = '';
        },

    },
})

// Action creators are generated for each case reducer function
export const { addAuth, removeAuth } = authSlice.actions

export default authSlice.reducer
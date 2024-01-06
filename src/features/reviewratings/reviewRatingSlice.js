import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    ratings: '',
    reviews: ''
}

export const ratingsReviewsSlice = createSlice({
    name: 'ratings',
    initialState,
    reducers: {
        setRatings: (state, action) => {
            state.ratings = action.payload
        },
        setReviews: (state, action) => {
            state.reviews = action.payload
        },



    },
})

// Action creators are generated for each case reducer function
export const { setReviews, setRatings } = ratingsReviewsSlice.actions

export default ratingsReviewsSlice.reducer
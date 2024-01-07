import { apiSlice } from "../api/apiSlice";

export const reviewApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getReviewByFoodId: builder.query({
            query: (foodId) => `/reviews/getReview/${foodId}`,
            providesTags: ["getAllReviews"]
        }),
        getAllReview: builder.query({
            query: () => `/reviews/getAllReview`,
            providesTags: ["getAllReviews"]
        }),
        getReviewsByUserEmail: builder.query({
            query: ({ email, page = 1, limit = 10 }) => `/reviews/getReviewsByUserEmail/${email}?page=${page}&limit=${limit}`,
            providesTags: ["getAllReviews"]
        }),

        addReview: builder.mutation({
            query: (data) => ({
                url: "/reviews/add-review",
                method: "POST",
                body: data,
            }),
            invalidatesTags: ["getAllReviews"]
        }),


        // deleteProduct: (builder).mutation({
        //     query: (id) => ({
        //         url: `/products/${id}`,
        //         method: 'DELETE'
        //     }),
        //     invalidatesTags: ['productList']
        // }),
        // updateProduct: builder.mutation({
        //     query: (data) => ({
        //         url: "/products/updateproduct",
        //         method: "PATCH",
        //         body: data,
        //     }),
        //     invalidatesTags: ["productList", "getProduct"]
        // }),

    })
})
export const { useAddReviewMutation, useGetReviewByFoodIdQuery, useGetReviewsByUserEmailQuery, useGetAllReviewQuery } = reviewApi;
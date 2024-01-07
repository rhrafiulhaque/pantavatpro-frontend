import { apiSlice } from "../api/apiSlice";

export const foodApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getFoods: builder.query({
            query: ({ page, limit }) => `/foods/get-all-foods?page=${page}&limit=${limit}`,
            providesTags: ["getAllfoods"]
        }),
        getFoodsByMenu: builder.query({
            query: ({ menu, page, limit }) => `/foods/getfoodsbymenu/${menu}?page=${page}&limit=${limit}`,
        }),
        getFoodsById: builder.query({
            query: (foodId) => `/foods/getfoodsbyid/${foodId}`,
        }),
        getSearchFood: builder.query({
            query: (searchKeyword) => `/foods/getsearchfood/${searchKeyword}`,
        }),

        addFood: builder.mutation({
            query: (data) => ({
                url: "/foods/add-food-item",
                method: "POST",
                body: data,
            }),
            invalidatesTags: ["getAllfoods"]
        }),

        updateFood: builder.mutation({
            query: (data) => ({
                url: "/foods/updateFood",
                method: "PATCH",
                body: data,
            }),
            invalidatesTags: (_) => ["getUserByEmail"]
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
export const { useGetFoodsQuery, useAddFoodMutation, useGetFoodsByMenuQuery, useGetFoodsByIdQuery, useGetSearchFoodQuery, useUpdateFoodMutation } = foodApi;
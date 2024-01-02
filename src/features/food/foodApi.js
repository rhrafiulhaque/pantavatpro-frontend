import { apiSlice } from "../api/apiSlice";

export const foodApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getFoods: builder.query({
            query: () => '/foods/get-all-foods',
            providesTags: ["getAllfoods"]
        }),
        getFoodsByMenu: builder.query({
            query: (menu) => `/foods/getfoodsbymenu/${menu}`,
        }),
        getFoodsById: builder.query({
            query: (foodId) => `/foods/getfoodsbyid/${foodId}`,
        }),

        addFood: builder.mutation({
            query: (data) => ({
                url: "/foods/add-food-item",
                method: "POST",
                body: data,
            }),
            invalidatesTags: ["getAllfoods"]
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
export const { useGetFoodsQuery, useAddFoodMutation, useGetFoodsByMenuQuery, useGetFoodsByIdQuery } = foodApi;
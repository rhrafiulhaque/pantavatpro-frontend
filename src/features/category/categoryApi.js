import { apiSlice } from "../api/apiSlice";

export const categoryApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllCategory: builder.query({
            query: () => '/category/get-all-category',
            providesTags: ["getAllCategory"]
        }),
        getCategoryByName: builder.query({
            query: (category) => `/category/categoryname/${category}`,
        }),

        addCategory: builder.mutation({
            query: (data) => ({
                url: "/category/add-category-item",
                method: "POST",
                body: data,
            }),
            invalidatesTags: ["getAllCategory"]
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
export const { useGetAllCategoryQuery, useAddCategoryMutation, useGetCategoryByNameQuery } = categoryApi;
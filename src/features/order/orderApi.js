import { apiSlice } from "../api/apiSlice";

export const orderApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllOrders: builder.query({
            query: () => '/orders/getAllOrders',
            providesTags: ["getAllOrders"]
        }),

        addOrder: builder.mutation({
            query: (data) => ({
                url: "/orders/add-order",
                method: "POST",
                body: data,
            }),
            invalidatesTags: ["getAllOrders"]
        }),
        updateDeliveryStatus: builder.mutation({
            query: (data) => ({
                url: "/orders/update-delivery-status",
                method: "PATCH",
                body: data,
            }),
            invalidatesTags: ["getAllOrders"]
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
export const { useGetFoodsQuery, useAddFoodMutation, useGetFoodsByMenuQuery, useGetFoodsByIdQuery, useUpdateDeliveryStatusMutation, useAddOrderMutation, useGetAllOrdersQuery } = orderApi;
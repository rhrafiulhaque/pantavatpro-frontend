import { apiSlice } from "../api/apiSlice";

export const userApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        createUser: builder.mutation({
            query: (data) => ({
                url: "/users/create-user",
                method: "POST",
                body: data,
            }),
        }),
        logIn: builder.mutation({
            query: (data) => ({
                url: "/auth/login",
                method: "POST",
                body: data,
            }),
        }),



    })
})
export const { useCreateUserMutation, useLogInMutation } = userApi;
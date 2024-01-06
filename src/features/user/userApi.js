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
        getUserByEmail: (builder).query({
            query: (email) => `/users/get-user-by-email/${email}`,
            providesTags: (_) => ["getUserByEmail"]
        }),

        updateProfile: builder.mutation({
            query: (data) => ({
                url: "/users/update-user",
                method: "PATCH",
                body: data,
            }),
            invalidatesTags: (_) => ["getUserByEmail"]
        }),



    })
})
export const { useCreateUserMutation, useLogInMutation, useGetUserByEmailQuery, useUpdateProfileMutation } = userApi;
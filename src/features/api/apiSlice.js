import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        // baseUrl: 'http://localhost:5000/api/v1/',
        baseUrl: 'https://pantavat-backend.vercel.app/api/v1/',
        prepareHeaders: (headers) => {
            const token = localStorage.getItem("accessToken");
            if (token) {
                headers.set("authorization", `${token}`);
            }
            return headers;
        },
    }),
    tagTypes: ["getUserByEmail", "getAllOrders", "getAllReviews"],
    endpoints: (builder) => ({})

});
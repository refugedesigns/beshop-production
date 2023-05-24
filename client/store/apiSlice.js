import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import axiosBaseQuery from "./axiosBaseQuery"

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:8000/api/v1', credentials: "include"}),
    prepareHeaders: (headers) => {
        headers.set('Cache-Control', 'no-cache');
        return headers 
    },
    tagTypes: ['Product', 'User', 'Order'],
    keepUnusedDataFor: 1,
    endpoints: builder => ({})
})
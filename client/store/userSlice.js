import { createSlice } from "@reduxjs/toolkit";
import { apiSlice } from "./apiSlice";


const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  address: "",
};

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getCurrentUser: builder.query({
      query: () => "/users/showCurrentUser",
      providesTags: ['User']
    })
  })
})

export const { useGetCurrentUser } = extendedApiSlice

export const selectCurrentUser = extendedApiSlice.endpoints.getCurrentUser.select() ?? initialState;
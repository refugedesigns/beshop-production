import { createSlice } from "@reduxjs/toolkit";
import { apiSlice } from "./apiSlice";


const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  address: "",
  msg: ""
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {}
})

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCurrentUser: builder.query({
      query: () => "/users/showCurrentUser",
      providesTags: ["User"],
      async onQueryStarted(args, { dispatch, getState, queryFulfilled }) {},
    }),
    signupUser: builder.mutation({
      query: (userInfo) => ({
        url: "/auth/register",
        method: "POST",
        body: userInfo,
      }),
      invalidatesTags: ["User"],
      async onQueryStarted(args, { dispatch, getState, queryFulfilled }) {},
    }),
    signInUser: builder.mutation({
      query: (userInfo) => ({
        url: "/auth/signin",
        method: "POST",
        body: userInfo,
      }),
      invalidatesTags: ["User"],
      async onQueryStarted(args, { dispatch, getState, queryFulfilled }) {},
    }),
    verifyEmail: builder.mutation({
      query: (verificationInfo) => ({
        url: "/auth/verify-email",
        method: "POST",
        body: verificationInfo,
      }),
      invalidatesTags: ["User"],
      async onQueryStarted(args, { dispatch, getState, queryFulfilled }) {},
    }),
  }),
});

export const { useGetCurrentUser, useSignupUserMutation, useSignInUserMutation, useVerifyEmailMutation } = userApiSlice

export const selectCurrentUser = (state) => state.user

export default userSlice.reducer
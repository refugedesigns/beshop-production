import { createSlice } from "@reduxjs/toolkit";
import { apiSlice } from "./apiSlice";


const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  address: "",
  profileImage: "",
  role: "",
  isVerified: false,
  isThirdParty: false,
  thirdPartyProvider: "N/A",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      console.log(action.payload)
      return { ...action.payload }
    },
    removeUser: (state, action) => {
      return {...initialState}
    },
    logTimeout: (state, action) => {
      return { ...initialState, error: action.payload}
    }
  },
});

export const { addUser, removeUser, logTimeout } = userSlice.actions

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCurrentUser: builder.query({
      query: () => ({ url: "/users/showCurrentUser" }),
      providesTags: ["User"],
      async onQueryStarted(args, { dispatch, getState, queryFulfilled }) {
        try {
          const data = await queryFulfilled;
          console.log(data)
          dispatch(addUser(data.data.user))
        } catch (err) {
          console.log(err);
          dispatch(logTimeout(err.error.data.msg))
        }
      },
    }),
    signupUser: builder.mutation({
      query: (userInfo) => ({
        url: "/auth/register",
        method: "POST",
        body: userInfo,
      }),
      invalidatesTags: ["User"],
      async onQueryStarted(args, { dispatch, getState, queryFulfilled }) {
        console.log(args);
        try {
          const data = await queryFulfilled;
          console.log(data.data.user);
        } catch (error) {
          console.error(error);
        }
      },
    }),
    signInUser: builder.mutation({
      query: (userInfo) => ({
        url: "/auth/login",
        method: "POST",
        body: userInfo,
      }),
      invalidatesTags: ["User"],
      async onQueryStarted(args, { dispatch, getState, queryFulfilled }) {
        console.log(args);
        try {
          const data = await queryFulfilled;
          console.log(data);
          dispatch(addUser(data.data.user))
        } catch (error) {
          console.error(error);
        }
      },
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
    updateViewedProducts: builder.mutation({
      query: (viewedProducts) => ({
        url: "/users/updateViewedProducts",
        method: "PATCH",
        body: {viewedProducts}
      }),
      invalidatesTags: ["User"],
      async onQueryStarted(args, { dispatch, getState, queryFulfilled }) {
        try {
          const user = await queryFulfilled
          console.log(user)
        } catch (error) {
          console.log(error)
        }
      },
    })
  }),
});

export const { useGetCurrentUserQuery, useSignupUserMutation, useSignInUserMutation, useVerifyEmailMutation, useUpdateViewedProductsMutation } = userApiSlice

export const selectCurrentUser = (state) => state.user

export default userSlice.reducer
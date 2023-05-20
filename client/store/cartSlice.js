import { createSlice } from "@reduxjs/toolkit";
import { apiSlice } from "./apiSlice";

const initialState = {
  shippingFees: 22.99,
  discount: 0,
  totalPrice: 0,
  totalItems: 0,
  subtotal: 0,
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingCartItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingCartItem) {
        existingCartItem.amount =
          existingCartItem.amount + Number(action.payload.amount);
        const calculateSubtotal = Number(
          existingCartItem.amount * existingCartItem.price
        );
        existingCartItem.subtotal = calculateSubtotal;
        const subtotals = state.items
          .map((item) => item.subtotal)
          .reduce((sum, item) => sum + item, 0);
        state.subtotal =
          Number(subtotals.toFixed(2)) * ((100 - state.discount) / 100);
        let calculateTotalPrice = state.subtotal + state.shippingFees;
        state.totalPrice = Number(calculateTotalPrice.toFixed(2));
        state.totalItems = state.items
          .map((item) => item.amount)
          .reduce((sum, item) => sum + item, 0);
      } else {
        const subtotal = Number(action.payload.price);
        state.items.push({
          id: action.payload.id,
          name: action.payload.name,
          image: action.payload.image,
          amount: action.payload.amount,
          price: action.payload.price,
          colors: action.payload.colors,
          subtotal: subtotal,
        });
        state.totalItems += 1;
        const calculateSubtotalPrice = state.items
          .map((item) => item.subtotal)
          .reduce((sum, item) => sum + item, 0);
        state.subtotal =
          Number(calculateSubtotalPrice.toFixed(2)) *
          ((100 - state.discount) / 100);
        const calculateTotalPrice = state.subtotal + state.shippingFees;
        state.totalPrice = Number(calculateTotalPrice.toFixed(2));
      }
    },
    removeFromCart: (state, action) => {
      const existingCartItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      state.totalItems--;
      if (existingCartItem.amount === 1) {
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        );
        const subtotals = Number(
          state.items
            .map((item) => item.subtotal)
            .reduce((sum, item) => sum + item, 0)
        );
        state.subtotal =
          Number(subtotals.toFixed(2)) * ((100 - state.discount) / 100);
        const totalPrice = state.subtotal + state.shippingFees;
        state.totalPrice = Number(totalPrice.toFixed(2));
      } else {
        existingCartItem.amount--;
        existingCartItem.subtotal = Number(
          existingCartItem.amount *
            existingCartItem.price *
            ((100 - state.discount) / 100)
        ).toFixed(2);
        const subtotals = Number(
          state.items
            .map((item) => item.subtotal)
            .reduce((sum, item) => sum + item, 0)
        );
        state.subtotal =
          Number(subtotals.toFixed(2)) * ((100 - state.discount) / 100);
        const totalPrice = state.subtotal + state.shippingFees;
        state.totalPrice = Number(totalPrice.toFixed(2));
      }
    },
    clearCartItems: (state) => {
      state.items = [];
      state.totalPrice = 0;
      state.totalItems = 0;
      state.subtotal = 0;
      state.discount = 0
    },
    deleteFromCart: (state, action) => {
      const existingCartItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      state.items = state.items.filter((item) => item.id !== action.payload.id);
      const subtotals = state.items
        .map((item) => item.subtotal)
        .reduce((sum, item) => sum + item, 0);
      state.totalItems = state.totalItems - existingCartItem.amount;
      state.subtotal =
        Number(subtotals.toFixed(2)) * ((100 - state.discount) / 100);
      state.totalPrice = state.subtotal + state.shippingFees;
    },
    addDiscount: (state, action) => {
      if (state.discount > 0) {
        return;
      }
      state.discount = action.payload.discount;
      const discountedSubtotal =
        state.subtotal * ((100 - state.discount) / 100);
      state.subtotal = Number(discountedSubtotal.toFixed(2));
      const total = state.subtotal + state.shippingFees;
      state.totalPrice = Number(total.toFixed(2));
    },
    resetDiscount: (state) => {
      if (state.discount == 0) {
        return;
      }
      state.discount = 0;
      const discountedSubtotal =
        state.subtotal * ((100 - state.discount) / 100);
      state.subtotal = Number(discountedSubtotal.toFixed(2));
      const total = state.subtotal + state.shippingFees;
      state.totalPrice = Number(total.toFixed(2));
    },
  },
});

const cartApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createOrder: builder.mutation({
      query: (orderInfo) => {
        return {
          url: "/orders",
          method: "POST",
          body: orderInfo,
        };
      },
      invalidatesTags: ["Order"],
      async onQueryStarted(args, { dispatch, getState, queryFulfilled }) {
        try {
          const orderData = await queryFulfilled;
          console.log(orderData);
        } catch (error) {
          console.error(error);
        }
      },
    }),
    getOrders: builder.query({
      query: () => "/orders/getCurrentUserOrders",
      providesTags: ["Order"],
      async onQueryStarted(args, { dispatch, getState, queryFulfilled }) {
        try {
          const orderData = await queryFulfilled;
          console.log(orderData);
        } catch (error) {
          console.error(error);
        }
      }
    }),
  }),
});

export const { useCreateOrderMutation, useGetOrdersQuery } = cartApiSlice;

export const { addToCart, removeFromCart, clearCartItems, deleteFromCart, addDiscount, resetDiscount } = cartSlice.actions 

export const selectTotalItems = state => state.cart.totalItems

export const selectTotalPrice = state => state.cart.totalPrice

export const selectShippingFees = state => state.cart.shippingFees

export const selectDiscount = state => state.cart.discount

export const selectSubtotal = state => state.cart.subtotal

export const selectCartItems = state => state.cart.items

export default cartSlice.reducer
import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { apiSlice } from "./apiSlice";
import { createSelector } from "@reduxjs/toolkit";

const productsAdapter = createEntityAdapter({
  selectId: (product) => product._id,
});

const initialState = productsAdapter.getInitialState();

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProducts: (state, action) => {
      productsAdapter.setAll(state, action.payload);
    },
  },
});

export const productsExtendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    fetchProductsByFilter: builder.query({
      query: (searchFilters="?limit=20") => {
        console.log(searchFilters);

        return { 
          url: `/products${searchFilters}` 
        };
      },
      transformResponse: (res) => {
        const { products } = res;
        return productsAdapter.setAll(initialState, products);
      },
      providesTags: (result, error, arg) => {
        return [
          { type: "Product", id: "LIST" },
          ...result?.ids?.map((id) => ({
            type: "Product",
            id,
          })),
        ];
      },
    }),
  }),
});

export const { useFetchProductsByFilterQuery, useLazyFetchProductsByFilterQuery } = productsExtendedApiSlice;

export const selectProductsResult = (state) => state.productsReducer;

const selectProductsData = createSelector(
  selectProductsResult,
  (products) => products
);

export const {
  selectAll: selectAllProducts,
  selectById: selectProductById,
  selectIds: selectProductsByIds,
} = productsAdapter.getSelectors(
  (state) => state.productsState.products ?? initialState
);

export default productsSlice.reducer;

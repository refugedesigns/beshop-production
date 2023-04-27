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
      console.log("Adding products to Products State");
      productsAdapter.setAll(state, action.payload);
    },
  },
});

export const { addProducts } = productsSlice.actions;

export const productsExtendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    fetchProductsByFilter: builder.query({
      query: (searchFilters) => {
        console.log(searchFilters);

        return {
          url: "/products",
          params: { ...searchFilters },
        };
      },
      keepUnusedDataFor: 1,
      async onQueryStarted({}, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          const patchResult = dispatch(addProducts(data));
        } catch {}
      },
      transformResponse: (res) => {
        const { products } = res;
        return products;
      },
      providesTags: (result, error, arg) => {
        return [
          { type: "Product", id: "LIST" },
          ...result?.map((product) => ({
            type: "Product",
            id: product._id,
          })),
        ];
      },
    }),
  }),
});

export const {
  useFetchProductsByFilterQuery,
  useLazyFetchProductsByFilterQuery,
} = productsExtendedApiSlice;

export const selectProductsResult = (state) => state.productsState;

const selectProductsData = createSelector(
  selectProductsResult,
  (products) => products
);

export const {
  selectAll: selectAllProducts,
  selectById: selectProductById,
  selectIds: selectProductsByIds,
} = productsAdapter.getSelectors(
  (state) => selectProductsData(state) ?? initialState
);

export default productsSlice.reducer;

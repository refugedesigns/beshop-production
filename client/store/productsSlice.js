import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { apiSlice } from "./apiSlice";
import { createSelector } from "@reduxjs/toolkit";

const productsAdapter = createEntityAdapter({
  selectId: (product) => product._id,
});

const initialState = {
  numOfPages: 0,
  nbHits: 0,
  ...productsAdapter.getInitialState(),
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProducts: (state, action) => {
      console.log("Adding products to Products State");
      state.nbHits = action.payload.nbHits;
      state.numOfPages = action.payload.numOfPages;
      productsAdapter.setAll(state, action.payload.products);
    },
  },
});

export const { addProducts } = productsSlice.actions;

export const productsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    fetchProductsByFilter: builder.query({
      query: (searchFilters) => {

        return {
          url: "/products",
          params: { ...searchFilters },
        };
      },
      keepUnusedDataFor: 1,
      async onQueryStarted({}, { dispatch, queryFulfilled }) {
        console.log("Starting to fetch products")
        try {
          const { data } = await queryFulfilled;

          const patchResult = dispatch(addProducts(data));
        } catch {}
      },
      providesTags: (result, error, arg) => {
  
        return [
          { type: "Product", id: "LIST" },
          ...result?.products?.map((product) => ({
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
} = productsApiSlice;

export const selectProductsResult = (state) => state.products

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

export const selectNumOfPages = state => state.products.numOfPages

export const selectnbHits = state => state.products.nbHits


export default productsSlice.reducer;

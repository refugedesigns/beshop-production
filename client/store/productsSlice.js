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
      state.nbHits = action.payload.nbHits;
      state.numOfPages = action.payload.numOfPages;
      productsAdapter.setAll(state, action.payload.products);
    },
    addReview: (state, action) => {
      state.entities[action.payload.productId].reviews.push(action.payload.review)
    }
  },
});

export const { addProducts, addReview } = productsSlice.actions;

export const productsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    fetchProductsByFilter: builder.query({
      query: (searchFilters) => {
        return {
          url: "/products",
          params: { ...searchFilters },
        };
      },
      async onQueryStarted({}, { dispatch, queryFulfilled }) {
        console.log("Starting to fetch products");
        try {
          const { data } = await queryFulfilled;

          dispatch(addProducts(data));
        } catch (error) {
          console.log(error);
          dispatch(addProducts({ nbHits: 0, numOfPages: 0, products: [] }));
        }
      },
      providesTags: (result, error, arg) => {
        if (result !== undefined) {
          return [
            "Product",
            ...result?.products?.map((product) => ({
              type: "Product",
              id: product._id,
            })),
          ];
        }
        return [{ type: "Product", id: "LIST" }];
      },
    }),
    updateViewCount: builder.mutation({
      query: (productId) => ({
        url: "/products/updateViewCount",
        method: "PATCH",
        body: { productId },
      }),
      invalidateTags: ["Product"],
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        console.log(args);
        try {
          const data = await queryFulfilled;
          console.log(data);
        } catch (error) {
          console.log(error);
        }
      },
    }),
    createProductReview: builder.mutation({
      query: (reviewInfo) => ({
        url: "/reviews",
        method: "POST",
        body: reviewInfo,
      }),
      invalidateTags: ["Product"],
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        console.log("Starting to create a review");
        console.log(args);
        try {
          const result = await queryFulfilled;
          console.log(result);
          dispatch(addReview({productId: result.data.review.product, review:result.data.review}))
        } catch (error) {
          console.log(error);
          apiSlice.util.invalidateTags(["User"])
        }
      },
    }),
  }),
});

export const {
  useFetchProductsByFilterQuery,
  useUpdateViewCountMutation,
  useCreateProductReviewMutation,
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

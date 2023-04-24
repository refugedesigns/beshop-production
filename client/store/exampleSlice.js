import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

//normalized redux state
const postAdapter = createEntityAdapter({}); // you can add a sortComparer function inside

// this returns an object with ids and entities fields for lookup table
const initialState = postAdapter.getInitialState();

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    getPostById: (state, action) => {
      const existingPost = state.entities[action.id];
      // do stuff with existing posts
    },
  },
  extraReducers: {
    // crude methods for entity adaptor
    // postAdapter.setAll(initialState, allPosts) => initialLoading all posts
    // postAdapter.upsertMany(state, posts) => add all posts to state
    // postAdapter.addOne(state, action.payload) => add one post to state
    // postAdapter.upsertOne(state, action.payload.id) => update one post of state
    // postAdapter.removeOne(state, action.payload.id) => remove one post from state
  },
});

// selectors
// export const { sellectAll: selectAllPosts, selectById: selectPostById, selectIds: selectPostByIds} = postAdapter.getSelectiors(state => state.posts)

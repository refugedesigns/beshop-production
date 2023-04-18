import { configureStore, combineReducers, getDefaultMiddleware } from "@reduxjs/toolkit";
import storage from "./storage";
import { persistReducer } from "redux-persist"
import cartReducer from "./cartSlice"


const rootReducer = combineReducers({
    cartReducer
})


const persistConfig = {
  key: "root",
  storage,
};

const persistedReducers = persistReducer(persistConfig, rootReducer);


export const store = configureStore({
    reducer: {
        persistedReducers
    },
    devTools: process.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false})
})
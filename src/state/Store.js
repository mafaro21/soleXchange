import { configureStore } from "@reduxjs/toolkit";
import authReducer from './AuthSlice.js'
import productPagereducer from "./ProductPage.js";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";

const persistConfig = {
    key: 'root',
    version: 1,
    storage
}

const reducer = combineReducers({
    auth: authReducer,
    page: productPagereducer,

})

const persistedReducer = persistReducer(persistConfig, reducer)

export const store = configureStore({
    reducer: persistedReducer,
})

export const persistor = persistStore(store)
import {configureStore, combineReducers} from "@reduxjs/toolkit";

import storage from "redux-persist/lib/storage"

import {
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'

import {setupListeners} from "@reduxjs/toolkit/query";

import {apiSlice} from "../Slices/apiSlice.js";
import {activeLanguageSlice} from "../Slices/activeLanguageSlice.js";
import {geoLocationSlice} from "../Slices/geoLocationSlice.js";
import {deviceSlice} from "../Slices/deviceSlice.js";
import {signUpMailSlice} from "../Slices/signUpMailSlice.js";
import {registeredMailSlice} from "../Slices/registeredMail.js";
import {userMailSlice} from "../Slices/userMailSlice.js";

const persistConfig = {
    key: 'root',
    storage: storage,
}
export const rootReducers = combineReducers({
    [apiSlice?.reducerPath]: apiSlice?.reducer,
    activeLanguage: activeLanguageSlice.reducer,
    geoLocation: geoLocationSlice.reducer,
    device: deviceSlice.reducer,
    signUpMail: signUpMailSlice.reducer,
    registeredMail: registeredMailSlice.reducer,
    userMail: userMailSlice.reducer
})


const persistedReducer = persistReducer(persistConfig, rootReducers)

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }).concat(apiSlice?.middleware),
})

setupListeners(store.dispatch)


export default store
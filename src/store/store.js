import { configureStore } from "@reduxjs/toolkit";
import { authSelector } from './../services/AuthSlice';
import { toastSelector } from './ToastSlice';
import storage from 'redux-persist/lib/storage';
import { FLUSH, PAUSE, PERSIST, persistReducer, PURGE, REGISTER, REHYDRATE } from "redux-persist";
import { combineReducers } from "redux";
import { dashboardSlice } from "../services/DashboardSlice";


const reducer = combineReducers({
    auth: authSelector,
    toast: toastSelector,
    dashboard: dashboardSlice.reducer
});

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        }
    })
});

export default store;
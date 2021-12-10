import { configureStore } from "@reduxjs/toolkit";
import { authSelector } from './../services/AuthSlice';
import { toastSelector } from './ToastSlice';

const store = configureStore({
    reducer: {
        auth: authSelector,
        toast: toastSelector
    }
});

export default store;
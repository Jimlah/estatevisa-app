import { createSlice } from '@reduxjs/toolkit';

export const ToastSlice = createSlice({
    name: 'toast',
    initialState: {
        message: '',
        type: '',
    },
    reducers: {
        showToast: (state, action) => {
            state.message = action.payload.message;
            state.type = action.payload.type;
        },
        clearToast: (state) => {
            state.message = null;
            state.type = null;
        }
    }
});

export const { showToast, clearToast } = ToastSlice.actions;
export const toastSelector = ToastSlice.reducer;
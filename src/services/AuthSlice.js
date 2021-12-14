import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { showToast } from '../store/ToastSlice';
import http from './../store/baseHttp';

export const loginUser = createAsyncThunk(
    'users/login',
    async (data, { rejectWithValue, dispatch }) => {
        try {
            const response = await http.post(`/${data.path}`, JSON.stringify(data.payload));
            if (response?.data.status === 'success') {
                dispatch(showToast({ message: 'Login Successful', type: 'success' }));
                return response.data;
            }
            return rejectWithValue(response.data);

        } catch (error) {
            dispatch(showToast({ message: error.response.data.message, type: error.response.data?.type ?? 'error' }));
            return rejectWithValue(error.response.data);
        }
    }
)

export const logOutUser = createAsyncThunk(
    'users/logout',
    async (data, { rejectWithValue, dispatch }) => {
        try {
            const response = await http.get('/logout');
            if (response?.data?.status === 'success') {
                dispatch(clearState());
                dispatch(showToast({ message: response.data.message, type: response.data.type }));
                return;
            }
            return rejectWithValue(response?.data);
        } catch (error) {
            dispatch(showToast({ message: error.response.data.message, type: error.response.data.type ?? 'error' }));
            return rejectWithValue(error?.response?.data);
        }
    }
)



export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        loading: false,
        error: null,
        user: null,
        roles: null,
        token: null,
    },
    reducers: {
        clearState: (state) => {
            state.user = null;
            state.roles = null;
            state.loading = false;
            state.error = null;
            state.token = null;
        },
    },
    extraReducers: {
        [loginUser.pending]: (state) => {
            state.loading = true;
            state.error = null;
        }
        ,
        [loginUser.fulfilled]: (state, action) => {
            state.loading = false;
            state.user = action.payload?.user;
            state.error = null;
            state.roles = action.payload?.role;
        }
        ,
        [loginUser.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload?.errors;
        }
    }
});

export const { clearState } = authSlice.actions;

export const authSelector = authSlice.reducer;
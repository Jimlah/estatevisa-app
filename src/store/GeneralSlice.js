import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import http from './baseHttp';
import { showToast } from './ToastSlice';

const SliceFunction = (name, basePath, payload = null) => {

    const getAll = createAsyncThunk(
        `${name}/getAll`,
        async (data, { rejectWithValue, dispatch }) => {
            try {
                const response = await http.get(`${data.path}`);
                dispatch(showToast({ message: response.data?.message, type: response.data?.status }));
                return response.data;
            } catch (error) {
                dispatch(showToast({ message: error.response.data.message, type: error.response.data.type }));
                return rejectWithValue(error.response.data);
            }
        }
    )

    const getById = createAsyncThunk(
        `${name}/getById`,
        async (data, { rejectWithValue, dispatch }) => {
            try {
                const response = await http.get(`${data.path}`);
                dispatch(showToast({ message: response.data?.message, type: response.data?.status }));
                return response.data;
            } catch (error) {
                dispatch(showToast({ message: error.response.data?.message, type: error.response.data?.type }));
                return rejectWithValue(error.response.data);
            }
        }
    );

    const create = createAsyncThunk(
        `${name}/create`,
        async (data, { rejectWithValue, dispatch }) => {
            try {
                const response = await http.post(data.path, JSON.stringify(data.payload));
                dispatch(showToast({ message: response.data?.message, type: response.data?.status }));
                return response.data;
            } catch (error) {
                dispatch(showToast({ message: error.response.data?.message, type: error.response.data?.type }));
                return rejectWithValue(error.response.data);
            }
        }
    );


    const update = createAsyncThunk(
        `${name}/update`,
        async (data, { rejectWithValue, dispatch }) => {
            try {
                const response = await http.put(`${data.path}`, JSON.stringify(data.payload));
                dispatch(showToast({ message: response.data?.message, type: response.data?.status }));
                return response.data;
            } catch (error) {
                dispatch(showToast({ message: error.response.data?.message, type: error.response.data?.type }));
                return rejectWithValue(error.response.data);
            }
        }
    );

    const remove = createAsyncThunk(
        `${name}/remove`,
        async (data, { rejectWithValue, dispatch }) => {
            try {
                const response = await http.delete(`${data.path}`);
                dispatch(showToast({ message: response.data?.message, type: response.data?.status }));
                return response.data;
            } catch (error) {
                dispatch(showToast({ message: error.response.data?.message, type: error.response.data?.type }));
                return rejectWithValue(error.response.data);
            }
        }
    );

    const slice = createSlice({
        name,
        initialState: {
            loading: false,
            error: null,
            data: null,
            link: null,
            item: null,
        },
        reducers: {},
        extraReducers: {
            [getAll.pending]: (state, action) => {
                state.loading = true;
                state.error = null;
            },
            [getAll.fulfilled]: (state, action) => {
                state.loading = false;
                state.data = action.payload.data;
                state.links = action.payload.links;
            },
            [getAll.rejected]: (state, action) => {
                state.loading = false;
                state.error = action.payload?.error;
            },
            [getById.pending]: (state, action) => {
                state.loading = true;
                state.error = null;
            },
            [getById.fulfilled]: (state, action) => {
                state.loading = false;
                state.item = action.payload;
            },
            [getById.rejected]: (state, action) => {
                state.loading = false;
                state.error = action.payload;
            },
            [create.pending]: (state, action) => {
                state.loading = true;
                state.error = null;
            }
            ,
            [create.fulfilled]: (state, action) => {
                state.loading = false;
            }
            ,
            [create.rejected]: (state, action) => {
                state.loading = false;
                state.error = action.payload.errors;
            }
            ,
            [update.pending]: (state, action) => {
                state.loading = true;
                state.error = null;
            }
            ,
            [update.fulfilled]: (state, action) => {
                state.loading = false;
            },
            [update.rejected]: (state, action) => {
                state.loading = false;
                state.error = action.payload?.error;
            },
            [remove.pending]: (state, action) => {
                state.loading = true;
                state.error = null;
            },
            [remove.fulfilled]: (state, action) => {
                state.loading = false;
            }
        }
    })

    return {
        slice,
        getAll,
        getById,
        create,
        update,
        remove
    };

}

export default SliceFunction;
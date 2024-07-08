import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const loginApi = createAsyncThunk('auth/login', async (loginData) => 
    {
    try {
        const response = await axios.post(`${process.env.REACT_APP_Url}/auth/login`, loginData);
        return response.data;
    }
    catch (error) {
        throw (error.response.data)
    }
});

const login_Slice = createSlice({
    name: 'auth',
    initialState: {
        isLoading: false,
        user: null,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(loginApi.pending, (state) => {
            state.isLoading = true
            state.user = null;
            state.error = null;
        })
            .addCase(loginApi.fulfilled, (state, action) => {
                state.isLoading = false
                state.user = action.payload;
                state.error = null;
            })
            .addCase(loginApi.rejected, (state, action) => {
                state.isLoading = false
                state.user = null;
                state.error = action.error.message;
            })
    }
})

export default login_Slice.reducer;
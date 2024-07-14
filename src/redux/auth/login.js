import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const loginApi = createAsyncThunk('Login/login', async (loginData, { rejectWithValue }) => {
    try {
        const response = await axios.post(`${process.env.REACT_APP_Url}/auth/login`, loginData);
        return response.data;
    } catch (error) {
        // Use rejectWithValue to pass the error payload to the rejected action
        return rejectWithValue(error.response.data);
    }
});

const login_Slice = createSlice({
    name: 'Login',
    initialState: {
        isLoading: false,
        access_token: "",
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loginApi.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(loginApi.fulfilled, (state, action) => {
                state.isLoading = false;
                state.access_token = action.payload.access_token; // Assuming the response contains an access_token
                state.message = action.payload.message; // Assuming the response contains a message
            })
            .addCase(loginApi.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload ? action.payload.message : action.error.message; // Handle different error payload structures
            });
    },
});

export default login_Slice.reducer;

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const loginApi = createAsyncThunk('Login/login', async (loginData) => 
    {
    try {
        const response = await axios.post(`${process.env.REACT_APP_Url}/auth/login`, loginData);
        return response.data;
    }
    catch (error) 
    {
        return  error.response.data
    }
});

const login_Slice = createSlice({
    name: 'Login',
    initialState: {
        isPending: false,
        access_token:"",
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(loginApi.pending, (state) => {
            state.isPending = true
            state.error = null;
        })
            .addCase(loginApi.fulfilled, (state, action) => 
                {
                state.isPending = false
                state.message=action.payload.message
            })
            .addCase(loginApi.rejected, (state, action) => {
                state.isPending = false
                state.error = action.payload.message;
            })
    }
})

export default login_Slice.reducer;
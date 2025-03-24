import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = {
    users: [],
    status: ''
};

export const fetchUsers = createAsyncThunk('users/fetch', async () => {
    const result = await axios.get('https://jsonplaceholder.typicode.com/users');
    return result.data;
});


export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        
        
    },
    extraReducers(builder){
        builder
        .addCase(fetchUsers.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(fetchUsers.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.users = action.payload;
        })
        .addCase(fetchUsers.rejected, (state) => {
            state.status = 'failed';
        })
    }
});

export const {} = userSlice.actions

export default userSlice.reducer;
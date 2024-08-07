import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    counter: 0,
    status: ''
};

export const ageUpAsync = createAsyncThunk('counter/ageUp', () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(5)
        }, 3000)
    });
});

export const ageDownAsync = createAsyncThunk('counter/ageUp', () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(5)
        }, 3000)
    });
});


export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {

    },
    extraReducers(builder) {
        builder
        .addCase(ageUpAsync.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(ageUpAsync.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.counter += action.payload;
        })
        .addCase(ageUpAsync.rejected, (state) => {
            state.status = 'failed'
        })
    }
})

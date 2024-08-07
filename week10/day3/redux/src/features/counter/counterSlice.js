import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

const initialState = {
    count: 0
};

export const delayIncrementThunk = createAsyncThunk('counter/delay', () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(4)
        }, 5000)
    })
})

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.count += 1;
        },
        decrement: (state) => {
            state.count -= 1;
        },
        reset: (state) => {
            state.count = 0;
        },
        incrementByNum: (state, action) => {
            state.count += action.payload
        },
        incrementBy2Nums: (state, action) => {
            state.count += action.payload.n1 + action.payload.n2
        },
        incrementWithPrepare: {
            reducer(state, action){
                state.count += action.payload;
            },
            prepare(num1, num2){
                return {payload: num1 + num2};
            }
        }
    },
    extraReducers(builder) {
        builder
        .addCase(delayIncrementThunk.pending, (state, action) => {
            state.count += 5
        })
        .addCase(delayIncrementThunk.fulfilled, (state, action) => {
            state.count += action.payload
        })
    }
});

export const {increment, decrement, reset, incrementByNum, incrementBy2Nums, incrementWithPrepare} = counterSlice.actions

export default counterSlice.reducer;
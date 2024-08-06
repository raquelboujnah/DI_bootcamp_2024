import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    count: 0
};

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
    } 
});

export const {increment, decrement, reset, incrementByNum, incrementBy2Nums, incrementWithPrepare} = counterSlice.actions

export default counterSlice.reducer;
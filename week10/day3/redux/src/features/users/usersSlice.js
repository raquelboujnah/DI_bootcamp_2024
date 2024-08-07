import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    users: [],
    status: ''
};

export const initUsers = createAsyncThunk('users/fetch', async () => {
    const result = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await result.json();
    return data;
});

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.users.push({id: nanoid(), name: action.payload.name, email: action.payload.email})
            console.log(state.users.payload);
            
        },
        fetchUsers: (state, action) => {
            state.users = action.payload
        },
        addUserWithPrepare: {
            reducer(state, action){
                state.users.push(action.payload)
            },
            prepare(name, email){
                return{payload: {id: nanoid(), name, email} }
            }
        }
    },
    extraReducers(builder) {
        builder
        .addCase(initUsers.pending, (state) => {
            state.status = 'loading'
        })
        .addCase(initUsers.fulfilled, (state, action) => {
            state.status = 'succeeded'
            state.users = action.payload
        })
        .addCase(initUsers.rejected, (state) => {
            state.status = 'failed'
        })
    }
});

export const {addUser, fetchUsers, addUserWithPrepare} = usersSlice.actions;

export default usersSlice.reducer;
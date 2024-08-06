import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    users: [
        { id: 1, name: "Jhon", email: "jjj@gmail.com" },
        { id: 2, name: "Anne", email: "aaa@gmail.com" },
        { id: 3, name: "Dan", email: "ddd@gmail.com" },
    ]
};

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.users.push({id: nanoid(), name: action.payload.name, email: action.payload.email})
            console.log(state.users.payload);
            
        },
        addUserWithPrepare: {
            reducer(state, action){
                state.users.push(action.payload)
            },
            prepare(name, email){
                return{payload: {id: nanoid(), name, email} }
            }
        }
    }
});

export const {displayUsers, addUser, addUserWithPrepare} = usersSlice.actions;

export default usersSlice.reducer;
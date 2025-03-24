import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = {
    posts: [],
    status: '',
    author: -1
};

export const fetchPosts = createAsyncThunk('posts/fetch', async () => {
    const result = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return result.data;
});

export const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        addOne: (state, action) => {
            const {id, name} = action.payload;
            const post = state.posts.find(post => post.id === id);
            if(post) {
                post.reactions[name] ++;
            };
        }, 
        filterAuthor: (state, action) => {            
            // state.posts = state.posts.filter(post => post.userId === action.payload.id)
            state.author = action.payload.id           
        }
    },
    extraReducers(builder){
        builder
        .addCase(fetchPosts.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(fetchPosts.fulfilled, (state, action) => {
            state.status = 'succeeded';
            const loadedPosts = action.payload.map(post => {
                post.reactions = {
                    thumbsUp: 0,
                    wow : 0,
                    heart: 0,
                    rocket: 0,
                    coffee: 0,
                }
                return post
            })
            state.posts = action.payload;
        })
        .addCase(fetchPosts.rejected, (state) => {
            state.status = 'failed';
        })
    }
});

export const posts = (state) => state.postReducer.posts;
export const status = (state) => state.postReducer.status;
export const author = (state) => state.postReducer.author;
export const state = (state) => state.postReducer;

export const {addOne, filterAuthor} = postSlice.actions

export default postSlice.reducer;
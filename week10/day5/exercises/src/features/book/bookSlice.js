import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    books: [{
        id: 1,
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        genre: "Fiction"
      },
      {
        id: 2,
        title: "1984",
        author: "George Orwell",
        genre: "Dystopian"
      },
      {
        id: 3,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        genre: "Classic"
      },
      {
        id: 4,
        title: "Pride and Prejudice",
        author: "Jane Austen",
        genre: "Romance"
      },
      {
        id: 5,
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        genre: "Fantasy"
      }
    ],
    genre: 'genre',
};


export const bookSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        filterGenre: (state, action) => {
            state.genre = action.payload
            console.log(action);
        }
    }
});

export const books = (state) => state.bookReducer.books;
export const genre = (state) => state.bookReducer.genre;

export const { filterGenre} = bookSlice.actions

export default bookSlice.reducer;
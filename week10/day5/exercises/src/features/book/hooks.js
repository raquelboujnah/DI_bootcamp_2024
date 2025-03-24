import { createSelector } from "@reduxjs/toolkit";
import { useSelector, useDispatch } from "react-redux";
import { books, genre } from "./bookSlice";
import { useCallback } from "react";
import { filterGenre } from "./bookSlice";

export const useBookSelector = () => {
    const selector = createSelector([books, genre], (books, genre) => {
        if(genre === 'genre') return books;
        return books.filter(book => book.genre == genre);
    });
    return useSelector(selector)
};

export const useBookDispatch = (genre) => {
    const dispatch = useDispatch();
    console.log(genre);
    
    return useCallback((genre)=>{
        dispatch(filterGenre(genre));
    }, [dispatch])
}


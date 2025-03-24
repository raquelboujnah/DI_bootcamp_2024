import { createSelector } from "@reduxjs/toolkit";
import { useSelector, useDispatch } from "react-redux";
import { posts, status, author, state, fetchPosts } from "./postSlice";
import { useCallback } from "react";

export const usePostSelector = () => {
    const selector = createSelector([posts, author], (posts, author) => {
        if(author == -1) return posts;
        return posts.filter(post => post.userId == author)
    });

    // const selectPosts = createSelector(state, (state) => state.posts);
    return useSelector(selector);
};

export const usePostStatus = () => {
    const selectStatus = createSelector(state, (state) => state.status);
    return useSelector(selectStatus);
};

export const usePostAuthor = () => {
    const selectAuthor = createSelector(state, (state) => state.author);
    return useSelector(selectAuthor);
};

export const useFetchPosts = () => {
    const dispatch = useDispatch();
    return useCallback(() => {
        dispatch(fetchPosts());
    }, [dispatch])
}

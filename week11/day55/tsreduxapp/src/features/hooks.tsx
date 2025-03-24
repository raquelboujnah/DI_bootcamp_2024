import { createSelector } from "@reduxjs/toolkit";
import { useSelector, useDispatch, useStore } from "react-redux";
import { useCallback } from "react";
import type { AppStore, AppDispatch, RootState } from "../app/store";
import { addTask, removeTask, toogleTask, clear, state } from "./slice";

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppStore = useStore.withTypes<AppStore>();

export const useTasksSelector = () => {
    return useAppSelector(
        createSelector([state], (state) => {
          return state.tasks;
        })
    );
};

export const useAddTask = () => {
    const dispatch = useDispatch();
    return useCallback((task: string) => {
        dispatch(addTask(task));
    }, [dispatch]);
};

export const useRemoveTask = () => {
    const dispatch = useDispatch();
    return useCallback((task: string) => {
        dispatch(removeTask(task));
    }, [dispatch])
};

export const useToogleTask = () => {
    const dispatch = useDispatch();
    return useCallback((task: string) => {
        dispatch(toogleTask(task));
    }, [dispatch])
};

export const useClearTasks = () => {
    const dispatch = useDispatch();
    return useCallback(() => {
      dispatch(clear());
    }, [dispatch]);
  };
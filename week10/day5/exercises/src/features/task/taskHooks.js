import { createSelector } from "@reduxjs/toolkit";
import { useSelector, useDispatch } from "react-redux";
import { useCallback } from "react";
import { tasks, categories, done } from "./taskSlice";
import { filterCategorie, filterCompleted, addTask, editTask, removeTask, toggleTask, addCategorie, editCategorie, removeCategorie } from "./taskSlice";

export const useTasksSelector = () => {
    const selector = createSelector([tasks, categories, done], (tasks, categories, done) => {
        let filteredTasks = tasks;
        console.log(done);
        
        if (categories !== 'categories') {
            filteredTasks = filteredTasks.filter(task => task.categorie === categories);
        }
        if (done !== null) {
            filteredTasks = filteredTasks.filter(task => task.completed === (done === 'completed'));
        }
        return filteredTasks;
    });
    return useSelector(selector);
};

export const useTaskDispatch = (categorie) => {
    const dispatch = useDispatch();
    return useCallback((categorie)=>{
        dispatch(filterCategorie(categorie));
    }, [dispatch])
};

export const useFilterCompleted = () => {
    const dispatch = useDispatch();
    return useCallback((status) => {
        dispatch(filterCompleted(status));
    }, [dispatch]);
};

// export const useAddTask = () => {
//     const dispatch = useDispatch();
//     return useCallback((task)=>{
//         dispatch(addTask(task));
//     }, [dispatch])
// };

export const useAddTask = () => {
    const dispatch = useDispatch();
    return (task) => dispatch(addTask(task));
};

export const useEditTask = (task) => {
    const dispatch = useDispatch();
    return useCallback((task)=>{
        dispatch(editTask(task));
    }, [dispatch])
};

export const useRemoveTask = (id) => {
    const dispatch = useDispatch();
    return useCallback((id)=>{
        dispatch(removeTask(id));
    }, [dispatch])
};

export const useToggleTask = (id) => {
    const dispatch = useDispatch();
    return useCallback((id)=>{
        dispatch(toggleTask(id));
    }, [dispatch])
};
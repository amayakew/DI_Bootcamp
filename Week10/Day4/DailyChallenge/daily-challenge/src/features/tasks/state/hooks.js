import {useSelector, useDispatch} from 'react-redux';
import { selectActiveCategory, selectCategories, selectTasks, selectCategoryById, selectActiveStatus, selectCompletedTasks, selectUndoneTasks } from './selectors';
import { addTask, editTask, deleteTask, changeActiveCategory, changeActiveStatus, changeTaskStatus, deleteCategory, editCategory } from './slice';

export const useTasksSelector = () => {
    return useSelector(selectTasks);
};

export const useCategoriesSelector = () => {
    return useSelector(selectCategories);
};

export const useActiveCategorySelector = () => {
    return useSelector(selectActiveCategory);
};

export const useActiveStatusSelector = () => {
    return useSelector(selectActiveStatus);
};

export const useAddTask = () => {
    const dispatch = useDispatch();
    return (name,category) => dispatch(addTask({name,category}));
};

export const useEditTask = () => {
    const dispatch = useDispatch();
    return (id, name,category) => dispatch(editTask({id, name,category}));
};

export const useEditCategory = () => {
    const dispatch = useDispatch();
    return (name,id) => dispatch(editCategory({name,id}));
};

export const useDeleteTask = () => {
    const dispatch = useDispatch();
    return (id) => dispatch(deleteTask({id}));
};

export const useDeleteCategory = () => {
    const dispatch = useDispatch();
    return (id) => dispatch(deleteCategory({id}));
};

export const useChangeTaskStatus = () => {
    const dispatch = useDispatch();
    return (id) => dispatch(changeTaskStatus({id}));
};

export const useChangeActiveCategory = () => {
    const dispatch = useDispatch();
    return (category) => dispatch(changeActiveCategory({category}));
};

export const useChangeActiveStatus = () => {
    const dispatch = useDispatch();
    return (status) => dispatch(changeActiveStatus({status}));
};

export const useCategoryIdSelector = (id) => {
    return useSelector(selectCategoryById(id));
};

export const useCompletedTasksSelector = () => {
    return useSelector(selectCompletedTasks);
};

export const useUndoneTasksSelector = () => {
    return useSelector(selectUndoneTasks);
};

export const useFilteredTasksSelector = (activeStatus, category) => {
    const allTasks = useTasksSelector();
    const completedTasks = useCompletedTasksSelector();
    const undoneTasks = useUndoneTasksSelector();

    let tasks;

    if (activeStatus === 'All') tasks = allTasks;
    if (activeStatus === 'Done') tasks = completedTasks;
    if (activeStatus === 'Undone') tasks =  undoneTasks;

    if (category !== 'All') 
        tasks = tasks.filter(task => task.category === category);
    return tasks;
};
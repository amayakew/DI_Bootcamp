import {createSelector} from '@reduxjs/toolkit';
import {state} from './slice';

export const selectTasks = createSelector([state], (state) => {
    return state.tasks;
});

export const selectCategories = createSelector([state], (state) => {
    return state.categories;
});

export const selectTasksByCategory = (category) => {
    return createSelector([state], (state) => {
        if (category == 'All') return state.tasks;

        return state.tasks.filter(task => task.category === category);
    });
};

export const selectCategoryById = (id) => {
    return createSelector([state], (state) => {
        return state.categories.find(category => category.id == id);
    });
};

export const selectCompletedTasks = createSelector([state], (state) => {
    return state.tasks.filter(task => task.isDone == true);
});

export const selectUndoneTasks = createSelector([state], (state) => {
    return state.tasks.filter(task => task.isDone == false);
});

export const selectActiveCategory = createSelector([state], (state) => {
    return state.activeCategory;
});

export const selectActiveStatus = createSelector([state], (state) => {
    return state.activeStatus;
});
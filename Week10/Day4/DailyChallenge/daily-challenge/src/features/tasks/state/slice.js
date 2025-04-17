import {createSlice} from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';


const HOME_ID = nanoid();
const SOCIAL_ID = nanoid();
const SPORT_ID = nanoid();
const WORK_ID = nanoid();

const initialState = {
    tasks: [
        {id: nanoid(), taskName: 'Gym Training', category: SPORT_ID, isDone: false},
        {id: nanoid(), taskName: 'Coffee with Jane', category: SOCIAL_ID, isDone: false},
        {id: nanoid(), taskName: 'Water Plants', category: HOME_ID, isDone: false},
        {id: nanoid(), taskName: 'Write code for Planner app Calendar', category: WORK_ID, isDone: false},
        {id: nanoid(), taskName: 'Play Tennis', category: SPORT_ID, isDone: false},
        {id: nanoid(), taskName: 'Bake an Apple-Pie', category: HOME_ID, isDone: false},
    ],

    categories: [
        {id: HOME_ID, name: 'Home'},
        {id: SOCIAL_ID, name: 'Social'},
        {id: SPORT_ID, name: 'Sport'},
        {id: WORK_ID, name: 'Work'},
    ],

    activeCategory: 'All',
    activeStatus: 'All',
};

const tasksSlice = createSlice({
    name: 'tasksTracker',
    initialState,
    reducers: {
        addTask: (state,action) => {
            let categoryId;
            const exisintgCategory = state.categories.find(category => category.name == action.payload.category);
            if (exisintgCategory) {
                categoryId = exisintgCategory.id;
            }
            else {
                const newCaregory = {id: nanoid(), name: action.payload.category};
                state.categories.push(newCaregory);
                categoryId = newCaregory.id;
            }
            state.tasks.push({id: nanoid(), taskName: action.payload.name, category: categoryId, isDone: false});
        },
        editTask: (state,action) => {
            const taskToUpdate = state.tasks.find(task => task.id == action.payload.id);
            if (taskToUpdate) {
                if (action.payload.name) {
                    taskToUpdate.taskName = action.payload.name;
                };
                if (action.payload.category){
                    taskToUpdate.category = action.payload.category; 
                };
            };
        },
        deleteTask: (state,action) => {
            state.tasks = state.tasks.filter(task => task.id != action.payload.id);
        },
        changeTaskStatus: (state,action) => {
            const taskToUpdate = state.tasks.find(task => task.id == action.payload.id);
            if (taskToUpdate) {
                taskToUpdate.isDone = !taskToUpdate.isDone; 
            };
        },

        changeActiveCategory: (state, action) => {
            state.activeCategory = action.payload.category;
        },

        deleteCategory: (state, action) => {
            state.categories = state.categories.filter(item => item.id != action.payload.id);
            state.tasks = state.tasks.filter(task => task.category != action.payload.id);
            state.activeCategory = 'All';
        },

        editCategory: (state,action) => {
            const category = state.categories.find(c => c.id == action.payload.id)
            if (category) {
                category.name = action.payload.name; 
            }
        },

        changeActiveStatus: (state,action) => {
            state.activeStatus = action.payload.status;
        },
    }
});

export const state = (state) => state;

export const {
    addTask, editTask,deleteTask,changeTaskStatus,
    deleteCategory, editCategory,
    changeActiveCategory,
    changeActiveStatus,
} = tasksSlice.actions;

export default tasksSlice.reducer;
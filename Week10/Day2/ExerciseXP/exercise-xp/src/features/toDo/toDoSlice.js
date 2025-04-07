import {createSlice} from '@reduxjs/toolkit';
import {v4 as uuidv4} from 'uuid';

const initialState = {
    tasks: []
};

const toDoSlice = createSlice({
    name: 'toDoList',
    initialState,
    reducers: {
        addToDo: (state, action) => {
            state.tasks.push({id: uuidv4(), name: action.payload, isDone: false});
        },
        toggleToDo: (state, action) => {
            const task = state.tasks.find(task => task.id === action.payload);
            if (task) {
              task.isDone = !task.isDone;
            }
        },
        removeToDo: (state, action) => {
            const taskIndex = state.tasks.findIndex(task => task.id === action.payload);
            if (taskIndex !== -1) {
              state.tasks.splice(taskIndex,1);
            }
        }
    }
})

export const {addToDo, toggleToDo, removeToDo} = toDoSlice.actions;
export default toDoSlice.reducer;
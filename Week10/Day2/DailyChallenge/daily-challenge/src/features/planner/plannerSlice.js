import {createSlice} from '@reduxjs/toolkit';
import {v4 as uuidv4} from 'uuid';

export const isoDateToDate = (isoDate) => {
    return isoDate.slice(0, 10);
};

const initialState = {
    tasksByDate: {
        [isoDateToDate(new Date().toISOString())]: []
    },
    activeDate: new Date().toISOString()
};


const plannerSlice = createSlice({
    name: 'tasksPlanner',
    initialState,
    reducers: {
        addToDo: (state, action) => {
            const currentDate = isoDateToDate(state.activeDate);
            state.tasksByDate[currentDate].push({id: uuidv4(), name: action.payload, isDone: false});
        },
        toggleToDo: (state, action) => {
            const currentDate = isoDateToDate(state.activeDate);
            const task = state.tasksByDate[currentDate].find(task => task.id === action.payload);
            if (task) {
              task.isDone = !task.isDone;
            }
        },
        removeToDo: (state, action) => {
            const currentDate = isoDateToDate(state.activeDate);
            const taskIndex = state.tasksByDate[currentDate].findIndex(task => task.id === action.payload);
            if (taskIndex !== -1) {
                state.tasksByDate[currentDate].splice(taskIndex,1);
            }
        },
        setDate: (state, action) => {
            state.activeDate = action.payload;
            const newActiveDate = isoDateToDate(action.payload);
            if (!state.tasksByDate[newActiveDate]) {
                state.tasksByDate[newActiveDate] = [];
            }
        }
    }
})

export const {addToDo, toggleToDo, removeToDo, setDate} = plannerSlice.actions;
export default plannerSlice.reducer;
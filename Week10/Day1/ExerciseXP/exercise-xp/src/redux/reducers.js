import {v4 as uuidv4} from 'uuid';

export const initState = {
    tasks: [],
}

export const tasksReducer = (state = initState, action) => {
	switch (action.type) {
		case "ADD_TASK":
            const tasksToDo = [...state.tasks];
            tasksToDo.push({id: uuidv4(), name: action.payload, isDone: false});
            return {...state, tasks: tasksToDo};

		case "CHANGE_STATUS":
            const completedTasks = state.tasks.map(task => task.id == action.payload ? {...task, isDone: !task.isDone} : task)
            return {...state, tasks: completedTasks};

		case "REMOVE_TASK":
            const updatedTasks = state.tasks.filter(task => task.id !== action.payload);
            return {...state, tasks: updatedTasks};

		default: 
			return state;
	};
};
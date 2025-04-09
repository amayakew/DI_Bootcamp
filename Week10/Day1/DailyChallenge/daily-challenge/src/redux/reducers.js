import {v4 as uuidv4} from 'uuid';


export const isoDateToDate = (isoDate) => {
      return isoDate.slice(0, 10);
}

export const initState = {
      tasksByDate: {
            [isoDateToDate(new Date().toISOString())]: []
      },
      activeDate: new Date().toISOString(),
  }

export const tasksReducer = (state = initState, action) => {
      const currentDate = isoDateToDate(state.activeDate)

	switch (action.type) {
		case "ADD_TASK":
            const tasksToDoByDate = {...state.tasksByDate};
            const tasksToDo = [...tasksToDoByDate[currentDate]];
            tasksToDo.push({id: uuidv4(), name: action.payload, isDone: false});
            tasksToDoByDate[currentDate] = tasksToDo;
            return {...state, tasksByDate: tasksToDoByDate};

		case "CHANGE_STATUS":
            const completedTasksByDate = {...state.tasksByDate};
            completedTasksByDate[currentDate] = completedTasksByDate[currentDate]?.map((task) => task.id == action.payload ? {
                  ...task,
                  isDone: !task.isDone
            }: task);
            return {...state, tasksByDate: completedTasksByDate};

		case "REMOVE_TASK":
            const updatedTasksByDate = {...state.tasksByDate};
            updatedTasksByDate[currentDate] = updatedTasksByDate[currentDate].filter(task => task.id !== action.payload);
            return {...state, tasksByDate: updatedTasksByDate};

		case "SET_DATE":
            const newTasksByDate = {...state.tasksByDate};
            const newActiveDate = isoDateToDate(action.payload);

            if (!newTasksByDate[newActiveDate]) {
                  newTasksByDate[newActiveDate] = [];
            }
            return {...state, activeDate: action.payload, tasksByDate: newTasksByDate};

		default: 
			return state;
	};
};
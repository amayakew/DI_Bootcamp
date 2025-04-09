export const addTask = (taskName) => {
	return {
		type: "ADD_TASK",
        payload: taskName
	}
}

export const changeStatus = (id) => {
	return {
		type: "CHANGE_STATUS",
        payload: id
	}
}

export const removeTask = (id) => {
	return {
		type: "REMOVE_TASK",
        payload: id
	}
}
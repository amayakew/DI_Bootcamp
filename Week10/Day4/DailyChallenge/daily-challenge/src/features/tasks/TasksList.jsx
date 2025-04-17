import { useActiveCategorySelector, useActiveStatusSelector, useChangeTaskStatus, useDeleteTask, useFilteredTasksSelector } from "./state/hooks";
import Task from "./Task";

const  TaskList = () => {
    const activeStatus = useActiveStatusSelector();
    const activeCategory = useActiveCategorySelector();
    const tasks = useFilteredTasksSelector(activeStatus, activeCategory);

    if (tasks.length === 0){
        return <h3 className="noTasksText">There are no tasks here :)</h3>
    }

    return (
        <>
            <div className="tasksContainer">
                {tasks && tasks.map((task) => {
                    return (
                        <Task key={task.id} task={task}/>
                    )
                })}
            </div>
        </>
    );
};

export default TaskList;
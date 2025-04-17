import { useEffect, useState } from "react";
import { useChangeTaskStatus, useDeleteTask, useEditTask, useCategoriesSelector } from "./state/hooks";

const Task = ({task}) => {
    const categories = useCategoriesSelector();
    const changeStatus = useChangeTaskStatus();
    const deleteTask = useDeleteTask();
    const editTask = useEditTask()

    const [isEditMode, setIsEditMode] = useState(false);
    const [inputValue, setInputValue] = useState(task.taskName);
    const [categoryValue, setCategoryValue] = useState(task.category);

    useEffect(() => {
        if (isEditMode) {
            setInputValue(task.taskName);
            setCategoryValue(task.category);
        }
    }, [isEditMode, task.taskName, task.category]);

    const saveTask = () => {
        editTask(task.id, inputValue, categoryValue)
        setIsEditMode(false)
    }

    if (isEditMode) {
        return (
            <>
                <div className="editTaskContainer">
                    <div className="editInputWrap">
                        <input value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
                        <select value={categoryValue} onChange={(e) => setCategoryValue(e.target.value)}>
                            {categories && categories.map(category => {
                                return (
                                    <option key={category.id} value={category.id}>{category.name}</option>
                                )
                            })}
                        </select>
                    </div>
                    <div className="taskButtons">
                        <button onClick={() => saveTask()} className="editTaskButton"> ✅ </button>
                        <button onClick={() => setIsEditMode(false)} className="editTaskButton"> ❌ </button>
                    </div>
                </div>
                
            </>
        )
    }

    return (
        <>
            <div className="taskWrap">
                <div className="taskInfo">
                    <input type="checkbox" checked={task.isDone} onChange={() => changeStatus(task.id)}/>
                    <span className="taskName"> {task.taskName} </span> 
                </div>
                <div className="taskButtons">
                    <button onClick={() => setIsEditMode(true)} className="taskButton"> ✍ </button>
                    <button onClick={() => deleteTask(task.id)} className="taskButton"> 🚮 </button>  
                </div>
            </div>
        </>
    );
};

export default Task;
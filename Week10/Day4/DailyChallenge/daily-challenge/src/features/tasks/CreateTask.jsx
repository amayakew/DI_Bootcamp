import { useAddTask } from "./state/hooks";
import { useRef } from "react";

const CreateTask = () => {
    const addTask = useAddTask();
    const nameRef = useRef(null);
    const categoryRef = useRef(null);

    const handleClick = () => {
        const name = nameRef.current.value;
        const category = categoryRef.current.value;
        if (name && category) {
            addTask(name,category);
            nameRef.current.value = '';
            categoryRef.current.value = '';
        };
    };

    return (
        <>
            <div className="addTaskWrap">
                <input ref={nameRef} placeholder="Name"/>
                <input ref={categoryRef} placeholder="Category"/>
                <button onClick={() => handleClick()} className="addTaskButton"> Add Task </button>
            </div>
        </>
    );
};

export default CreateTask;
import { useRef } from "react";
import { useDispatch } from "react-redux";

const AddTask = () => {
    const dispatch = useDispatch();
    const inputRef = useRef();

    const addTask = () => {
        const name = inputRef.current.value;
        if (name) {
            dispatch({type: 'ADD_TASK', payload: name});
            inputRef.current.value = "";
        }
    }

    return (
        <>
            <div style={{display: 'flex', alignItems: 'center', gap: '20px'}}>
                <input ref={inputRef}/>
                <button onClick={() => addTask()}>Add New Task</button>
            </div>
        </>
    );
};

export default AddTask;
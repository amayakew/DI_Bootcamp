import { useDispatch } from "react-redux";
import { toggleToDo, removeToDo } from "./toDoSlice";

const ToDoItem = ({id, isDone, name}) => {
    const dispatch = useDispatch();

    const handleChange = () => {
        dispatch(toggleToDo(id))
    };

    const handleClick = () => {
        dispatch(removeToDo(id));
    };

    return (
        <div>
            <input type='checkbox' checked={isDone} onChange={() => handleChange()}/>
            <span>{name}</span>
            <button onClick={() => handleClick()}> X </button>
        </div>
    );
};

export default ToDoItem;
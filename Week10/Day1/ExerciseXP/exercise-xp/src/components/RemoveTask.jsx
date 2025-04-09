import { useDispatch } from "react-redux";

const RemoveTask = ({id}) => {
    const dispatch = useDispatch();

    const removeTask = () => {
        dispatch({type: 'REMOVE_TASK', payload: id});
    };

    return (
        <>
            <button onClick={() => removeTask()}> X </button>
        </>
    );
};

export default RemoveTask;
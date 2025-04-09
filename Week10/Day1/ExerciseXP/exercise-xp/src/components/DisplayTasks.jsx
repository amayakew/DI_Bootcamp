import { useSelector,useDispatch } from "react-redux";
import RemoveTask from "./RemoveTask";
import { changeStatus } from "../redux/actions";

const DisplayTasks = () => {
    const tasks = useSelector(state => state.tasksReducer.tasks);
    const dispatch = useDispatch()
    const handleChange = (id) => {
        dispatch(changeStatus(id))
    }

    return (
        <>
            {
                tasks.map(task => {
                    return (
                    <div key={task.id} style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px'}}>
                        <div style={{display: 'flex', alignItems: 'center', gap: '20px'}}>
                            <input type='checkbox' checked={task.isDone} onChange={() => handleChange(task.id)}/>
                            <span>{task.name}</span>
                            <RemoveTask id={task.id}/>
                        </div>
                    </div>
                    )
                })
            }
        </>
    );
};

export default DisplayTasks;
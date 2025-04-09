import { useDispatch, useSelector } from "react-redux";
import RemoveTask from "./RemoveTask";
import { isoDateToDate } from "../redux/reducers";
import {changeStatus} from '../redux/actions'

const DisplayTasks = () => {
    const tasksByDate = useSelector(state => state.tasksReducer.tasksByDate);
    const activeDate = useSelector(state => state.tasksReducer.activeDate);
    const tasks = tasksByDate[isoDateToDate(activeDate)];
    const dispatch = useDispatch()

    const handleCheckboxChange = (id) => {
        dispatch(changeStatus(id))
    }

    return (
        <>
            {
                tasks.map(task => {
                    return (
                    <div key={task.id} style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px'}}>
                        <div style={{display: 'flex', alignItems: 'center', gap: '20px'}}>
                            <input type='checkbox' checked={task.isDone} onChange={() => handleCheckboxChange(task.id)}/>
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
import { useSelector } from "react-redux";
import ToDoItem from "./ToDoItem";
import { isoDateToDate } from "./plannerSlice";

const ToDoList = () => {
    const tasksByDate = useSelector((state) => state.plannerReducer.tasksByDate);
    const activeDate = useSelector((state) => state.plannerReducer.activeDate);
    const tasks = tasksByDate[isoDateToDate(activeDate)];

    return (
        <>
            {
                tasks.map(task => {
                    return (
                    <div key={task.id} style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px'}}>
                        <div style={{display: 'flex', alignItems: 'center', gap: '20px'}}>
                            <ToDoItem id={task.id} isDone={task.isDone} name={task.name}/>
                        </div>
                    </div>
                    )
                })
            }
        </>
    );
};

export default ToDoList;
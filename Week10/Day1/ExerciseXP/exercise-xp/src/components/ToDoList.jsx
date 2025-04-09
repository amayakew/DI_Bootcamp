import AddTask from './AddTask';
import DisplayTasks from './DisplayTasks';

const ToDoList = () => {
    return (
        <>
            <h2>My ToDo List</h2>
            <AddTask/>
            <DisplayTasks/>
        </>
    );
};

export default ToDoList;
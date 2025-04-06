import AddTask from './AddTask';
import DatePicker from './DatePicker';
import DisplayTasks from './DisplayTasks';

const ToDoList = () => {
    return (
        <>
            <h2>My ToDo List</h2>
            <DatePicker/>
            <AddTask/>
            <DisplayTasks/>
        </>
    );
};

export default ToDoList;
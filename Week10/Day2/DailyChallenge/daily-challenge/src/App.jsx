import ToDoList from './features/planner/ToDoList';
import AddToDo from './features/planner/AddToDo';
import './App.css';
import DatePicker from './features/planner/DatePicker';


function App() {

  return (
    <>
      <h2>ToDo Planner</h2>
      <DatePicker/>
      <AddToDo/>
      <ToDoList/>
    </>
  );
};

export default App;
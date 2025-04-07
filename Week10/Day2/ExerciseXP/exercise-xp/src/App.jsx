import ToDoList from './features/toDo/ToDoList';
import './App.css';
import AddToDo from './features/toDo/AddToDo';

function App() {

  return (
    <>
      <h2>ToDo List</h2>
      <AddToDo/>
      <ToDoList/>
    </>
  );
};

export default App;

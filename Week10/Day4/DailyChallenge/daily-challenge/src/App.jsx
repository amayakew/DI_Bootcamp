import TaskList from './features/tasks/TasksList';
import CreateTask from './features/tasks/CreateTask';
import CategorySelector from './features/tasks/CategorySelector';
import CategoryName from './features/tasks/CategoryName';
import './App.css';

function App() {

  return (
    <>
      <h2>Productivity Tracker</h2>
      <CreateTask/>
      <CategorySelector/>
      <div>
        <CategoryName/>
        <TaskList/>
      </div>
    </>
  );
};

export default App;

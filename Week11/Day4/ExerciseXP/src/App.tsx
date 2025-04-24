import './App.css';
import Counter from './components/Counter';
import Greeting from './components/Greeting';
import UserList from './components/UserList';
import Users from './components/Users';

function App() {

  return (
    <>
      <Greeting name='John' messageCount={11}/>
      <Counter/>
      <Users/>
      <UserList/>
    </>
  );
};

export default App;

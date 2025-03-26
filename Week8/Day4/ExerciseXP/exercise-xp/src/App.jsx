import "./App.css";
import UserFavoriteAnimals from './components/UserFavoriteAnimals.jsx';
import Exercise3 from "./components/Exercise3.jsx";

const user = {
  firstName: 'Bob',
  lastName: 'Dylan',
  favAnimals : ['Horse','Turtle','Elephant','Monkey']
};

function App(){
  const myelement = <h1>I Love JSX!</h1>;
  const sum = 5 + 5;
  
  return <>
    <span>Exercise1</span>
    <p>Hello World!</p>
    {myelement}
    <p>React is {sum} times better with JSX</p>

    <h3>{user.firstName}</h3>
    <h3>{user.lastName}</h3>

    <span>Exercise2</span>
    <UserFavoriteAnimals favAnimals={user.favAnimals}/>

    <span>Exercise3</span>
    <Exercise3/>

  </>
};

export default App;

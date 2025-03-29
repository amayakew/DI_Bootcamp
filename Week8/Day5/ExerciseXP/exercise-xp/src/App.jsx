import './App.css'
import Car from "./components/Car.jsx";
import Events from './components/Events.jsx';
import Phone from './components/Phone.jsx';
import Color from './components/Color.jsx';

const carinfo = {name: "Ford", model: "Mustang"};

function App() {
  return (
  <>
    <Car model={carinfo.model}/>
    <Events/>
    <Phone/>
    <Color/>
  </>
  );
};

export default App

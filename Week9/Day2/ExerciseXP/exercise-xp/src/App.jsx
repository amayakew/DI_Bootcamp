import { Routes, Route, NavLink } from "react-router";

import ErrorBoundary from "./components/ErrorBoundary";
import PostList from "./components/PostList";
import Example1 from "./components/Example1";
import Example2 from "./components/Example2";
import Example3 from "./components/Example3";

import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";

const HomeScreen = () => {return <h2>Home</h2>};
const ProfileScreen = () => {return <h2>Profile Screen</h2>};
const ShopScreen = () => {throw new Error("Shop Screen crashed!")};

const createProfile = async () => {
  return (
    fetch('https://webhook.site/7187c529-e77f-4132-9401-a0614c81d5dd', {
      method: "POST",
      headers: { 
        "Content-Type": "application/json", 
        "Cache-Control": "no-cache",
      },
      body: JSON.stringify({
        key1: 'myusername',
        email: 'mymail@gmail.com',
        name: 'Isaac',
        lastname: 'Doe',
        age: 27
      })
    })
  )
};

function App() {
  const handleClick = async () => {
    const response = await createProfile();
    console.log(response);
  };

  return (
    <div className="mainWrap">
      <header>
        <nav className={"nav nav-pills"}>
            <NavLink className={"nav-link"} to='/'>Home</NavLink>
            <NavLink className={"nav-link"} to='/profile'>Profile</NavLink>
            <NavLink className={"nav-link"} to='/shop'>Shop</NavLink>
        </nav>
      </header>

      <Routes>
        <Route path='/' element={<ErrorBoundary><HomeScreen/></ErrorBoundary>}/>
        <Route path='/profile' element={<ErrorBoundary><ProfileScreen/></ErrorBoundary>}/>
        <Route path='/shop' element={<ErrorBoundary><ShopScreen/></ErrorBoundary>}/>
      </Routes>
      <br/>
      <br/>
      <br/>
      <h5>Exercise 2</h5>
      <br/>
      <PostList/>
      <br/>
      <br/>
      <br/>
      <h5>Exercise 3</h5>
      <br/>
      <Example1/>
      <Example2/>
      <Example3/>
      <br/>
      <br/>
      <br/>
      <h5>Exercise 4</h5>
      <br/>
      <button type="button" onClick={() => handleClick()} style={{width: "300px", backgroundColor: "lightblue"}}>Press me to post some data</button>
    </div>
  );
};

export default App;

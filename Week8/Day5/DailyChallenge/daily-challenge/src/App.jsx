import { useState } from 'react';
import './App.css';

function App() {
  const [languages, setLanguages] = useState([
    {name: "Php", votes: 0},
    {name: "Python", votes: 0},
    {name: "JavaSript", votes: 0},
    {name: "Java", votes: 0}
  ]);

  const updateVotes = (index) => {
    languages[index].votes += 1;
    setLanguages([...languages]);
  };

  return(
    <>
      <h1>Vote your language!</h1>
      <div id="langContainer">
        {languages && languages.map((lang, index) => (
          <div key={lang.name} className='lang'><span>{lang.votes}</span><span className='langname'>{lang.name}</span><button type='button' onClick={() => updateVotes(index)} className='btn'>Click Here</button></div>
        ))}
      </div>
    </>
  );
};

export default App

import './App.css'
import BuggyCounter from './components/BuggyCounter';
import ErrorBoundry from './components/ErrorBoundry';
import Colors from './components/Colors';

function App() {

  return (
    <>
    <h1>Exercise 1</h1>
    <p style={{fontWeight: "bold", textAlign: "left"}}>Click on the numbers to increase the counters.<br/>The counter is programmed to throw error when it reaches 5. This simulates a JS error in a component</p><hr/>
    <p>This two counters are inside one boundry, so if one crashes, the boundry will replace both of them</p>
    <ErrorBoundry>
      <BuggyCounter/>
      <BuggyCounter/>
    </ErrorBoundry>
    <hr/>

    <p>These two counters are each inside of their own boundry, so if one crashes, the other is not affected</p>
    <ErrorBoundry>
      <BuggyCounter/>
    </ErrorBoundry>
    <ErrorBoundry>
      <BuggyCounter/>
    </ErrorBoundry>
    <hr/>

    <p>The counter is not inside of boundry, so if crashes, all other components are deleted</p>
    <BuggyCounter/>

    <h1>Exercise 2</h1>
    <Colors/>
    </>
  );
};

export default App;

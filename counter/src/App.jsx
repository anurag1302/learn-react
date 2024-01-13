import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(10);

  function incrementCounter() {
    setCount(count + 1);
  }
  function decrementCounter() {
    setCount(count - 1);
  }
  return (
    <>
      <h2>Hello World, I am a useState example!!</h2>
      <h3>
        useState hook helps to update the DOM when there's a state change, the
        count var is getting updated everywhere where its referenced
        automatically!!!
      </h3>
      <h3>Counter : {count}</h3>
      <div>
        <button onClick={incrementCounter}>Increment Counter {count}</button>
      </div>
      <div>
        <button onClick={decrementCounter}>Decrement Counter {count}</button>
      </div>
      <p>Counter value here too : {count}</p>
    </>
  );
}

export default App;

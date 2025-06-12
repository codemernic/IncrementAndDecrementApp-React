import { useState } from "react";
import "./App.css";

import React from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const IncrementFunc = () => {
    setCount(count + 1);
  };
  const DecrementFunc = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <h1>Count:{count}</h1>
      <button onClick={IncrementFunc}>Increment</button>
      <button onClick={DecrementFunc}>Increment</button>
    </div>
  );
};

export default App;

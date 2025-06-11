import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const HandlerChangeInc = () => {
    setCount(count + 1);
    console.log(count);
  };
  const HandlerChangeDec = () => {
    setCount(count - 1);
    console.log(count);
  };

  return (
    <>
      <h1>Counter: {count}</h1>
      <button onClick={HandlerChangeInc}>Increase</button>
      <button onClick={HandlerChangeDec}>Decrease</button>
    </>
  );
}

export default App;

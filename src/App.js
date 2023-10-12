import { useState } from "react";
function App() {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <button onClick={() => setCounter(counter => counter+1)}>+1</button>
      <p>{counter}</p>
    </>
  );
}

export default App;

import React from "react";

const App = () => {
  const [count,setCount]=React.useState(0);
  const increment =()=>{
    setCount(count+1);
  }
  const decrement=()=>{
    setCount(count-1);
  }
    return(
        <>
        <h1>Client Site Rendering</h1>
          <p>{count}</p>
          <button onClick={increment}>Increment</button>
          <button onClick={decrement}>Decrement</button>
        </>
);
};

export default App;

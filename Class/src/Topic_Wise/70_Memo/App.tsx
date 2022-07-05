import React, { useState } from "react";
import Home from "./components/Home";

const App = () => {
  const [count, setCount] = useState<number>(0);
  const [data, setData] = useState<number>(100);

  return (
    <>
      <h1>Count {count}</h1>
      <Home data={data} />
      <button
        onClick={() => {
          setCount(count + 1);
          // now here we are changing the 'count' state which will reRender the 'App' component again and also we have not change the state value that are being pass as an props to 'Home' component
          // but also be default 'Home' component will get rerender
          // in that case we will wrap 'Home' component with memo
        }}
      >
        Count
      </button>
      <button
        onClick={() => {
          // but when we will change the state of 'data' which is pass to 'Home' component as props only at that time 'Home' component will get rerender
          setData(data + 1);
        }}
      >
        Data
      </button>
    </>
  );
};

export default App;

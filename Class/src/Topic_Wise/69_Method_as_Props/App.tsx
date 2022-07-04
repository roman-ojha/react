import React from "react";
import Child from "./components/Child";

const App = (): JSX.Element => {
  const alertName = (): void => {
    alert("Hello roman");
  };

  return (
    <>
      <Child alertName={alertName} />
      {/* here we will pass function instance as props */}
    </>
  );
};

export default App;

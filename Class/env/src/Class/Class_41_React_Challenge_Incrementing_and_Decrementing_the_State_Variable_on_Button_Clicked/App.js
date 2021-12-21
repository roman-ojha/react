import React, { useState } from "react";

const App = () => {
  const [currentValue, updateValue] = useState(0);
  const increment = () => {
    updateValue(currentValue + 1);
  };
  const decrement = () => {
    if (currentValue > 0) {
      updateValue(currentValue - 1);
    } else {
      window.alert("Sorry, Zero limit Riched");
    }
  };
  return (
    <>
      <div id="container_body">
        <div id="main_container">
          <div id="nav_value">
            <h1>{currentValue}</h1>
          </div>
          <button id="increment_button" onClick={increment}>
            Increm
          </button>
          <button id="decrement_button" onClick={decrement}>
            Decrem
          </button>
        </div>
      </div>
    </>
  );
};

export default App;

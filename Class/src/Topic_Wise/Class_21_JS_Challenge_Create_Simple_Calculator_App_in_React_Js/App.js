import React from "react";
import * as Calculator from "./React-components/Calculator";

function App() {
  return (
    <>
      <ul>
        <li>Sum of two no. is: {Calculator.Sum(1, 2)}</li>
        <li>Sub of two no. is: {Calculator.Sub(1, 6)}</li>
        <li>Div of two no. is: {Calculator.Div(1, 5)}</li>
        <li>Mult of two no. is: {Calculator.Mult(33, 4)}</li>
      </ul>
    </>
  );
}

export default App;

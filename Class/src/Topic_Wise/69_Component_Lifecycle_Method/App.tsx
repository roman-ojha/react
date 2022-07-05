import React, { useState } from "react";
import "./styles/styles.css";
import Counter from "./components/Counter";

export default function App() {
  const [showCounter, setShowCounter] = useState(false);
  return (
    <div className="App">
      <h1> Our App</h1>
      <button onClick={() => setShowCounter(!showCounter)}>
        {showCounter ? "Hide Counter" : "Show Counter"}
      </button>
      {showCounter && <Counter />}
      {/* after setting 'setShowCount' as true then 'Counter' component get Mounted, so this phase can called as 'Mounting' phase */}
      {/* and when we will set 'setShowCount' as false then 'Counter' component get unMounted from the page and that phase be called as 'UnMounted' phase */}

      <Counter />
      {/* but in this case this 'Counter' component have its out lifecycle */}
    </div>
  );
}
